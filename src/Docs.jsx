import { useState } from "react";
import "./styles.css";
import { CodeBlock } from "./Utilities/CodeBlock";

const SECTIONS = [
  {id:"getting-started", label:"Getting Started"},
  {id:"providers", label:"Providers"},
  {id:"custom-config", label:"Custom Config"},
  {id:"fallback", label:"Fallback Modes"},
  {id:"plugins", label:"Plugins"},
];

export function DocsPage() {
  const [section, setSection] = useState("getting-started");

  return (
    <div className="page docs-page">
      <div className="page-hero">
        <div className="section-label">// documentation</div>
        <h1 className="page-title">Everything you need to <span className="highlight">know</span></h1>
        <p className="page-desc">Provider guides, configuration reference, fallback modes, and plugin development.</p>
      </div>

      <div className="docs-layout">
        <aside className="docs-sidebar">
          {SECTIONS.map(s => (
            <button key={s.id} className={`docs-nav-item ${section===s.id?"active":""}`} onClick={() => setSection(s.id)}>
              {s.label}
            </button>
          ))}
        </aside>

        <div className="docs-content">
          {section === "getting-started" && <GettingStartedSection/>}
          {section === "providers" && <ProvidersSection/>}
          {section === "custom-config" && <CustomConfigSection/>}
          {section === "fallback" && <FallbackSection/>}
          {section === "plugins" && <PluginsSection/>}
        </div>
      </div>
    </div>
  );
}

/* ── Getting Started ──────────────────────────────────────────────────────── */
function GettingStartedSection() {
  return (<div className="docs-section">
    <h2 className="docs-title">Getting Started</h2>

    <h3 className="docs-subtitle">Installation</h3>
    <CodeBlock lang="bash" code={`# All providers
pip install mockmesh

# Specific providers
pip install mockmesh[aws]              # AWS only
pip install mockmesh[aws,kafka]        # AWS + Kafka
pip install mockmesh[aws,azure,gcp]    # Multi-cloud
pip install mockmesh[sql]              # SQL databases
pip install mockmesh[mongodb]          # MongoDB
pip install mockmesh[redis]            # Redis`}/>
    <p className="docs-text">MockMesh auto-detects installed packages at startup. Only interceptors whose dependencies are present will activate.</p>

    <h3 className="docs-subtitle">Quick Start</h3>
    <CodeBlock lang="python" code={`import mockmesh

mockmesh.initialize()

# Now use any supported SDK normally.
import boto3
s3 = boto3.client("s3", region_name="us-east-1")
response = s3.list_buckets()  # Returns mock data, no network call`}/>

    <h3 className="docs-subtitle">Context Manager</h3>
    <CodeBlock lang="python" code={`import mockmesh

with mockmesh.engine() as mm:
    import requests
    resp = requests.get("https://api.example.com/users")
    print(resp.json())  # Mock response

    # Pre-seed storage
    mm.storage.s3_put("my-bucket", "key.txt", b"hello world")

# MockMesh is automatically shut down here.`}/>

    <h3 className="docs-subtitle">Storage Pre-seeding</h3>
    <CodeBlock lang="python" code={`with mockmesh.engine() as mm:
    # S3
    mm.storage.s3_put("my-bucket", "data.csv", b"id,name\\n1,Alice\\n")

    # DynamoDB
    mm.storage.dynamo_put("users", {"id": {"S": "user-1"}, "name": {"S": "Alice"}})

    # SSM Parameter Store
    mm.storage.ssm_put("/app/db-host", "localhost")

    # Secrets Manager
    mm.storage.secret_put("prod/api-key", "sk-test-12345")

    # Azure Blob
    mm.storage.az_blob_put("my-container", "file.txt", b"contents")

    # CosmosDB
    mm.storage.cosmos_upsert("users", {"id": "u-1", "name": "Alice"})`}/>

    <h3 className="docs-subtitle">Supported Providers</h3>
    <div className="docs-table-wrap">
      <table className="docs-table">
        <thead><tr><th>Provider</th><th>Sentinel Package</th><th>Install Extra</th></tr></thead>
        <tbody>
          <tr><td>HTTP</td><td><code>requests</code></td><td><code>mockmesh[http]</code></td></tr>
          <tr><td>AWS</td><td><code>botocore</code></td><td><code>mockmesh[aws]</code></td></tr>
          <tr><td>Azure</td><td><code>azure.core</code></td><td><code>mockmesh[azure]</code></td></tr>
          <tr><td>GCP</td><td><code>requests</code></td><td><code>mockmesh[gcp]</code></td></tr>
          <tr><td>Kafka</td><td><code>confluent_kafka</code> or <code>kafka</code></td><td><code>mockmesh[kafka]</code></td></tr>
          <tr><td>RabbitMQ</td><td><code>pika</code></td><td><code>mockmesh[rabbitmq]</code></td></tr>
          <tr><td>SQL</td><td><code>psycopg2</code>, <code>pymysql</code>, <code>asyncpg</code>, etc.</td><td><code>mockmesh[sql]</code></td></tr>
          <tr><td>MongoDB</td><td><code>pymongo</code></td><td><code>mockmesh[mongodb]</code></td></tr>
          <tr><td>Redis</td><td><code>redis</code></td><td><code>mockmesh[redis]</code></td></tr>
        </tbody>
      </table>
    </div>
  </div>);
}

/* ── Providers ────────────────────────────────────────────────────────────── */
function ProvidersSection() {
  const [provider, setProvider] = useState("aws");
  const providers = [
    {id:"aws", label:"AWS"},
    {id:"azure", label:"Azure"},
    {id:"gcp", label:"GCP"},
    {id:"http", label:"HTTP"},
    {id:"sql", label:"SQL"},
    {id:"mongodb", label:"MongoDB"},
    {id:"redis", label:"Redis"},
    {id:"kafka", label:"Kafka"},
    {id:"rabbitmq", label:"RabbitMQ"},
  ];
  return (<div className="docs-section">
    <h2 className="docs-title">Provider Guides</h2>
    <div className="docs-provider-tabs">
      {providers.map(p => (
        <button key={p.id} className={`docs-ptab ${provider===p.id?"active":""}`} onClick={() => setProvider(p.id)}>{p.label}</button>
      ))}
    </div>
    {provider==="aws" && <AwsProvider/>}
    {provider==="azure" && <AzureProvider/>}
    {provider==="gcp" && <GcpProvider/>}
    {provider==="http" && <HttpProvider/>}
    {provider==="sql" && <SqlProvider/>}
    {provider==="mongodb" && <MongoProvider/>}
    {provider==="redis" && <RedisProvider/>}
    {provider==="kafka" && <KafkaProvider/>}
    {provider==="rabbitmq" && <RabbitProvider/>}
  </div>);
}

function AwsProvider() {
  return (<div>
    <h3 className="docs-subtitle">AWS Provider</h3>
    <p className="docs-text">MockMesh patches <code>botocore.endpoint.Endpoint.make_request</code>, the single method through which every botocore service call passes. Once active, every <code>boto3.client(...)</code> call is intercepted. No AWS credentials required.</p>
    <p className="docs-text">Covers <strong>17 AWS services with 290+ operations</strong>: S3, DynamoDB, SQS, SNS, Lambda, ECS, EKS, ECR, RDS/Aurora (47 operations), ElastiCache, SecretsManager, SSM, STS, IAM, CloudWatch, CloudWatch Logs, EventBridge.</p>

    <h4 className="docs-subtitle-sm">Storage Integration</h4>
    <div className="docs-table-wrap">
      <table className="docs-table">
        <thead><tr><th>Service</th><th>Storage Location</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>S3</td><td><code>.mockmesh/blob/</code></td><td>Object bodies stored as files on disk</td></tr>
          <tr><td>DynamoDB</td><td><code>.mockmesh/nosql/</code></td><td>Items stored as JSON documents keyed by table + primary key</td></tr>
          <tr><td>SQS</td><td><code>.mockmesh/nosql/</code></td><td>Queue messages stored and dequeued in FIFO order</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="docs-subtitle-sm">Code Examples</h4>
    <CodeBlock lang="python" code={`import mockmesh
mockmesh.initialize()
import boto3

# S3 — stateful write + read
s3 = boto3.client("s3", region_name="us-east-1")
s3.put_object(Bucket="my-bucket", Key="hello.txt", Body=b"Hello World")
obj = s3.get_object(Bucket="my-bucket", Key="hello.txt")
print(obj["Body"].read())  # b"Hello World"

# DynamoDB — write and query
ddb = boto3.client("dynamodb", region_name="us-east-1")
ddb.put_item(TableName="Users", Item={"id": {"S": "u-1"}, "name": {"S": "Alice"}})
resp = ddb.get_item(TableName="Users", Key={"id": {"S": "u-1"}})
print(resp["Item"]["name"]["S"])  # "Alice"

# SQS — send and receive
sqs = boto3.client("sqs", region_name="us-east-1")
sqs.send_message(QueueUrl="https://sqs.us-east-1.amazonaws.com/123/MyQueue",
                 MessageBody='{"order": 1}')
resp = sqs.receive_message(QueueUrl="https://sqs.us-east-1.amazonaws.com/123/MyQueue")
print(resp["Messages"][0]["Body"])

# RDS Aurora cluster
rds = boto3.client("rds", region_name="us-east-1")
rds.create_db_cluster(DBClusterIdentifier="aurora-cluster", Engine="aurora-mysql",
                      MasterUsername="admin", MasterUserPassword="secret")
clusters = rds.describe_db_clusters()
print(clusters["DBClusters"][0]["DBClusterIdentifier"])`}/>
  </div>);
}

function AzureProvider() {
  return (<div>
    <h3 className="docs-subtitle">Azure Provider</h3>
    <p className="docs-text">MockMesh patches <code>azure.core.pipeline.transport.RequestsTransport.send</code> plus service-specific client methods (BlobClient.download_blob, ServiceBusClient.from_connection_string, EventHubProducerClient, QueueClient, TableClient, AzureAppConfigurationClient). No Azure credentials required.</p>
    <p className="docs-text">Provides <code>MockAzureCredential</code> as a drop-in replacement for <code>DefaultAzureCredential</code> to avoid timeout delays.</p>

    <h4 className="docs-subtitle-sm">Supported Services (13)</h4>
    <div className="docs-table-wrap">
      <table className="docs-table">
        <thead><tr><th>Service</th><th>Detection Host</th><th>Backed By</th></tr></thead>
        <tbody>
          <tr><td>Blob Storage</td><td><code>blob.core.windows.net</code></td><td>Local blob filesystem</td></tr>
          <tr><td>Cosmos DB</td><td><code>cosmos.azure.com</code></td><td>Local NoSQL store</td></tr>
          <tr><td>Key Vault</td><td><code>vault.azure.net</code></td><td>Local NoSQL store</td></tr>
          <tr><td>Service Bus</td><td><code>servicebus.windows.net</code></td><td>Mock AMQP client</td></tr>
          <tr><td>Event Hubs</td><td><code>servicebus.windows.net</code></td><td>Mock producer/consumer</td></tr>
          <tr><td>Storage Queue</td><td><code>queue.core.windows.net</code></td><td>Mock queue client</td></tr>
          <tr><td>Table Storage</td><td><code>table.core.windows.net</code></td><td>Local NoSQL store</td></tr>
          <tr><td>App Configuration</td><td><code>azconfig.io</code></td><td>Local NoSQL store</td></tr>
          <tr><td>SQL Database</td><td><code>database.windows.net</code></td><td>ARM response</td></tr>
          <tr><td>Redis Cache</td><td><code>redis.cache.windows.net</code></td><td>ARM response</td></tr>
          <tr><td>AKS</td><td><code>management.azure.com</code></td><td>ARM response</td></tr>
          <tr><td>ACI</td><td><code>management.azure.com</code></td><td>ARM response</td></tr>
          <tr><td>Container Apps</td><td><code>management.azure.com</code></td><td>ARM response</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="docs-subtitle-sm">Code Examples</h4>
    <CodeBlock lang="python" code={`import mockmesh
mockmesh.initialize()

# Blob Storage
from azure.storage.blob import BlobServiceClient
blob_service = BlobServiceClient(account_url="https://myaccount.blob.core.windows.net", credential="mock")
container = blob_service.get_container_client("my-container")
blob = container.get_blob_client("hello.txt")
blob.upload_blob(b"Hello Azure")
data = blob.download_blob().readall()  # b"Hello Azure"

# Cosmos DB
from azure.cosmos import CosmosClient
client = CosmosClient("https://mock.documents.azure.com:443/", credential="mock")
db = client.get_database_client("mydb")
container = db.get_container_client("items")
container.upsert_item({"id": "item-1", "name": "Widget", "price": 9.99})
item = container.read_item(item="item-1", partition_key="item-1")

# Key Vault
from azure.keyvault.secrets import SecretClient
kv = SecretClient(vault_url="https://my-vault.vault.azure.net", credential="mock")
kv.set_secret("db-password", "s3cr3t")
secret = kv.get_secret("db-password")

# Service Bus, Event Hubs, Storage Queue, Table Storage, App Config
# all work via from_connection_string() — see Services page for details`}/>
  </div>);
}

function GcpProvider() {
  return (<div>
    <h3 className="docs-subtitle">GCP Provider</h3>
    <p className="docs-text">The GCP interceptor uses the <strong>HTTP interceptor's URL dispatch system</strong>. It registers a URL matcher for <code>*.googleapis.com</code> and <code>metadata.google.internal</code>. GCP client libraries use <code>requests</code> internally, so they are automatically covered.</p>

    <h4 className="docs-subtitle-sm">Supported Services (8)</h4>
    <div className="docs-table-wrap">
      <table className="docs-table">
        <thead><tr><th>Service</th><th>API Domain</th><th>Key Operations</th></tr></thead>
        <tbody>
          <tr><td>Cloud Storage</td><td><code>storage.googleapis.com</code></td><td>insert, get, delete, list (objects + buckets)</td></tr>
          <tr><td>Firestore</td><td><code>firestore.googleapis.com</code></td><td>createDocument, getDocument, updateDocument, deleteDocument, listDocuments, runQuery, batchWrite</td></tr>
          <tr><td>Pub/Sub</td><td><code>pubsub.googleapis.com</code></td><td>topics create/publish, subscriptions pull/acknowledge</td></tr>
          <tr><td>Secret Manager</td><td><code>secretmanager.googleapis.com</code></td><td>secrets create/get/list, versions add/access</td></tr>
          <tr><td>BigQuery</td><td><code>bigquery.googleapis.com</code></td><td>datasets, tables, tabledata insertAll, jobs</td></tr>
          <tr><td>Spanner</td><td><code>spanner.googleapis.com</code></td><td>instances, databases, sessions executeSql</td></tr>
          <tr><td>GKE</td><td><code>container.googleapis.com</code></td><td>clusters create/get/list/delete</td></tr>
          <tr><td>Cloud Run</td><td><code>run.googleapis.com</code></td><td>services create/get/list/delete</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="docs-subtitle-sm">Auth Mocking</h4>
    <p className="docs-text">GCP authentication is mocked automatically. GCE metadata tokens, OAuth2 tokens, and IAM credentials endpoints all return mock responses. No service account keys needed.</p>

    <h4 className="docs-subtitle-sm">Code Examples</h4>
    <CodeBlock lang="python" code={`import mockmesh
mockmesh.initialize()

# Using google-cloud client libraries
from google.cloud import storage
client = storage.Client(project="mock-project")
bucket = client.bucket("my-bucket")
blob = bucket.blob("hello.txt")
blob.upload_from_string("Hello GCP")

# Direct REST calls also work
import requests
resp = requests.get(
    "https://storage.googleapis.com/storage/v1/b/my-bucket/o/my-object?alt=media"
)
resp = requests.post(
    "https://pubsub.googleapis.com/v1/projects/my-project/topics/my-topic:publish",
    json={"messages": [{"data": "SGVsbG8="}]}
)
print(resp.json())  # {"messageIds": ["mock-message-id-001"]}`}/>
  </div>);
}

function HttpProvider() {
  return (<div>
    <h3 className="docs-subtitle">HTTP Provider</h3>
    <p className="docs-text">Patches <code>requests.adapters.HTTPAdapter.send</code> and <code>urllib.request.OpenerDirector.open</code>. All outbound HTTP/HTTPS calls are intercepted — including third-party SDKs that use <code>requests</code> internally.</p>

    <h4 className="docs-subtitle-sm">Match Criteria</h4>
    <div className="docs-table-wrap">
      <table className="docs-table">
        <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>url</code></td><td>string</td><td>Exact URL or glob pattern (<code>*</code> wildcard via fnmatch)</td></tr>
          <tr><td><code>url_contains</code></td><td>string</td><td>Substring match against the full URL</td></tr>
          <tr><td><code>method</code></td><td>string</td><td>GET, POST, PUT, DELETE, PATCH, or * for any</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="docs-subtitle-sm">Resolution Order</h4>
    <ol className="docs-list">
      <li>URL dispatch (GCP interceptor claims <code>*.googleapis.com</code>)</li>
      <li>User config rules (top-to-bottom)</li>
      <li>Built-in default rules</li>
      <li>Generic catch-all: <code>{`{"mocked": true}`}</code></li>
    </ol>

    <h4 className="docs-subtitle-sm">Code Examples</h4>
    <CodeBlock lang="python" code={`import mockmesh
mockmesh.initialize(config_path="http_overrides.json")

import requests
resp = requests.post("https://api.stripe.com/v1/payment_intents", json={"amount": 1000})
print(resp.json())  # {"id": "pi_mock_001", "status": "succeeded"}

# urllib also works
import urllib.request, json
resp = urllib.request.urlopen("https://api.example.com/data")
data = json.loads(resp.read())  # {"mocked": true}`}/>
  </div>);
}

function SqlProvider() {
  return (<div>
    <h3 className="docs-subtitle">SQL Provider</h3>
    <p className="docs-text">Patches <code>connect()</code> on 6 Python database drivers. Returns a <code>MockConnection</code> backed by a <code>MockSQLExecutor</code> that parses and executes SQL against a local SQLite backend. No real database server needed.</p>

    <h4 className="docs-subtitle-sm">Patched Drivers</h4>
    <div className="docs-table-wrap">
      <table className="docs-table">
        <thead><tr><th>Driver</th><th>Engine</th><th>Async</th></tr></thead>
        <tbody>
          <tr><td><code>psycopg2</code></td><td>PostgreSQL</td><td>No</td></tr>
          <tr><td><code>psycopg</code> (v3)</td><td>PostgreSQL</td><td>No</td></tr>
          <tr><td><code>pymysql</code></td><td>MySQL / MariaDB</td><td>No</td></tr>
          <tr><td><code>mysql-connector-python</code></td><td>MySQL</td><td>No</td></tr>
          <tr><td><code>asyncpg</code></td><td>PostgreSQL</td><td>Yes</td></tr>
          <tr><td><code>aiomysql</code></td><td>MySQL</td><td>Yes</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="docs-subtitle-sm">Supported SQL</h4>
    <p className="docs-text"><strong>DDL:</strong> CREATE TABLE (IF NOT EXISTS), DROP TABLE (IF EXISTS), TRUNCATE, ALTER TABLE ADD COLUMN. <strong>DML:</strong> INSERT, UPDATE, DELETE with parameterized queries (%s, ?, $N). <strong>Queries:</strong> SELECT with WHERE, LIKE, IS NULL, IN, AND/OR, ORDER BY, LIMIT, COUNT(*), JOIN. <strong>Transactions:</strong> BEGIN, COMMIT, ROLLBACK (no-ops, all writes immediate).</p>

    <h4 className="docs-subtitle-sm">Code Examples</h4>
    <CodeBlock lang="python" code={`import mockmesh
mockmesh.initialize()
import psycopg2

conn = psycopg2.connect(host="localhost", database="appdb", user="admin", password="secret")
cur = conn.cursor()

cur.execute("CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(100), age INTEGER)")
cur.execute("INSERT INTO users (name, age) VALUES (%s, %s)", ("Alice", 30))
cur.execute("SELECT name, age FROM users WHERE age > %s ORDER BY age", (25,))
rows = cur.fetchall()  # [("Alice", 30)]

# Async with asyncpg
import asyncpg, asyncio
async def main():
    conn = await asyncpg.connect("postgresql://admin:secret@localhost/appdb")
    await conn.execute("CREATE TABLE events (id SERIAL, type VARCHAR(50), data TEXT)")
    await conn.execute("INSERT INTO events (type, data) VALUES ($1, $2)", "click", '{"page": "/home"}')
    rows = await conn.fetch("SELECT type, data FROM events")

asyncio.run(main())`}/>
  </div>);
}

function MongoProvider() {
  return (<div>
    <h3 className="docs-subtitle">MongoDB Provider</h3>
    <p className="docs-text">Intercepts <code>pymongo.MongoClient</code> with an in-memory mock supporting full CRUD, query operators, cursors, aggregation, and indexes. No MongoDB server needed.</p>

    <h4 className="docs-subtitle-sm">Filter Operators</h4>
    <div className="docs-table-wrap">
      <table className="docs-table">
        <thead><tr><th>Operator</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>Equality</td><td><code>{`{"name": "Alice"}`}</code></td></tr>
          <tr><td><code>$eq</code>, <code>$ne</code></td><td><code>{`{"age": {"$eq": 30}}`}</code></td></tr>
          <tr><td><code>$gt</code>, <code>$gte</code>, <code>$lt</code>, <code>$lte</code></td><td><code>{`{"age": {"$gt": 25}}`}</code></td></tr>
          <tr><td><code>$in</code>, <code>$nin</code></td><td><code>{`{"role": {"$in": ["admin", "editor"]}}`}</code></td></tr>
          <tr><td><code>$exists</code></td><td><code>{`{"email": {"$exists": true}}`}</code></td></tr>
          <tr><td><code>$regex</code></td><td><code>{`{"name": {"$regex": "^Ali"}}`}</code></td></tr>
          <tr><td><code>$and</code>, <code>$or</code></td><td><code>{`{"$or": [{"role": "admin"}, {"role": "owner"}]}`}</code></td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="docs-subtitle-sm">Code Examples</h4>
    <CodeBlock lang="python" code={`import mockmesh
mockmesh.initialize()
import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017")
db = client["mydb"]
coll = db["users"]

coll.insert_one({"name": "Alice", "age": 30, "role": "engineer"})
coll.insert_many([{"name": "Bob", "age": 25}, {"name": "Charlie", "age": 35}])

doc = coll.find_one({"name": "Alice"})
cursor = coll.find({"age": {"$gte": 25}}).sort("age", -1).limit(10)

coll.update_one({"name": "Alice"}, {"$set": {"age": 31}})
coll.delete_one({"name": "Charlie"})
count = coll.count_documents({"age": {"$gt": 20}})

pipeline = [{"$match": {"role": "engineer"}}, {"$project": {"name": 1, "age": 1}}]
results = list(coll.aggregate(pipeline))`}/>
  </div>);
}

function RedisProvider() {
  return (<div>
    <h3 className="docs-subtitle">Redis Provider</h3>
    <p className="docs-text">Intercepts <code>redis.Redis</code> and <code>redis.StrictRedis</code> with an in-memory mock supporting strings, hashes, lists, sets, key operations, pipelines, and multiple databases (db 0-15). All values returned as <code>bytes</code>, matching real Redis behavior.</p>

    <h4 className="docs-subtitle-sm">Code Examples</h4>
    <CodeBlock lang="python" code={`import mockmesh
mockmesh.initialize()
import redis

r = redis.Redis(host="localhost", port=6379, db=0)

# Strings
r.set("name", "Alice")
r.get("name")          # b"Alice"
r.incr("counter")      # 1
r.mset({"a": "1", "b": "2"})
r.mget(["a", "b"])     # [b"1", b"2"]

# Hashes
r.hset("user:1", mapping={"name": "Alice", "age": "30"})
r.hgetall("user:1")    # {b"name": b"Alice", b"age": b"30"}

# Lists
r.rpush("queue", "a", "b", "c")
r.lrange("queue", 0, -1)  # [b"a", b"b", b"c"]
r.lpop("queue")            # b"a"

# Sets
r.sadd("tags", "python", "redis")
r.smembers("tags")     # {b"python", b"redis"}

# Pipelines
pipe = r.pipeline()
pipe.set("x", "1")
pipe.get("x")
results = pipe.execute()  # [True, b"1"]

# Multiple databases
r0 = redis.Redis(db=0)
r1 = redis.Redis(db=1)
r0.set("key", "db0")
r1.set("key", "db1")  # separate namespaces`}/>
  </div>);
}

function KafkaProvider() {
  return (<div>
    <h3 className="docs-subtitle">Kafka Provider</h3>
    <p className="docs-text">Replaces <code>confluent_kafka.Producer</code>/<code>Consumer</code> and <code>kafka.KafkaProducer</code>/<code>KafkaConsumer</code> with mock classes. No broker connection needed. Supports delivery callbacks, topic-based rule matching, and per-topic response overrides.</p>

    <h4 className="docs-subtitle-sm">Code Examples</h4>
    <CodeBlock lang="python" code={`import mockmesh
mockmesh.initialize()

# confluent-kafka
from confluent_kafka import Producer, Consumer

p = Producer({"bootstrap.servers": "localhost:9092"})
def delivery_report(err, msg):
    print(f"Delivered to {msg.topic()} offset {msg.offset()}")

p.produce("order-events", value=b'{"order_id": "ORD-001"}', callback=delivery_report)
p.flush()

c = Consumer({"bootstrap.servers": "localhost:9092", "group.id": "my-group", "auto.offset.reset": "earliest"})
c.subscribe(["order-events"])
msg = c.poll(1.0)
if msg and not msg.error():
    print(msg.value().decode())
c.close()

# kafka-python
from kafka import KafkaProducer, KafkaConsumer

producer = KafkaProducer(bootstrap_servers="localhost:9092")
future = producer.send("order-events", value=b'{"order_id": "ORD-002"}')
result = future.get(timeout=10)
print(f"Sent to offset {result.offset}")`}/>
  </div>);
}

function RabbitProvider() {
  return (<div>
    <h3 className="docs-subtitle">RabbitMQ Provider</h3>
    <p className="docs-text">Replaces <code>pika.BlockingConnection</code> with a mock that supports queue_declare, basic_publish, basic_get, basic_consume, start_consuming, basic_ack/nack. No broker needed. Rules match by queue name and exchange.</p>

    <h4 className="docs-subtitle-sm">Code Examples</h4>
    <CodeBlock lang="python" code={`import mockmesh
mockmesh.initialize()
import pika

connection = pika.BlockingConnection(pika.ConnectionParameters("localhost"))
channel = connection.channel()

channel.queue_declare(queue="order-queue")
channel.basic_publish(exchange="", routing_key="order-queue", body=b'{"order_id": "ORD-001"}')

# Consume via basic_get
method, properties, body = channel.basic_get(queue="order-queue")
if method:
    print(body.decode())
    channel.basic_ack(delivery_tag=method.delivery_tag)

# Consume via callback
def callback(ch, method, properties, body):
    print(f"Received: {body.decode()}")
    ch.basic_ack(delivery_tag=method.delivery_tag)

channel.basic_consume(queue="order-queue", on_message_callback=callback)
channel.start_consuming()
connection.close()`}/>
  </div>);
}

/* ── Custom Config ────────────────────────────────────────────────────────── */
function CustomConfigSection() {
  return (<div className="docs-section">
    <h2 className="docs-title">Custom Configuration</h2>

    <h3 className="docs-subtitle">Configuration Tiers</h3>
    <CodeBlock lang="text" code={`Tier 1 (highest)   responses_path folder     explicit folder passed to initialize()
Tier 2             .mockmesh/ auto-detect     *.json files found at the workspace root
Tier 3             Storage layer              live data from PutObject / PutItem / Enqueue
Tier 4 (lowest)    Built-in defaults          bundled aws.json / azure.json / gcp.json ...`}/>

    <h3 className="docs-subtitle">Folder-Based Overrides (recommended)</h3>
    <CodeBlock lang="python" code={`# Option A — explicit folder
mockmesh.initialize(responses_path="my_overrides/")

# Option B — auto-detect via .mockmesh/
# Just drop files into .mockmesh/ and they are picked up automatically
mockmesh.initialize()

# You can combine both:
mockmesh.initialize(
    config_path="config/routing_rules.json",      # routing rules
    responses_path="config/overrides/",            # response bodies
)`}/>

    <h3 className="docs-subtitle">_config Placeholders</h3>
    <p className="docs-text">Every built-in default JSON file includes a <code>_config</code> section. Provider-specific values (account IDs, regions) are defined once and referenced via <code>{"{_config.xxx}"}</code> placeholders, resolved at load time. Override <code>_config</code> values in your own files to change defaults across all responses.</p>
    <CodeBlock lang="json" code={`{
  "_config": {
    "account_id": "999888777666",
    "region": "eu-west-1"
  },
  "s3": {
    "GetObject": {
      "Body": "eyJlbnYiOiJwcm9kIn0=",
      "ContentType": "application/json"
    }
  }
}`}/>

    <h3 className="docs-subtitle">GCP Rules</h3>
    <CodeBlock lang="json" code={`{
  "gcp": {
    "rules": [
      {
        "match": { "service": "storage", "operation": "get" },
        "response": {
          "status": 200,
          "body": { "kind": "storage#object", "name": "custom-object", "bucket": "custom-bucket" }
        }
      },
      {
        "match": { "service": "secretmanager", "operation": "access" },
        "response": {
          "status": 200,
          "body": { "name": "projects/my-project/secrets/my-secret/versions/latest",
                    "payload": { "data": "Y3VzdG9tLXNlY3JldC12YWx1ZQ==" } }
        }
      }
    ]
  }
}`}/>

    <h3 className="docs-subtitle">Hot-Swap at Runtime</h3>
    <CodeBlock lang="python" code={`from mockmesh.config.loader import ConfigLoader

engine = mockmesh.initialize()
original_resolver = engine.response_engine._resolver

# Load a different config mid-run
engine.response_engine.load(
    ConfigLoader(user_config_path="tests/fixtures/error_scenario.json").load()
)
try:
    run_error_scenario_tests()
finally:
    engine.response_engine.load(original_resolver)`}/>
  </div>);
}

/* ── Fallback Modes ───────────────────────────────────────────────────────── */
function FallbackSection() {
  return (<div className="docs-section">
    <h2 className="docs-title">Fallback Modes</h2>
    <p className="docs-text">The fallback system controls what happens when an interceptor fails to handle a request.</p>

    <h3 className="docs-subtitle">Three Modes</h3>
    <div className="docs-decisions">
      {[
        {title:'"mock" (default)', desc:'On interceptor error, return a generic mock response {"mocked": true}. The application continues running with synthetic data. Safest mode for development and testing.'},
        {title:'"passthrough"', desc:"On interceptor error, call the original unpatched function so the request reaches the real service. Useful during gradual migration. Some interceptors that replace entire classes (Kafka, RabbitMQ) degrade to mock mode."},
        {title:'"error"', desc:"On interceptor error, raise InterceptError so the caller sees a clear failure. Use in CI pipelines or strict testing environments where silent fallbacks would mask problems."},
      ].map(d => (
        <div key={d.title} className="docs-decision-card"><strong>{d.title}</strong><p>{d.desc}</p></div>
      ))}
    </div>

    <h3 className="docs-subtitle">Per-Provider Overrides</h3>
    <CodeBlock lang="python" code={`engine = mockmesh.initialize(fallback_mode="mock")

engine.fallback_config.provider_overrides["aws"] = "passthrough"
engine.fallback_config.provider_overrides["http"] = "error"
# All other providers use the global "mock" mode

engine.fallback_config.effective_mode("aws")    # "passthrough"
engine.fallback_config.effective_mode("kafka")  # "mock"`}/>

    <h3 className="docs-subtitle">register_handler()</h3>
    <p className="docs-text">Register custom handlers for specific (provider, operation) pairs. Checked before built-in interceptor logic.</p>
    <CodeBlock lang="python" code={`mockmesh.initialize()

def handle_transcribe(request):
    return {"TranscriptionJob": {"TranscriptionJobName": "my-job", "TranscriptionJobStatus": "COMPLETED"}}

mockmesh.register_handler("aws", "StartTranscriptionJob", handle_transcribe)`}/>

    <h3 className="docs-subtitle">register_fallback()</h3>
    <p className="docs-text">Per-provider fallback functions invoked when the interceptor fails. Different from <code>on_intercept_error</code> — applies to a single provider.</p>
    <CodeBlock lang="python" code={`mockmesh.initialize()

def aws_fallback(provider, operation, exception):
    print(f"AWS mock failed for {operation}, returning empty response")
    return {}

mockmesh.register_fallback("aws", aws_fallback)`}/>

    <h3 className="docs-subtitle">Error Hierarchy</h3>
    <CodeBlock lang="text" code={`MockMeshError
  +-- InterceptError          (provider, operation, cause)
        +-- UnknownOperationError`}/>

    <h3 className="docs-subtitle">Execution Order</h3>
    <ol className="docs-list">
      <li><strong>Custom handler</strong> — if registered for exact (provider, operation) pair</li>
      <li><strong>Normal handler</strong> — interceptor's built-in handler</li>
      <li><strong>on_intercept_error callback</strong> — if handler fails and callback registered</li>
      <li><strong>Fallback mode</strong> — mock / passthrough / error</li>
    </ol>
  </div>);
}

/* ── Plugins ──────────────────────────────────────────────────────────────── */
function PluginsSection() {
  return (<div className="docs-section">
    <h2 className="docs-title">Plugin Development</h2>
    <p className="docs-text">Each provider is a plugin that registers with the central <code>PluginRegistry</code>. You can create custom plugins to intercept additional services.</p>

    <h3 className="docs-subtitle">BasePlugin ABC</h3>
    <CodeBlock lang="python" code={`from mockmesh.plugins.base import BasePlugin

class MyPlugin(BasePlugin):
    name = "my-service"

    def activate(self, config, *, storage=None, provider_defaults=None,
                 fallback_config=None, custom_handlers=None, **kwargs):
        self.storage = storage
        self._fallback_config = fallback_config
        self._custom_handlers = custom_handlers or {}
        self._active = True

    def deactivate(self):
        self._active = False`}/>

    <h3 className="docs-subtitle">Registration</h3>
    <CodeBlock lang="python" code={`import mockmesh
from mockmesh.plugins.base import BasePlugin
from mockmesh.response.engine import ResponseEngine

engine = ResponseEngine()
mockmesh.register_plugin(MyPlugin(engine))
mockmesh.initialize()  # Your plugin activates alongside built-ins

# Or pass explicit plugin list:
mockmesh.initialize(plugins=[
    HttpInterceptor(engine),
    AwsInterceptor(engine),
    MyPlugin(engine),
])`}/>

    <h3 className="docs-subtitle">URL Dispatch System</h3>
    <p className="docs-text">The HTTP interceptor supports URL dispatch — other interceptors can claim specific URL patterns. This is how GCP works.</p>
    <CodeBlock lang="python" code={`from mockmesh.interceptors.http import HttpInterceptor

def is_my_service_url(url):
    return "my-service.example.com" in url

def handle_my_service(adapter_self, request, **kwargs):
    import requests.models
    resp = requests.models.Response()
    resp.status_code = 200
    resp._content = b'{"service": "my-service", "mocked": true}'
    resp.headers["Content-Type"] = "application/json"
    return resp

HttpInterceptor.register_url_dispatcher(
    provider="my-service",
    url_matcher=is_my_service_url,
    handler=handle_my_service,
)`}/>
  </div>);
}

