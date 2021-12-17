(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{202:function(s,a,t){"use strict";t.r(a);var e=t(3),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[s._v("#")]),s._v(" Run")]),s._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[s._v("#")]),s._v(" Requirements")]),s._v(" "),t("p",[s._v("Note: Ensure "),t("code",[s._v("clickhouse-server")]),s._v(" and "),t("code",[s._v("kafka")]),s._v(" work before running clickhouse_sinker.")]),s._v(" "),t("h2",{attrs:{id:"configs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configs"}},[s._v("#")]),s._v(" Configs")]),s._v(" "),t("blockquote",[t("p",[s._v("There are two ways to get config: a local single config, or Nacos.")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("For local file:")]),s._v(" "),t("p",[t("code",[s._v("clickhouse_sinker --local-cfg-file docker/test_auto_schema.json")])])]),s._v(" "),t("li",[t("p",[s._v("For Nacos:")]),s._v(" "),t("p",[t("code",[s._v("clickhouse_sinker --nacos-addr 127.0.0.1:8848 --nacos-username nacos --nacos-password nacos --nacos-dataid test_auto_schema")])])])]),s._v(" "),t("blockquote",[t("p",[s._v("Read more detail descriptions of config in "),t("RouterLink",{attrs:{to:"/configuration/config.html"}},[s._v("here")])],1)]),s._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),t("p",[s._v("Let's follow up a piece of the systest script.")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Prepare")]),s._v(" "),t("ul",[t("li",[s._v("let's checkout "),t("code",[s._v("clickhouse_sinker")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/housepower/clickhouse_sinker.git\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" clickhouse_sinker\n")])])]),t("ul",[t("li",[s._v("let's start standalone clickhouse-server and kafka in container:")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker-compose up -d\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Create a simple table in Clickhouse")]),s._v(" "),t("blockquote",[t("p",[s._v("It's not the duty for clickhouse_sinker to auto create table, so we should do that manually.")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),s._v(" test_auto_schema\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("day")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" toDate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DateTime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" Float64\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MergeTree\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("day")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Create a topic in kafka")]),s._v(" "),t("blockquote",[t("p",[s._v("I use "),t("a",{attrs:{href:"https://github.com/birdayz/kaf",target:"_blank",rel:"noopener noreferrer"}},[s._v("kaf"),t("OutboundLink")],1),s._v(" tool to create topics.")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ kaf topic create topic1 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" -r "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n✅ Created topic"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n      Topic Name:            topic1\n      Partitions:            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n      Replication Factor:    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n      Cleanup Policy:        delete\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Run clickhouse_sinker")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ./clickhouse_sinker --local-cfg-file docker/test_auto_schema.json\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Send messages to the topic")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"time" : "2020-12-18T03:38:39.000Z", "name" : "name1", "value" : 1}\'')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" kaf -b "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'127.0.0.1:9092'")]),s._v(" produce topic1\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"time" : "2020-12-18T03:38:39.000Z", "name" : "name2", "value" : 2}\'')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" kaf -b "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'127.0.0.1:9092'")]),s._v(" produce topic1\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"time" : "2020-12-18T03:38:39.000Z", "name" : "name3", "value" : 3}\'')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" kaf -b "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'127.0.0.1:9092'")]),s._v(" produce topic1\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Check the data in clickhouse")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" test_auto_schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Elapsed: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.016")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n")])])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);