// ── ENDPOINTS ─────────────────────────────────────────────────────────────────

export const AWS_SVCS = [
  {name:"DynamoDB",      cat:"nosql",      icon:"⬡", st:"nosql",    ops:["PutItem","GetItem","DeleteItem","UpdateItem","Scan","Query","BatchWriteItem","BatchGetItem","TransactWriteItems","TransactGetItems","DescribeTable"]},
  {name:"S3",            cat:"filestore",  icon:"🪣", st:"filestore",ops:["PutObject","GetObject","DeleteObject","DeleteObjects","HeadObject","CopyObject","ListObjectsV2","CreateBucket","DeleteBucket","ListBuckets","CreateMultipartUpload","UploadPart","CompleteMultipartUpload"]},
  {name:"SQS",           cat:"streaming",  icon:"📨", st:"streams",  ops:["SendMessage","SendMessageBatch","ReceiveMessage","DeleteMessage","DeleteMessageBatch","CreateQueue","DeleteQueue","PurgeQueue","GetQueueUrl","GetQueueAttributes","ChangeMessageVisibility","ListQueues"]},
  {name:"SNS",           cat:"streaming",  icon:"📣", st:"streams",  ops:["Publish","CreateTopic","DeleteTopic","ListTopics","Subscribe","ListSubscriptions","GetTopicAttributes"]},
  {name:"Secrets Mgr",   cat:"secrets",    icon:"🔑", st:"secrets",  ops:["GetSecretValue","CreateSecret","PutSecretValue","UpdateSecret","DeleteSecret","ListSecrets","DescribeSecret","RotateSecret"]},
  {name:"SSM Params",    cat:"secrets",    icon:"📋", st:"secrets",  ops:["GetParameter","GetParameters","PutParameter","DeleteParameter","GetParametersByPath","DescribeParameters"]},
  {name:"RDS / Aurora",  cat:"sql",        icon:"🗄", st:"nosql",   ops:["CreateDBInstance","DescribeDBInstances","CreateDBCluster","DescribeDBClusters","CreateDBSnapshot","DeleteDBInstance"]},
  {name:"ElastiCache",   cat:"cache",      icon:"⚡", st:"nosql",   ops:["CreateCacheCluster","DescribeCacheClusters","CreateReplicationGroup","DescribeReplicationGroups","DeleteCacheCluster"]},
  {name:"CloudWatch",    cat:"observability",icon:"📊",st:"nosql",  ops:["PutMetricData","GetMetricData","GetMetricStatistics","ListMetrics","PutMetricAlarm","DescribeAlarms","PutDashboard"]},
  {name:"CW Logs",       cat:"observability",icon:"📄",st:"nosql",  ops:["CreateLogGroup","CreateLogStream","PutLogEvents","GetLogEvents","FilterLogEvents","StartQuery","DescribeLogGroups"]},
  {name:"IAM",           cat:"identity",   icon:"🛡", st:"nosql",   ops:["CreateRole","GetRole","DeleteRole","ListRoles","AttachRolePolicy","DetachRolePolicy","CreateUser","GetUser","DeleteUser","CreatePolicy","ListPolicies"]},
  {name:"STS",           cat:"identity",   icon:"🎟", st:"memory",  ops:["GetCallerIdentity","AssumeRole","GetSessionToken"]},
  {name:"ECR",           cat:"containers", icon:"📦", st:"nosql",   ops:["CreateRepository","DescribeRepositories","GetAuthorizationToken","DescribeImages","ListImages","PutImage"]},
  {name:"ECS",           cat:"compute",    icon:"🐳", st:"response",ops:["RunTask","CreateService","DescribeClusters","DescribeTasks","RegisterTaskDefinition","DeregisterTaskDefinition"]},
  {name:"EKS",           cat:"compute",    icon:"☸", st:"response",ops:["CreateCluster","DescribeClusters","CreateNodegroup","CreateFargateProfile","CreateAddon"]},
  {name:"EventBridge",   cat:"events",     icon:"🌉", st:"response",ops:["PutEvents","PutRule","PutTargets","CreateEventBus","ListRules","DescribeRule"]},
  {name:"Lambda",        cat:"compute",    icon:"λ",  st:"response",ops:["Invoke","CreateFunction","UpdateFunctionCode","PublishVersion","CreateAlias","GetFunction"]},
];

export const AZURE_SVCS = [
  {name:"Blob Storage",    cat:"filestore",  icon:"🫙", st:"filestore",ops:["PUT blob","GET blob","DELETE blob","HEAD blob","ListBlobs","CreateContainer","DeleteContainer"]},
  {name:"Cosmos DB (SQL)", cat:"nosql",      icon:"🌌", st:"nosql",   ops:["CreateDocument","ReadDocument","ReplaceDocument","DeleteDocument","ReadDocuments","ExecuteQuery"]},
  {name:"Cosmos DB (Mongo)",cat:"nosql",     icon:"🌿", st:"nosql",   ops:["CreateDocument","ReadDocument","ReplaceDocument","DeleteDocument","ReadDocuments"]},
  {name:"Table Storage",   cat:"nosql",      icon:"🗂", st:"nosql",   ops:["InsertOrMergeEntity","QueryEntities","DeleteEntity","GetEntity"]},
  {name:"Key Vault",       cat:"secrets",    icon:"🗝", st:"secrets",  ops:["SetSecret","GetSecret","DeleteSecret","ListSecrets","SetKey","GetKey","Sign","Verify"]},
  {name:"Service Bus",     cat:"messaging",  icon:"🚌", st:"streams",  ops:["SendMessage","ReceiveMessage","CompleteMessage","AbandonMessage","PeekMessages"]},
  {name:"Event Hub",       cat:"streaming",  icon:"📡", st:"streams",  ops:["PutRecord","PutRecords","GetRecords","GetShardIterator","DescribeStream"]},
  {name:"Azure Redis",     cat:"cache",      icon:"⚡", st:"nosql",   ops:["GET","SET","DEL","EXISTS","EXPIRE","TTL","HSET","HGET","HGETALL","LPUSH","RPOP","SADD","SMEMBERS"]},
  {name:"Azure SQL",       cat:"sql",        icon:"🗃", st:"nosql",   ops:["ExecuteStatement","BeginTransaction","CommitTransaction","RollbackTransaction"]},
];

export const STREAMING_SVCS = [
  {name:"SQS",           cat:"aws · queue",     icon:"📨", st:"streams", ops:["SendMessage","SendMessageBatch","ReceiveMessage","DeleteMessage","DeleteMessageBatch","CreateQueue","DeleteQueue","PurgeQueue","GetQueueUrl","GetQueueAttributes","ChangeMessageVisibility","ListQueues"]},
  {name:"SNS",           cat:"aws · pub/sub",   icon:"📣", st:"streams", ops:["Publish","CreateTopic","DeleteTopic","ListTopics","Subscribe","Unsubscribe","ListSubscriptions","GetTopicAttributes"]},
  {name:"Kafka",         cat:"confluent · stream",icon:"Ⓚ",st:"streams", ops:["produce (any topic)","consume (any topic)","per-topic offset + partition mock","per-topic produce/consume override"]},
  {name:"RabbitMQ",      cat:"pika · queue",    icon:"🐇", st:"streams", ops:["channel.basic_publish","channel.basic_consume","channel.basic_get","channel.basic_ack","channel.basic_nack","connection.close"]},
  {name:"Event Hub",     cat:"azure · stream",  icon:"📡", st:"streams", ops:["PutRecord","PutRecords","GetRecords","GetShardIterator","DescribeStream"]},
  {name:"Service Bus",   cat:"azure · queue",   icon:"🚌", st:"streams", ops:["SendMessage","ReceiveMessage","CompleteMessage","AbandonMessage","PeekMessages"]},
];

export const EXT_EXAMPLES = [
  {name:"Stripe",    url:"https://api.stripe.com",           ex:'{ "id": "ch_mock", "status": "succeeded" }'},
  {name:"SendGrid",  url:"https://api.sendgrid.com",         ex:"status_code: 202, response: {}"},
  {name:"Twilio",    url:"https://api.twilio.com",           ex:'{ "sid": "SM_mock", "status": "sent" }'},
  {name:"Slack",     url:"https://hooks.slack.com",          ex:'{ "ok": true }'},
  {name:"GitHub",    url:"https://api.github.com",           ex:'{ "id": 1, "full_name": "mock/repo" }'},
  {name:"Google OAuth",url:"https://oauth2.googleapis.com", ex:'{ "access_token": "mock_tok", "expires_in": 3599 }'},
  {name:"Okta",      url:"https://your-org.okta.com",        ex:'{ "access_token": "mock_tok" }'},
  {name:"PagerDuty", url:"https://api.pagerduty.com",        ex:'{ "incident": { "id": "mock_id" } }'},
  {name:"Datadog",   url:"https://api.datadoghq.com",        ex:'{ "status": "ok" }'},
  {name:"HubSpot",   url:"https://api.hubapi.com",           ex:'{ "id": "mock_contact_1" }'},
];

export const ST_COLORS = {
  nosql:    {label:"NoSQL Store",   color:"#7c6aff"},
  filestore:{label:"File Store",    color:"#ffd93d"},
  streams:  {label:"Stream Store",  color:"#00ffc8"},
  secrets:  {label:"Secrets Store", color:"#4ecdc4"},
  response: {label:"Response-only", color:"#ff9a3c"},
  memory:   {label:"In-memory",     color:"#888"},
  cache:    {label:"Cache Store",   color:"#ff6b6b"},
};

// ── INSTALL STEPS ─────────────────────────────────────────────────────────────
export const STEPS = [
  {id:"01",title:"Prerequisites",lang:"bash",
   desc:"MockMesh requires Python 3.9+ and pip.",
   code:`python --version   # 3.9 or higher required
pip --version      # 20.0 or higher`},

  {id:"02",title:"Install MockMesh",lang:"bash",
   desc:"Install via pip. Recommended: use a virtual environment.",
   code:`pip install mockmesh

# Recommended: virtual environment
python -m venv .venv && source .venv/bin/activate
pip install mockmesh

# Verify version
python -c "import mockmesh; print(mockmesh.__version__)"
# 1.0.0`},

  {id:"03",title:"Initialize in One Line",lang:"python",
   desc:"Call initialize() once at the top of your entry point or conftest.py. All interception layers activate transparently — no SDK changes required.",
   code:`import mockmesh

# Minimal — intercepts everything with built-in defaults
engine = mockmesh.initialize()

# With custom config + dedicated workspace
engine = mockmesh.initialize(
    config_path  = "config/custom_overrides.json",
    storage_path = "/tmp/mockmesh-local",
)

# With folder of per-service overrides (aws.json, azure.json, …)
engine = mockmesh.initialize(
    responses_path = "config/overrides/",
)

mockmesh.shutdown()   # at exit`},

  {id:"04",title:"Four-Tier Resolution",lang:"text",
   desc:"Every request passes through four tiers in priority order. The first tier that returns a non-empty response wins.",
   code:`Tier 1  (highest)  responses_path folder
          explicit folder passed to initialize()
          aws.json, azure.json, http.json, kafka.json, rabbitmq.json

Tier 2             .mockmesh/ auto-detect
          *.json files at the workspace root
          picked up automatically — no code change needed

Tier 3             Storage (live data)
          data written by PutObject / PutItem / Enqueue
          reads back real local file content

Tier 4  (lowest)   Built-in defaults
          mockmesh/defaults/aws.json
          mockmesh/defaults/kafka.json  etc.

→ No network call is ever made.
→ Your app code is completely unchanged.`},

  {id:"05",title:"HTTP Rules",lang:"json",
   desc:"Use the http section of custom_overrides.json to intercept any URL. Match by exact URL, glob pattern, or substring. Rules are evaluated top-to-bottom; first match wins.",
   code:`{
  "http": {
    "rules": [
      {
        "match": { "url": "https://payments.acme.io/v2/charge", "method": "POST" },
        "response": {
          "status": 200,
          "headers": { "X-Transaction-Id": "txn-001" },
          "body": { "charge_id": "ch_001", "status": "succeeded" }
        }
      },
      {
        "match": { "url_contains": "stripe.com", "method": "POST" },
        "response": {
          "status": 200,
          "body": { "id": "pi_mock_001", "status": "succeeded" }
        }
      },
      {
        "match": { "url": "https://api.acme.io/v1/products*", "method": "GET" },
        "response": {
          "status": 200,
          "body": { "products": [{ "id": "p1", "name": "Widget" }], "total": 1 }
        }
      }
    ]
  }
}`},

  {id:"06",title:"AWS Per-Operation Overrides",lang:"json",
   desc:"The aws section overrides responses for any service/operation pair. Fires for all calls to that operation regardless of resource (any bucket, table, queue).",
   code:`{
  "aws": {
    "rules": [
      {
        "match": { "service": "s3", "operation": "GetObject" },
        "response": {
          "status": 200,
          "body": {
            "Body":        "eyJlbnYiOiJwcm9kIiwiZGVidWciOmZhbHNlfQ==",
            "ContentType": "application/json",
            "ETag":        "\\"custom-etag\\""
          }
        }
      },
      {
        "match": { "service": "secretsmanager", "operation": "GetSecretValue" },
        "response": {
          "status": 200,
          "body": {
            "SecretString": "{\\"db_host\\":\\"prod.db.internal\\",\\"api_key\\":\\"sk-live-abc\\"}",
            "VersionId": "v-001"
          }
        }
      },
      {
        "match": { "service": "dynamodb", "operation": "GetItem" },
        "response": {
          "status": 200,
          "body": {
            "Item": {
              "id":   { "S": "override-001" },
              "name": { "S": "Override Item" }
            }
          }
        }
      }
    ]
  }
}`},

  {id:"07",title:"Kafka & RabbitMQ Overrides",lang:"json",
   desc:"Override produce/consume responses per topic (Kafka) or per queue/exchange (RabbitMQ). Built-in Kafka and RabbitMQ interceptors work with confluent-kafka, kafka-python, and pika.",
   code:`{
  "kafka": {
    "rules": [
      {
        "match": { "topic": "order-events" },
        "produce_response": { "error": null, "offset": 100, "partition": 0 },
        "consume_response": {
          "topic": "order-events", "partition": 0, "offset": 100,
          "value": "{\\"order_id\\":\\"ORD-100\\",\\"status\\":\\"confirmed\\"}"
        }
      }
    ]
  },
  "rabbitmq": {
    "rules": [
      {
        "match": { "queue": "order-queue", "exchange": "*" },
        "publish_response": { "delivery_tag": 10 },
        "consume_response": {
          "body": "{\\"order_id\\":\\"ORD-RMQ\\",\\"priority\\":\\"high\\"}",
          "routing_key": "order-queue",
          "delivery_tag": 10,
          "redelivered": false
        }
      }
    ]
  }
}`},

  {id:"08",title:"Use Your SDK Unchanged",lang:"python",
   desc:"Zero application code changes. boto3, azure-sdk, requests, confluent-kafka, pika — all behave identically to real cloud, but locally.",
   code:`import boto3
import mockmesh
engine = mockmesh.initialize()

# DynamoDB — stateful (Tier 2: storage-backed)
ddb = boto3.client("dynamodb", region_name="us-east-1")
ddb.put_item(TableName="Users", Item={"id":{"S":"u1"},"name":{"S":"Alice"}})
item = ddb.get_item(TableName="Users", Key={"id":{"S":"u1"}})
print(item["Item"]["name"]["S"])   # → Alice

# S3 — bytes saved to .mockmesh/blob/
s3 = boto3.client("s3", region_name="us-east-1")
s3.put_object(Bucket="assets", Key="logo.png", Body=b"\\x89PNG...")
obj = s3.get_object(Bucket="assets", Key="logo.png")
print(obj["Body"].read()[:4])      # → b'\\x89PNG'

# SecretsManager — Tier 1 (config override) wins
sm = boto3.client("secretsmanager", region_name="us-east-1")
r  = sm.get_secret_value(SecretId="any/secret")
print(r["SecretString"])           # → {"db_host":"prod.db.internal",...}

# HTTP — intercepted by requests adapter
import requests
r = requests.post("https://api.stripe.com/v1/charge", json={"amount":4999})
print(r.json()["status"])          # → "succeeded"`},

  {id:"09",title:"pytest Integration",lang:"python",
   desc:"Session-scoped for shared state, or use the context manager for full per-test isolation.",
   code:`# conftest.py
import pytest, mockmesh

@pytest.fixture(scope="session", autouse=True)
def mock_cloud():
    engine = mockmesh.initialize(
        config_path  = "tests/fixtures/overrides.json",
        storage_path = "/tmp/mm-test",
    )
    yield engine
    mockmesh.shutdown()

# Full isolation per test (context manager):
def test_order_flow(tmp_path):
    with mockmesh.engine(
        config_path  = "tests/fixtures/overrides.json",
        storage_path = tmp_path,
    ) as mm:
        import boto3
        ddb = boto3.client("dynamodb", region_name="us-east-1")
        ddb.put_item(TableName="Orders",
                     Item={"id":{"S":"o1"},"total":{"N":"49.99"}})
        order = ddb.get_item(TableName="Orders",
                             Key={"id":{"S":"o1"}})["Item"]
        assert order["total"]["N"] == "49.99"`},
];


// ── FEATURES ──────────────────────────────────────────────────────────────────
export const FEATURES = [
  {cat:"Four-Tier Engine",icon:"⚙️",color:"#00ffc8",items:[
    {title:"responses_path → .mockmesh/ → Storage → Defaults",
     desc:"Every request passes through four tiers in priority order. An explicit responses_path folder beats the auto-detected .mockmesh/ workspace, which beats live storage data, which beats built-in defaults. The first non-empty response wins — no network call is ever made.",
     code:`# Tier 1 — responses_path folder (highest priority)
# explicit folder passed to initialize(responses_path=...)
# aws.json, azure.json, kafka.json, rabbitmq.json, http.json

# Tier 2 — .mockmesh/ auto-detect
# *.json files found at the workspace root
# picked up automatically — no argument needed

# Tier 3 — storage (live data)
# data written by PutObject / PutItem / SQS enqueue
# returns what's actually saved in .mockmesh/

# Tier 4 — built-in defaults (lowest priority)
# mockmesh/defaults/aws.json fallback shapes
# guarantees every operation returns a valid response

# Zero network calls in any tier.`},
    {title:"Storage-Backed Operations — Real Writes",
     desc:"PutItem writes to disk. GetItem reads from disk. DeleteItem removes. Scan returns every row. S3 PutObject saves raw bytes. SQS enqueue and dequeue preserve message order. Your app cannot tell the difference from real cloud.",
     code:`# DynamoDB — writes to .mockmesh/nosql/Users.json
ddb.put_item(TableName="Users",
             Item={"id":{"S":"u1"},"name":{"S":"Alice"}})

item = ddb.get_item(TableName="Users",
                    Key={"id":{"S":"u1"}})["Item"]
# → {"id":{"S":"u1"},"name":{"S":"Alice"}}

# UpdateItem with ExpressionAttributeNames
ddb.update_item(
  TableName="Products",
  Key={"id":{"S":"p1"}},
  UpdateExpression="SET #n = :n, qty = :q",
  ExpressionAttributeNames={"#n": "name"},
  ExpressionAttributeValues={":n":{"S":"Widget v2"},":q":{"N":"45"}}
)`},
  ]},
  {cat:"Service Coverage",icon:"🗺️",color:"#7c6aff",items:[
    {title:"17 AWS Services — Full Operation Routing",
     desc:"S3, DynamoDB, SQS, SNS, SecretsManager, SSM, RDS, ElastiCache, CloudWatch, CloudWatch Logs, IAM, STS, ECR, ECS, EKS, EventBridge, Lambda. Storage-backed operations use real local reads and writes. Compute services return configurable response shapes.",
     code:`# Storage-backed (reads + writes to .mockmesh/)
s3  •  dynamodb  •  sqs  •  ssm
secretsmanager  •  elasticache

# Identity (in-memory / config-backed)
iam  •  sts

# Observability (nosql-backed)
cloudwatch  •  logs (cloudwatch)

# Containers + Compute (response-based)
ecs  •  eks  •  ecr  •  lambda
eventbridge

# Every operation returns a real-shaped response
# matching the botocore parser's expectations.`},
    {title:"Azure + Kafka + RabbitMQ + HTTP",
     desc:"Azure Blob, Cosmos DB, Service Bus, Key Vault, Redis, SQL and more via azure-core transport patch. Kafka (confluent-kafka + kafka-python) via producer/consumer monkey-patch. RabbitMQ (pika) via BlockingConnection patch. Any HTTP endpoint via requests adapter.",
     code:`# Azure — azure-core transport patched
from azure.storage.blob import BlobServiceClient
client = BlobServiceClient.from_connection_string("...")
client.get_container_client("docs").upload_blob(
    "file.txt", b"content"
)   # → written to .mockmesh/blob/docs/file.txt

# Kafka — confluent-kafka intercepted
from confluent_kafka import Producer, Consumer
p = Producer({"bootstrap.servers": "any"})
p.produce("order-events", key="k1", value=b"...")
# → uses consume_response from kafka rules

# RabbitMQ — pika BlockingConnection intercepted
import pika
conn = pika.BlockingConnection()
ch   = conn.channel()
ch.basic_publish(exchange="", routing_key="q", body=b"msg")`},
  ]},
  {cat:"Config Format",icon:"🛠",color:"#ff6b6b",items:[
    {title:"Unified custom_overrides.json",
     desc:"One file controls everything: HTTP URL rules, AWS per-operation overrides, Kafka topic rules, and RabbitMQ queue rules. Pass it via config_path. You only need to include the operations you want to change — everything else falls through to built-in defaults.",
     code:`// custom_overrides.json
{
  "http": {
    "rules": [
      {
        "match": { "url_contains": "stripe.com", "method": "POST" },
        "response": { "status": 200,
                      "body": { "id": "ch_mock", "status": "succeeded" } }
      }
    ]
  },
  "aws": {
    "rules": [
      {
        "match": { "service": "dynamodb", "operation": "Query" },
        "response": { "status": 200,
                      "body": { "Items": [], "Count": 0 } }
      }
    ]
  },
  "kafka": { "rules": [ ... ] },
  "rabbitmq": { "rules": [ ... ] }
}`},
    {title:"Folder-Based Overrides (responses_path)",
     desc:"Pass responses_path= pointing at a folder with files named aws.json, azure.json, kafka.json, rabbitmq.json, or http.json. Only files present are applied — absent files fall through to built-in defaults. Or drop files into .mockmesh/ and they are picked up automatically with no argument.",
     code:`# Option A — explicit folder
engine = mockmesh.initialize(
    responses_path = "config/overrides/",
)

# Option B — auto-detect .mockmesh/ (no argument needed)
engine = mockmesh.initialize()

# Override file format (aws.json, placed in the folder)
{
  "s3": {
    "GetObject": {
      "Body":        "eyJlbnYiOiJwcm9kIn0=",
      "ContentType": "application/json"
    }
  },
  "secretsmanager": {
    "GetSecretValue": {
      "SecretString": "{\\"api_key\\":\\"sk-live\\"}"
    }
  }
}

# Entries merged on top of built-in defaults.
# Only include what you want to override.`},
  ]},
  {cat:"Local Workspace",icon:"📁",color:"#ffd93d",items:[
    {title:"Everything in .mockmesh/",
     desc:"All data lives in a .mockmesh/ directory created next to your project. Structured JSON files for NoSQL, raw bytes for S3/blob, SQLite for key-value, and a rotating JSON log. Inspect, edit, or delete files between runs to reset state.",
     code:`.mockmesh/
  logs/
    mockmesh.log        ← structured JSON log (rotating 5 MB×5)
  sql/
    mockmesh.db         ← SQLite for key-value config data
  nosql/
    Users.json          ← DynamoDB rows
    Orders.json
    sqs_JobQueue.json   ← SQS messages
  blob/
    my-bucket/
      logo.png          ← raw S3 bytes
      logo.png.meta.json
  audit.log             ← one-line-per-operation audit trail`},
    {title:"Lazy Creation — No Noise",
     desc:"Directories and files are only created when data is actually written. initialize() with no config produces zero files. Clean working trees, clean git diffs. Use storage_path to point to /tmp for truly ephemeral test runs.",
     code:`# After initialize() — no files created yet:
ls .mockmesh/     # → (empty)

# After s3.put_object(Bucket="b", Key="k", Body=b"..."):
ls .mockmesh/blob/b/
# → k   k.meta.json

# After ddb.put_item(TableName="Orders", Item={...}):
ls .mockmesh/nosql/
# → Orders.json   ← created on first write

# For ephemeral tests:
engine = mockmesh.initialize(storage_path="/tmp/mm-test")
# All data lands in /tmp — gone on next boot.`},
  ]},
  {cat:"Endpoint Mocking",icon:"🌐",color:"#ff9a3c",items:[
    {title:"Mock Any HTTP Endpoint",
     desc:"Intercept any outbound requests call by URL pattern, URL substring, or exact URL + method. Rules are evaluated top-to-bottom; the first match wins. Supports 200–504 status codes, custom headers, and any JSON body.",
     code:`# custom_overrides.json → http.rules
{
  "http": {
    "rules": [
      {
        "match": { "url": "https://pay.acme.io/charge", "method": "POST" },
        "response": {
          "status": 200,
          "headers": { "X-Transaction-Id": "txn-001" },
          "body": { "charge_id": "ch_001", "status": "succeeded" }
        }
      },
      { "match": { "url": "https://api.acme.io/v1/products/prod-999" },
        "response": { "status": 404,
                      "body": { "error": "not_found" } } },
      { "match": { "url": "https://api.acme.io/v1/products*" },
        "response": { "status": 200,
                      "body": { "products": [], "total": 0 } } }
    ]
  }
}`},
    {title:"Dynamic Handlers",
     desc:"Register Python callables for request-specific responses that need runtime logic — path parsing, counter increments, conditional responses. Dynamic handlers are evaluated at Tier 1 and always beat JSON config rules.",
     code:`engine = mockmesh.initialize()

# Dynamic handler — registered at Tier 1
engine.add_dynamic_handler(
    "GET https://users.internal.io/*",
    lambda url, method, **_: {
        "status": 200,
        "body": {
            "id":      url.split("/")[-1],
            "name":    "Mock User",
            "dynamic": True,
        }
    }
)

import requests
r = requests.get("https://users.internal.io/u-42")
print(r.json())
# → {"id": "u-42", "name": "Mock User", "dynamic": True}

# Dynamic handlers win over custom JSON rules.`},
  ]},
];

// ── COMPARISON DATA ───────────────────────────────────────────────────────────
export const COMPARISON_ROWS = [
  ["Stateful CRUD (real writes)",  "✓","Partial","Partial","✓"],
  ["Zero config defaults",          "✓","✗","✗","✓"],
  ["External HTTP mocking",         "✓","✗","✗","✗"],
  ["Azure services",                "✓","Partial","✗","✓"],
  ["Kafka + RabbitMQ",              "✓","✗","Partial","✗"],
  ["Zero cost",                     "✓","✓","✓","✗"],
  ["Unified override config",       "✓","✗","Limited","✗"],
  ["No Docker needed",              "✓","✗","✓","✗"],
  ["File-backed (inspectable)",     "✓","✗","✗","✗"],
  ["4-tier resolution",             "✓","✗","✗","N/A"],
];

// ── HOME TERMINAL ─────────────────────────────────────────────────────────────
export const TERM = [
  {type:"comment",text:"install mockmesh v1.0.0",pause:200},
  {type:"cmd",text:"pip install mockmesh",speed:45,pause:600},
  {type:"out",text:"✓  MockMesh 1.0.0 installed",pause:400},
  {type:"comment",text:"one line — intercepts everything",pause:200},
  {type:"cmd",text:"python app.py",speed:40,pause:500},
  {type:"out",text:"⚡ MockMesh initialized  (v1.0.0)",pause:200},
  {type:"out",text:"   17 AWS  •  9 Azure  •  Kafka  •  RabbitMQ  •  ∞ HTTP",pause:400},
  {type:"out",text:"   workspace → .mockmesh/",pause:300},
  {type:"comment",text:"tier 2 — real stateful DynamoDB write",pause:200},
  {type:"cmd",text:'ddb.put_item(TableName="Users", Item={"id":{"S":"u1"},"name":{"S":"Alice"}})',speed:22,pause:500},
  {type:"out",text:"→  aws  DynamoDB  PutItem  Users",pause:200},
  {type:"out",text:"   written to .mockmesh/nosql/Users.json",pause:300},
  {type:"cmd",text:'ddb.get_item(TableName="Users", Key={"id":{"S":"u1"}})',speed:28,pause:500},
  {type:"out",text:"→  aws  DynamoDB  GetItem  Users",pause:200},
  {type:"out",text:'   {"id":{"S":"u1"},"name":{"S":"Alice"}}  ← local file',pause:400},
  {type:"comment",text:"tier 1 — responses_path override wins",pause:200},
  {type:"cmd",text:'sm.get_secret_value(SecretId="any/path")',speed:32,pause:500},
  {type:"out",text:"→  aws  SecretsManager  GetSecretValue",pause:200},
  {type:"out",text:'   {"db_host":"prod.db.internal","api_key":"sk-live"}',pause:300},
  {type:"out",text:"   AWS bill this month:  $0.00  ✓",pause:200},
];
