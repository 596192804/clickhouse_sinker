/*Copyright [2019] housepower

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

package input

import (
	"context"
	"strings"
	"sync"
	"time"

	"github.com/pkg/errors"
	"github.com/twmb/franz-go/pkg/kgo"
	"github.com/twmb/franz-go/plugin/kzap"
	"go.uber.org/zap"

	"github.com/housepower/clickhouse_sinker/config"
	"github.com/housepower/clickhouse_sinker/model"
	"github.com/housepower/clickhouse_sinker/util"
)

var _ Inputer = (*KafkaFranz)(nil)

// KafkaFranz implements input.Inputer
// refers to examples/group_consuming/main.go
type KafkaFranz struct {
	cfg       *config.Config
	taskCfg   *config.TaskConfig
	cl        *kgo.Client
	ctx       context.Context
	cancel    context.CancelFunc
	wgRun     sync.WaitGroup
	putFn     func(msg *model.InputMessage)
	cleanupFn func()
}

// NewKafkaFranz get instance of kafka reader
func NewKafkaFranz() *KafkaFranz {
	return &KafkaFranz{}
}

// Init Initialise the kafka instance with configuration
func (k *KafkaFranz) Init(cfg *config.Config, taskCfg *config.TaskConfig, putFn func(msg *model.InputMessage), cleanupFn func()) (err error) {
	k.cfg = cfg
	k.taskCfg = taskCfg
	k.ctx, k.cancel = context.WithCancel(context.Background())
	k.putFn = putFn
	k.cleanupFn = cleanupFn
	kfkCfg := &cfg.Kafka

	opts := []kgo.Opt{
		kgo.SeedBrokers(strings.Split(kfkCfg.Brokers, ",")...),
		kgo.ConsumeTopics(taskCfg.Topic),
		kgo.ConsumerGroup(taskCfg.ConsumerGroup),
		kgo.DisableAutoCommit(),
		kgo.OnPartitionsRevoked(k.onPartitionRevoked),
		kgo.MaxConcurrentFetches(3),
		kgo.FetchMaxBytes(1 << 27),      //134 MB
		kgo.BrokerMaxReadBytes(1 << 27), //134 MB
		kgo.WithLogger(kzap.New(util.Logger)),
	}
	if k.cl, err = kgo.NewClient(opts...); err != nil {
		err = errors.Wrap(err, "")
		return
	}
	return nil
}

// kafka main loop
func (k *KafkaFranz) Run() {
	k.wgRun.Add(1)
	defer k.wgRun.Done()
	for {
		fetches := k.cl.PollFetches(k.ctx)
		if fetches == nil || fetches.IsClientClosed() {
			break
		}
		var hasError bool
		fetches.EachError(func(_ string, _ int32, err error) {
			err = errors.Wrap(err, "")
			util.Logger.Error("kgo.Client.PollFetchs() failed", zap.Error(err))
			hasError = true
		})
		if hasError {
			continue
		}
		fetches.EachRecord(func(rec *kgo.Record) {
			msg := &model.InputMessage{
				Topic:     rec.Topic,
				Partition: int(rec.Partition),
				Key:       rec.Key,
				Value:     rec.Value,
				Offset:    rec.Offset,
				Timestamp: &rec.Timestamp,
			}
			k.putFn(msg)
		})
	}
	k.cl.Close() // will trigger k.onPartitionRevoked
	util.Logger.Info("KafkaFranz.Run quit due to context has been canceled", zap.String("task", k.taskCfg.Name))
}

func (k *KafkaFranz) CommitMessages(msg *model.InputMessage) error {
	// "LeaderEpoch: -1" will disable leader epoch validation
	k.cl.CommitRecords(context.Background(), &kgo.Record{Topic: msg.Topic, Partition: int32(msg.Partition), Offset: msg.Offset, LeaderEpoch: -1})
	return nil
}

// Stop kafka consumer and close all connections
func (k *KafkaFranz) Stop() error {
	k.cancel()
	k.wgRun.Wait()
	return nil
}

// Description of this kafka consumer, which topic it reads from
func (k *KafkaFranz) Description() string {
	return "kafka consumer of topic " + k.taskCfg.Topic
}

func (k *KafkaFranz) onPartitionRevoked(_ context.Context, _ *kgo.Client, _ map[string][]int32) {
	begin := time.Now()
	k.cleanupFn()
	util.Logger.Info("consumer group cleanup",
		zap.String("task", k.taskCfg.Name),
		zap.String("consumer group", k.taskCfg.ConsumerGroup),
		zap.Duration("cost", time.Since(begin)))
}