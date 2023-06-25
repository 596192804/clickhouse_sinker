FROM alpine:latest
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
RUN apk --no-cache add ca-certificates tzdata
RUN echo "Asia/shanghai" >  /etc/timezone
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
ADD ./clickhouse_sinker /home/
WORKDIR /home