// ── ENDPOINTS ─────────────────────────────────────────────────────────────────

export const AWS_SVCS = [
  {name:"DynamoDB",      cat:"nosql",      icon:"⬡", st:"nosql",    ops:["PutItem","GetItem","DeleteItem","UpdateItem","Scan","Query","BatchWriteItem","BatchGetItem","TransactWriteItems","TransactGetItems","CreateTable","DeleteTable","DescribeTable","ListTables","DescribeTimeToLive","UpdateTimeToLive"]},
  {name:"S3",            cat:"filestore",  icon:"🪣", st:"filestore",ops:["PutObject","GetObject","DeleteObject","DeleteObjects","HeadObject","CopyObject","ListObjectsV2","ListObjects","CreateBucket","DeleteBucket","HeadBucket","ListBuckets","CreateMultipartUpload","UploadPart","CompleteMultipartUpload","AbortMultipartUpload","ListMultipartUploads","GetBucketPolicy","PutBucketPolicy"]},
  {name:"SQS",           cat:"streaming",  icon:"📨", st:"streams",  ops:["SendMessage","SendMessageBatch","ReceiveMessage","DeleteMessage","DeleteMessageBatch","CreateQueue","DeleteQueue","PurgeQueue","GetQueueUrl","GetQueueAttributes","SetQueueAttributes","ChangeMessageVisibility","ListQueues"]},
  {name:"SNS",           cat:"streaming",  icon:"📣", st:"streams",  ops:["Publish","PublishBatch","CreateTopic","DeleteTopic","ListTopics","Subscribe","Unsubscribe","ListSubscriptions","ListSubscriptionsByTopic","GetTopicAttributes","SetTopicAttributes","ConfirmSubscription"]},
  {name:"Secrets Mgr",   cat:"secrets",    icon:"🔑", st:"secrets",  ops:["GetSecretValue","CreateSecret","PutSecretValue","UpdateSecret","DeleteSecret","ListSecrets","DescribeSecret","RotateSecret","TagResource"]},
  {name:"SSM Params",    cat:"secrets",    icon:"📋", st:"secrets",  ops:["GetParameter","GetParameters","PutParameter","DeleteParameter","GetParametersByPath","AddTagsToResource","StartSession","TerminateSession","SendCommand","GetCommandInvocation","DescribeInstanceInformation"]},
  {name:"RDS / Aurora",  cat:"sql",        icon:"🗄", st:"response", ops:["CreateDBInstance","DeleteDBInstance","DescribeDBInstances","ModifyDBInstance","RebootDBInstance","StopDBInstance","StartDBInstance","CreateDBSnapshot","DescribeDBSnapshots","RestoreDBInstanceFromDBSnapshot","CreateDBCluster","DeleteDBCluster","DescribeDBClusters","ModifyDBCluster","FailoverDBCluster","CreateDBSubnetGroup","DescribeDBSubnetGroups","DescribeDBEngineVersions","CreateDBParameterGroup","DescribeDBParameterGroups","CreateDBProxy","DescribeDBProxies","DescribeOrderableDBInstanceOptions","+ 24 more"]},
  {name:"ElastiCache",   cat:"cache",      icon:"⚡", st:"cache",    ops:["CreateCacheCluster","DeleteCacheCluster","DescribeCacheClusters","ModifyCacheCluster","RebootCacheCluster","CreateReplicationGroup","DeleteReplicationGroup","DescribeReplicationGroups","CreateCacheSubnetGroup","DescribeCacheSubnetGroups","DescribeCacheEngineVersions","AddTagsToResource","ListTagsForResource"]},
  {name:"CloudWatch",    cat:"observability",icon:"📊",st:"nosql",   ops:["PutMetricData","GetMetricData","GetMetricStatistics","ListMetrics","PutMetricAlarm","DeleteAlarms","DescribeAlarms","SetAlarmState","EnableAlarmActions","DisableAlarmActions","GetDashboard","PutDashboard","ListDashboards","DeleteDashboards"]},
  {name:"CW Logs",       cat:"observability",icon:"📄",st:"nosql",   ops:["CreateLogGroup","DeleteLogGroup","DescribeLogGroups","CreateLogStream","DeleteLogStream","DescribeLogStreams","PutLogEvents","GetLogEvents","FilterLogEvents","StartQuery","GetQueryResults","StopQuery","DescribeQueries"]},
  {name:"IAM",           cat:"identity",   icon:"🛡", st:"nosql",    ops:["CreateRole","GetRole","DeleteRole","ListRoles","AttachRolePolicy","DetachRolePolicy","ListAttachedRolePolicies","CreatePolicy","DeletePolicy","GetPolicy","ListPolicies","CreateUser","GetUser","DeleteUser","ListUsers","CreateAccessKey","DeleteAccessKey","ListAccessKeys","CreateGroup","AddUserToGroup","ListGroupsForUser","GetAccountSummary"]},
  {name:"STS",           cat:"identity",   icon:"🎟", st:"memory",   ops:["GetCallerIdentity","AssumeRole","AssumeRoleWithWebIdentity","GetSessionToken","DecodeAuthorizationMessage"]},
  {name:"ECR",           cat:"containers", icon:"📦", st:"nosql",    ops:["CreateRepository","DeleteRepository","DescribeRepositories","ListImages","DescribeImages","BatchGetImage","BatchDeleteImage","GetAuthorizationToken","InitiateLayerUpload","PutImage"]},
  {name:"ECS",           cat:"compute",    icon:"🐳", st:"response", ops:["CreateCluster","DeleteCluster","DescribeClusters","ListClusters","RegisterTaskDefinition","DeregisterTaskDefinition","DescribeTaskDefinition","ListTaskDefinitions","RunTask","StopTask","DescribeTasks","ListTasks","CreateService","DeleteService","DescribeServices","ListServices","UpdateService","ListContainerInstances"]},
  {name:"EKS",           cat:"compute",    icon:"☸", st:"response", ops:["CreateCluster","DeleteCluster","DescribeCluster","ListClusters","CreateNodegroup","DeleteNodegroup","DescribeNodegroup","ListNodegroups","UpdateNodegroupConfig","CreateFargateProfile","DeleteFargateProfile","DescribeFargateProfile","ListFargateProfiles","CreateAddon","DeleteAddon","DescribeAddon","ListAddons"]},
  {name:"EventBridge",   cat:"events",     icon:"🌉", st:"response", ops:["PutEvents","CreateEventBus","DeleteEventBus","ListEventBuses","PutRule","DeleteRule","ListRules","PutTargets","RemoveTargets","ListTargetsByRule"]},
  {name:"Lambda",        cat:"compute",    icon:"λ",  st:"response", ops:["Invoke","InvokeAsync","CreateFunction","DeleteFunction","GetFunction","GetFunctionConfiguration","ListFunctions","UpdateFunctionCode","UpdateFunctionConfiguration","PublishVersion","CreateAlias","ListAliases","AddPermission","ListEventSourceMappings","CreateEventSourceMapping","PutFunctionConcurrency","GetAccountSettings"]},
];

export const AZURE_SVCS = [
  {name:"Blob Storage",    cat:"filestore",  icon:"🫙", st:"filestore",ops:["PUT blob","GET blob","DELETE blob","HEAD blob","ListBlobs","CreateContainer","DeleteContainer"]},
  {name:"Cosmos DB",       cat:"nosql",      icon:"🌌", st:"nosql",    ops:["POST (create)","GET (read)","DELETE","UPSERT","GET (list)","ExecuteQuery","discovery_fallback"]},
  {name:"Table Storage",   cat:"nosql",      icon:"🗂", st:"nosql",    ops:["POST table","DELETE table","GET tables","POST entity","GET entity","PUT entity","MERGE entity","DELETE entity","GET entities"]},
  {name:"Key Vault",       cat:"secrets",    icon:"🗝", st:"secrets",  ops:["PUT secret/key","PATCH","GET secret/key","GET list","DELETE","default_attributes"]},
  {name:"Service Bus",     cat:"messaging",  icon:"🚌", st:"streams",  ops:["POST (send)","GET (receive/peek)","DELETE (complete)","NO_MESSAGE response"]},
  {name:"Event Hubs",      cat:"streaming",  icon:"📡", st:"streams",  ops:["GET","PUT","POST (send)","DELETE","GET consumer group","NO_EVENT response"]},
  {name:"Storage Queue",   cat:"messaging",  icon:"📬", st:"streams",  ops:["PUT (create)","DELETE","GET (peek)","POST (send)","GET messages","NO_MESSAGE response"]},
  {name:"App Configuration",cat:"config",    icon:"⚙️", st:"nosql",    ops:["GET","PUT","DELETE","GET list","NOT_FOUND response"]},
  {name:"SQL Database",    cat:"sql",        icon:"🗃", st:"response", ops:["GET server","GET db","PUT server","PUT db","DELETE","LIST","QUERY"]},
  {name:"Redis Cache",     cat:"cache",      icon:"⚡", st:"response", ops:["GET","PUT","DELETE","LIST","KEYS"]},
  {name:"AKS",             cat:"containers", icon:"☸", st:"response", ops:["GET","PUT","DELETE","LIST","CREDENTIALS"]},
  {name:"ACI",             cat:"containers", icon:"📦", st:"response", ops:["GET","PUT","DELETE","LIST"]},
  {name:"Container Apps",  cat:"containers", icon:"🚀", st:"response", ops:["GET","PUT","DELETE","LIST"]},
];

export const GCP_SVCS = [
  {name:"Cloud Storage",   cat:"filestore",  icon:"🪣", st:"filestore",ops:["insert","get","delete","list","buckets_insert","buckets_get","buckets_list","buckets_delete"]},
  {name:"Firestore",       cat:"nosql",      icon:"🔥", st:"nosql",    ops:["createDocument","getDocument","updateDocument","deleteDocument","listDocuments","runQuery","batchWrite","beginTransaction","commit","rollback"]},
  {name:"Pub/Sub",         cat:"streaming",  icon:"📣", st:"streams",  ops:["topics_create","topics_delete","topics_get","topics_list","topics_publish","subscriptions_create","subscriptions_delete","subscriptions_get","subscriptions_list","subscriptions_pull","subscriptions_acknowledge"]},
  {name:"Secret Manager",  cat:"secrets",    icon:"🔑", st:"secrets",  ops:["secrets_create","secrets_delete","secrets_get","secrets_list","versions_add","versions_access","versions_get","versions_list","versions_disable","versions_destroy"]},
  {name:"BigQuery",        cat:"analytics",  icon:"📊", st:"response", ops:["datasets_insert","datasets_get","datasets_list","datasets_delete","tables_insert","tables_get","tables_list","tables_delete","tabledata_insertAll","jobs_insert","jobs_get","jobs_getQueryResults"]},
  {name:"Cloud Spanner",   cat:"sql",        icon:"🗄", st:"response", ops:["instances_create","instances_get","instances_list","instances_delete","databases_create","databases_get","databases_list","sessions_create","sessions_executeSql","sessions_read","sessions_commit","sessions_rollback"]},
  {name:"GKE",             cat:"containers", icon:"☸", st:"response", ops:["clusters_create","clusters_get","clusters_list","clusters_delete"]},
  {name:"Cloud Run",       cat:"compute",    icon:"🚀", st:"response", ops:["services_create","services_get","services_list","services_delete"]},
];

export const SQL_SVCS = [
  {name:"PostgreSQL",      cat:"psycopg2 · psycopg",icon:"🐘", st:"sql", ops:["CREATE TABLE","INSERT","SELECT","UPDATE","DELETE","DROP TABLE","TRUNCATE","ALTER TABLE","JOIN","WHERE","ORDER BY","LIMIT","callproc"]},
  {name:"MySQL",           cat:"pymysql · mysql-connector",icon:"🐬", st:"sql", ops:["CREATE TABLE","INSERT","SELECT","UPDATE","DELETE","DROP TABLE","TRUNCATE","ALTER TABLE","JOIN","WHERE","ORDER BY","LIMIT","callproc"]},
  {name:"Async PostgreSQL",cat:"asyncpg",   icon:"⚡", st:"sql", ops:["CREATE TABLE","INSERT","SELECT","UPDATE","DELETE","DROP TABLE","TRUNCATE","ALTER TABLE","async/await"]},
  {name:"Async MySQL",     cat:"aiomysql",  icon:"⚡", st:"sql", ops:["CREATE TABLE","INSERT","SELECT","UPDATE","DELETE","DROP TABLE","TRUNCATE","ALTER TABLE","async/await"]},
];

export const NOSQL_SVCS = [
  {name:"MongoDB",  cat:"pymongo",  icon:"🍃", st:"nosql", ops:["insert_one","insert_many","find_one","find","update_one","update_many","delete_one","delete_many","count_documents","aggregate","create_index","list_database_names","list_collection_names","command"]},
  {name:"Redis",    cat:"redis-py", icon:"🔴", st:"cache", ops:["get","set","incr","decr","mget","mset","setnx","setex","hset","hget","hgetall","hdel","hexists","lpush","rpush","lpop","rpop","lrange","sadd","srem","smembers","sismember","delete","exists","keys","expire","ttl","rename","dbsize","flushdb","ping"]},
];

export const STREAMING_SVCS = [
  {name:"SQS",           cat:"aws · queue",     icon:"📨", st:"streams", ops:["SendMessage","SendMessageBatch","ReceiveMessage","DeleteMessage","DeleteMessageBatch","CreateQueue","DeleteQueue","PurgeQueue","GetQueueUrl","GetQueueAttributes","SetQueueAttributes","ChangeMessageVisibility","ListQueues"]},
  {name:"SNS",           cat:"aws · pub/sub",   icon:"📣", st:"streams", ops:["Publish","PublishBatch","CreateTopic","DeleteTopic","ListTopics","Subscribe","Unsubscribe","ListSubscriptions","ListSubscriptionsByTopic","GetTopicAttributes","SetTopicAttributes","ConfirmSubscription"]},
  {name:"Kafka",         cat:"confluent · kafka-python",icon:"Ⓚ",st:"streams", ops:["produce (any topic)","consume (any topic)","per-topic offset + partition mock","per-topic produce/consume override","delivery callbacks"]},
  {name:"RabbitMQ",      cat:"pika · queue",    icon:"🐇", st:"streams", ops:["channel.basic_publish","channel.basic_consume","channel.basic_get","channel.basic_ack","channel.basic_nack","connection.close","per-queue/exchange overrides"]},
  {name:"GCP Pub/Sub",   cat:"gcp · pub/sub",   icon:"📣", st:"streams", ops:["topics_create","topics_delete","topics_publish","subscriptions_create","subscriptions_pull","subscriptions_acknowledge"]},
  {name:"Event Hubs",    cat:"azure · stream",  icon:"📡", st:"streams", ops:["POST (send)","GET (receive)","GET consumer group","NO_EVENT response"]},
  {name:"Service Bus",   cat:"azure · queue",   icon:"🚌", st:"streams", ops:["POST (send)","GET (receive/peek)","DELETE (complete)","NO_MESSAGE response"]},
  {name:"Storage Queue", cat:"azure · queue",   icon:"📬", st:"streams", ops:["PUT (create)","POST (send)","GET (peek)","GET messages","DELETE"]},
];

export const EXT_EXAMPLES = [
  {name:"Stripe",      url:"*/api.stripe.com/*",              ex:'{ "id": "ch_mock", "status": "succeeded" }'},
  {name:"SendGrid",    url:"*/api.sendgrid.com/v3/mail*",     ex:"status: 202, body: {}"},
  {name:"Twilio",      url:"*/api.twilio.com/*",              ex:'{ "sid": "SM_mock", "status": "sent" }'},
  {name:"Slack",       url:'url_contains: "hooks.slack.com"', ex:'{ "ok": true }'},
  {name:"GitHub",      url:"*/api.github.com/*",              ex:'{ "id": 1, "full_name": "mock/repo" }'},
  {name:"Google OAuth", url:"*oauth2.googleapis.com/token*",  ex:'{ "access_token": "mock_tok", "expires_in": 3599 }'},
  {name:"Okta",        url:'url_contains: "okta.com"',        ex:'{ "access_token": "mock_tok" }'},
  {name:"PagerDuty",   url:"*/api.pagerduty.com/*",           ex:'{ "incident": { "id": "mock_id" } }'},
  {name:"Datadog",     url:'url_contains: "datadoghq.com"',   ex:'{ "status": "ok" }'},
  {name:"HubSpot",     url:"*/api.hubapi.com/*",              ex:'{ "id": "mock_contact_1" }'},
];

export const ST_COLORS = {
  nosql:    {label:"NoSQL Store",   color:"#7c6aff"},
  filestore:{label:"File Store",    color:"#ffd93d"},
  streams:  {label:"Stream Store",  color:"#00ffc8"},
  secrets:  {label:"Secrets Store", color:"#4ecdc4"},
  response: {label:"Response-only", color:"#ff9a3c"},
  memory:   {label:"In-memory",     color:"#888"},
  cache:    {label:"Cache Store",   color:"#ff6b6b"},
  sql:      {label:"SQL Store",     color:"#00b4ff"},
};

// ── INSTALL STEPS ─────────────────────────────────────────────────────────────
export const STEPS = [
  {id:"01",title:"Prerequisites",lang:"bash",
   desc:"MockMesh requires Python 3.9+ and pip.",
   code:`python --version   # 3.9 or higher required
pip --version      # 20.0 or higher`},

  {id:"02",title:"Install MockMesh",lang:"bash",
   desc:"Install via pip with optional provider extras. Auto-detects installed packages — only activates interceptors for SDKs you actually use.",
   code:`# All providers (installs all optional dependencies)
pip install mockmesh

# Install only what you need
pip install mockmesh[aws]              # boto3 + botocore
pip install mockmesh[azure]            # azure-core + azure-* SDKs
pip install mockmesh[gcp]              # google-cloud-* SDKs
pip install mockmesh[aws,azure,gcp]    # multi-cloud
pip install mockmesh[kafka]            # confluent-kafka + kafka-python
pip install mockmesh[rabbitmq]         # pika
pip install mockmesh[sql]              # psycopg2, pymysql, asyncpg, etc.
pip install mockmesh[mongodb]          # pymongo
pip install mockmesh[redis]            # redis-py

# Recommended: virtual environment
python -m venv .venv && source .venv/bin/activate
pip install mockmesh

# Verify version
python -c "import mockmesh; print(mockmesh.__version__)"
# 0.0.1`},

  {id:"03",title:"Initialize in One Line",lang:"python",
   desc:"Call initialize() once at the top of your entry point or conftest.py. MockMesh auto-detects installed providers and activates only relevant interceptors — no SDK changes required.",
   code:`import mockmesh

# Minimal — auto-detects providers, intercepts everything
engine = mockmesh.initialize()

# With custom config + dedicated workspace
engine = mockmesh.initialize(
    config_path    = "config/custom_overrides.json",
    storage_path   = "/tmp/mockmesh-local",
    fallback_mode  = "error",       # strict mode for tests
)

# With folder of per-service overrides (aws.json, azure.json, gcp.json, …)
engine = mockmesh.initialize(
    responses_path = "config/overrides/",
)

# Context manager — auto-shutdown on exit
with mockmesh.engine(fallback_mode="error") as mm:
    run_tests()

mockmesh.shutdown()   # manual cleanup if not using context manager`},

  {id:"04",title:"Use Your SDK Unchanged",lang:"python",
   desc:"Zero application code changes. boto3, azure-sdk, google-cloud, pymongo, redis, requests, confluent-kafka, pika — all behave identically to real services, but locally.",
   code:`import boto3, mockmesh
engine = mockmesh.initialize()

# DynamoDB — stateful (Tier 3: storage-backed)
ddb = boto3.client("dynamodb", region_name="us-east-1")
ddb.put_item(TableName="Users", Item={"id":{"S":"u1"},"name":{"S":"Alice"}})
item = ddb.get_item(TableName="Users", Key={"id":{"S":"u1"}})
print(item["Item"]["name"]["S"])   # → Alice

# S3 — bytes saved to .mockmesh/blob/
s3 = boto3.client("s3", region_name="us-east-1")
s3.put_object(Bucket="assets", Key="logo.png", Body=b"\\x89PNG...")
obj = s3.get_object(Bucket="assets", Key="logo.png")
print(obj["Body"].read()[:4])      # → b'\\x89PNG'

# MongoDB — pymongo intercepted, in-memory store
import pymongo
db = pymongo.MongoClient().mydb
db.users.insert_one({"name": "Alice", "age": 30})
print(db.users.find_one({"name": "Alice"}))  # → {"name": "Alice", ...}

# GCP — google-cloud SDK intercepted via HTTP dispatch
from google.cloud import storage
client = storage.Client()
bucket = client.bucket("my-gcs-bucket")
blob = bucket.blob("data.json")
blob.upload_from_string('{"key": "value"}')`},

  {id:"05",title:"pytest Integration",lang:"python",
   desc:"Session-scoped for shared state, or use the context manager for full per-test isolation.",
   code:`# conftest.py
import pytest, mockmesh

@pytest.fixture(scope="session", autouse=True)
def mock_cloud():
    engine = mockmesh.initialize(
        config_path    = "tests/fixtures/overrides.json",
        storage_path   = "/tmp/mm-test",
        fallback_mode  = "error",
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
        assert order["total"]["N"] == "49.99"

        # Pre-seed storage directly
        mm.storage.s3_put("assets", "config.json", b'{"env":"test"}')`},
];


// ── FEATURES ──────────────────────────────────────────────────────────────────
export const FEATURES = [
  {cat:"Four-Tier Engine",icon:"⚙️",color:"#00ffc8",items:[
    {title:"responses_path → .mockmesh/ → Storage → Defaults",
     desc:"Every request passes through four tiers in priority order. An explicit responses_path folder beats the auto-detected .mockmesh/ workspace, which beats live storage data, which beats built-in defaults. The first non-empty response wins — no network call is ever made.",
     code:`# Tier 1 — responses_path folder (highest priority)
# explicit folder passed to initialize(responses_path=...)
# aws.json, azure.json, gcp.json, kafka.json, rabbitmq.json,
# http.json, sql.json, nosql.json, streaming.json

# Tier 2 — .mockmesh/ auto-detect
# *.json files found at the workspace root
# picked up automatically — no argument needed

# Tier 3 — storage (live data)
# data written by PutObject / PutItem / SQS enqueue
# returns what's actually saved in .mockmesh/

# Tier 4 — built-in defaults (lowest priority)
# mockmesh/defaults/aws.json, gcp.json, etc.
# guarantees every operation returns a valid response

# Zero network calls in any tier.`},
    {title:"Storage-Backed Operations — Real Writes",
     desc:"PutItem writes to disk. GetItem reads from disk. DeleteItem removes. Scan returns every row. S3 PutObject saves raw bytes. SQS enqueue and dequeue preserve message order. MongoDB and Redis use in-memory stores. SQL uses a SQLite backend. Your app cannot tell the difference from real services.",
     code:`# DynamoDB — writes to .mockmesh/nosql/Users.json
ddb.put_item(TableName="Users",
             Item={"id":{"S":"u1"},"name":{"S":"Alice"}})

item = ddb.get_item(TableName="Users",
                    Key={"id":{"S":"u1"}})["Item"]
# → {"id":{"S":"u1"},"name":{"S":"Alice"}}

# MongoDB — pymongo intercepted, in-memory store
db.users.insert_one({"name": "Alice", "age": 30})
doc = db.users.find_one({"name": "Alice"})
# → {"name": "Alice", "age": 30}

# SQL — SQLite-backed, full DB-API 2.0
cursor.execute("INSERT INTO users VALUES (1, 'Alice')")
cursor.execute("SELECT * FROM users WHERE id = 1")
# → (1, 'Alice')`},
  ]},
  {cat:"Service Coverage",icon:"🗺️",color:"#7c6aff",items:[
    {title:"17 AWS + 13 Azure + 8 GCP — Full Operation Routing",
     desc:"S3, DynamoDB, SQS, SNS, SecretsManager, SSM, RDS, ElastiCache, CloudWatch, CloudWatch Logs, IAM, STS, ECR, ECS, EKS, EventBridge, Lambda. Azure Blob, Cosmos DB, Key Vault, Service Bus, Event Hubs, and more. GCP Cloud Storage, Firestore, Pub/Sub, BigQuery, Spanner, Secret Manager, GKE, Cloud Run.",
     code:`# AWS (17 services, 290+ operations)
s3  •  dynamodb  •  sqs  •  sns  •  lambda
secretsmanager  •  ssm  •  rds/aurora
elasticache  •  cloudwatch  •  cw-logs
iam  •  sts  •  ecr  •  ecs  •  eks  •  eventbridge

# Azure (13 services via azure-core transport patch)
blob  •  cosmos-db  •  table-storage  •  key-vault
service-bus  •  event-hubs  •  storage-queue
app-config  •  sql  •  redis  •  aks  •  aci  •  container-apps

# GCP (8 services via HTTP URL dispatch)
cloud-storage  •  firestore  •  pub/sub
secret-manager  •  bigquery  •  spanner  •  gke  •  cloud-run`},
    {title:"SQL + MongoDB + Redis + Kafka + RabbitMQ + HTTP",
     desc:"Direct SQL via psycopg2, pymysql, asyncpg, aiomysql (SQLite-backed). MongoDB via pymongo (in-memory CRUD + queries). Redis via redis-py (in-memory, full data type support). Kafka (confluent-kafka + kafka-python). RabbitMQ (pika). Any HTTP endpoint via requests and urllib interceptors.",
     code:`# SQL — 6 drivers, full DB-API 2.0 support
import psycopg2  # or pymysql, asyncpg, aiomysql
conn = psycopg2.connect(host="any", dbname="any")
cur = conn.cursor()
cur.execute("CREATE TABLE users (id INT, name TEXT)")
cur.execute("INSERT INTO users VALUES (1, 'Alice')")
cur.execute("SELECT * FROM users")  # → [(1, 'Alice')]

# MongoDB — pymongo intercepted
import pymongo
db = pymongo.MongoClient().mydb
db.users.insert_one({"name": "Alice"})
db.users.find({"name": {"$regex": "^A"}})  # query operators work

# Redis — redis-py intercepted
import redis
r = redis.Redis()
r.set("key", "value")
r.hset("hash", "field", "data")
r.lpush("list", "item1", "item2")`},
  ]},
  {cat:"Config Format",icon:"🛠",color:"#ff6b6b",items:[
    {title:"Unified custom_overrides.json",
     desc:"One file controls everything: HTTP URL rules, AWS/Azure/GCP per-operation overrides, Kafka topic rules, RabbitMQ queue rules, and SQL/NoSQL config. Pass it via config_path. You only need to include the operations you want to change — everything else falls through to built-in defaults.",
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
     desc:"Pass responses_path= pointing at a folder with files named aws.json, azure.json, gcp.json, kafka.json, rabbitmq.json, http.json, sql.json, or nosql.json. Only files present are applied — absent files fall through to built-in defaults. Or drop files into .mockmesh/ and they are picked up automatically.",
     code:`# Option A — explicit folder
engine = mockmesh.initialize(
    responses_path = "config/overrides/",
)

# Option B — auto-detect .mockmesh/ (no argument needed)
engine = mockmesh.initialize()

# Override file format (aws.json, placed in the folder)
{
  "_config": {
    "account_id": "123456789012",
    "region": "us-east-1"
  },
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

# _config placeholders let you centralize account/region values.
# Entries merged on top of built-in defaults.`},
  ]},
  {cat:"Local Workspace",icon:"📁",color:"#ffd93d",items:[
    {title:"Everything in .mockmesh/",
     desc:"All data lives in a .mockmesh/ directory created next to your project. Structured JSON files for NoSQL, raw bytes for S3/blob/GCS, SQLite for SQL and key-value, and a rotating JSON log. Inspect, edit, or delete files between runs to reset state.",
     code:`.mockmesh/
  logs/
    mockmesh.log        ← structured JSON log (rotating 5 MB×5)
  sql/
    mockmesh.db         ← SQLite for SQL interceptor + key-value
  nosql/
    Users.json          ← DynamoDB rows
    Orders.json
    sqs_JobQueue.json   ← SQS messages
  blob/
    my-bucket/
      logo.png          ← raw S3 / Azure Blob / GCS bytes
      logo.png.meta.json
  cache/
    elasticache.json    ← ElastiCache metadata
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
    {title:"Custom Handlers & Fallback Modes",
     desc:'Register Python callables for operations that need runtime logic. Three fallback modes control error behavior: "mock" returns a generic response, "passthrough" calls the real service, "error" raises InterceptError. Per-provider overrides let you mix strict and lenient modes.',
     code:`engine = mockmesh.initialize(fallback_mode="mock")

# Per-provider override — AWS strict, others lenient
engine.fallback_config.provider_overrides["aws"] = "error"

# Custom handler — registered for specific operations
mockmesh.register_handler(
    "aws", "CustomOperation",
    lambda **kw: {"status": "success", "custom": True}
)

# Per-provider fallback callback
mockmesh.register_fallback(
    "aws",
    lambda op, exc: {"status": "handled", "op": op}
)

# Global error callback
engine = mockmesh.initialize(
    on_intercept_error=lambda provider, op, exc:
        log_and_return_default(provider, op)
)`},
  ]},
  {cat:"Auto-Detection",icon:"🔍",color:"#4ecdc4",items:[
    {title:"Zero-Config Provider Activation",
     desc:"MockMesh auto-detects installed packages at startup and only activates relevant interceptors. No providers= argument needed. If boto3 is installed, AWS interceptors activate. If pymongo is installed, MongoDB activates. No unused patches, no import errors.",
     code:`# Just call initialize() — MockMesh checks for:
# boto3/botocore     → AWS interceptors
# azure-core         → Azure interceptors
# google-cloud-*     → GCP interceptors (HTTP dispatch)
# pymongo            → MongoDB interceptor
# redis              → Redis interceptor
# psycopg2/pymysql   → SQL interceptor
# confluent-kafka    → Kafka interceptor
# kafka-python       → Kafka interceptor
# pika               → RabbitMQ interceptor
# requests/urllib    → HTTP interceptor

engine = mockmesh.initialize()
print(engine.active_providers)
# → ['aws', 'azure', 'http', 'mongodb', 'redis']
# (only what's actually installed)`},
    {title:"Singleton Pattern — Safe to Call Multiple Times",
     desc:"mockmesh.initialize() returns the same engine instance if already active. Safe to call from multiple modules, fixtures, or test files. Use mockmesh.shutdown() to deactivate, or the context manager for scoped activation.",
     code:`# First call — creates and returns engine
engine1 = mockmesh.initialize()

# Second call — returns same instance
engine2 = mockmesh.initialize()
assert engine1 is engine2  # True

# Context manager — scoped activation
with mockmesh.engine(fallback_mode="error") as mm:
    # mm is active here
    mm.storage.s3_put("bucket", "key", b"data")
    run_test()
# mm is deactivated here

# Manual shutdown
mockmesh.shutdown()  # deactivates all interceptors`},
  ]},
];

// ── COMPARISON DATA ───────────────────────────────────────────────────────────
export const COMPARISON_ROWS = [
  ["Stateful CRUD (real writes)",  "✓","Partial","Partial","✓"],
  ["Zero config defaults",          "✓","✗","✗","✓"],
  ["External HTTP mocking",         "✓","✗","✗","✗"],
  ["AWS services (17)",             "✓","✓","✓","✓"],
  ["Azure services (13)",           "✓","Partial","✗","✓"],
  ["GCP services (8)",              "✓","✗","✗","✓"],
  ["SQL databases (6 drivers)",     "✓","✗","✗","✓"],
  ["MongoDB + Redis",               "✓","✗","✗","✓"],
  ["Kafka + RabbitMQ",              "✓","✗","Partial","✗"],
  ["Zero cost",                     "✓","✓","✓","✗"],
  ["Unified override config",       "✓","✗","Limited","✗"],
  ["No Docker needed",              "✓","✗","✓","✗"],
  ["File-backed (inspectable)",     "✓","✗","✗","✗"],
  ["4-tier resolution",             "✓","✗","✗","N/A"],
  ["Fallback modes",                "✓","✗","✗","N/A"],
  ["Auto-detect providers",         "✓","✗","✗","N/A"],
];

// ── HOME TERMINAL ─────────────────────────────────────────────────────────────
export const TERM = [
  {type:"comment",text:"install mockmesh v0.0.1 beta",pause:200},
  {type:"cmd",text:"pip install mockmesh",speed:45,pause:600},
  {type:"out",text:"✓  MockMesh 0.0.1 installed",pause:400},
  {type:"comment",text:"one line — auto-detects providers, intercepts everything",pause:200},
  {type:"cmd",text:"python app.py",speed:40,pause:500},
  {type:"out",text:"⚡ MockMesh initialized  (v0.0.1)",pause:200},
  {type:"out",text:"   17 AWS  •  13 Azure  •  8 GCP  •  SQL  •  MongoDB  •  Redis  •  ∞ HTTP",pause:400},
  {type:"out",text:"   providers: aws, azure, gcp, sql, mongodb, http",pause:200},
  {type:"out",text:"   workspace → .mockmesh/",pause:300},
  {type:"comment",text:"tier 3 — real stateful DynamoDB write",pause:200},
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
  {type:"out",text:"   Cloud bill this month:  $0.00  ✓",pause:200},
];
