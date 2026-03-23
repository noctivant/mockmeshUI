import { useState } from "react";
import "./styles.css";
import { ServiceCard } from "./Utilities/ServiceCard";
import { AWS_SVCS, AZURE_SVCS, GCP_SVCS, SQL_SVCS, NOSQL_SVCS, STREAMING_SVCS, EXT_EXAMPLES, ST_COLORS } from "./constants";

export function EndpointsPage() {
  const [cloud, setCloud] = useState("aws");

  return (
    <div className="page endpoints-page">
      <div className="page-hero">
        <div className="section-label">// services & operations</div>
        <h1 className="page-title">60+ services. <span className="highlight">Real operations.</span></h1>
        <p className="page-desc">Every service intercepts real SDK calls and performs the operation locally. Click any service to see all supported operations.</p>
      </div>

      <div className="ep-controls">
        <div className="ep-tabs">
          <button className={`ep-tab ${cloud==="aws"?"active":""}`} onClick={() => setCloud("aws")}>
            <span className="ep-tab-badge">17</span> AWS
          </button>
          <button className={`ep-tab ${cloud==="azure"?"active":""}`} onClick={() => setCloud("azure")}>
            <span className="ep-tab-badge">13</span> Azure
          </button>
          <button className={`ep-tab ${cloud==="gcp"?"active":""}`} onClick={() => setCloud("gcp")}>
            <span className="ep-tab-badge">8</span> GCP
          </button>
          <button className={`ep-tab ${cloud==="sql"?"active":""}`} onClick={() => setCloud("sql")}>
            <span className="ep-tab-badge">4</span> SQL
          </button>
          <button className={`ep-tab ${cloud==="nosql"?"active":""}`} onClick={() => setCloud("nosql")}>
            <span className="ep-tab-badge">2</span> NoSQL
          </button>
          <button className={`ep-tab ${cloud==="streaming"?"active":""}`} onClick={() => setCloud("streaming")}>
            <span className="ep-tab-badge">8</span> Streaming
          </button>
          <button className={`ep-tab ${cloud==="external"?"active":""}`} onClick={() => setCloud("external")}>
            <span className="ep-tab-badge">∞</span> HTTP
          </button>
        </div>
      </div>

      {/* ── AWS / Azure / GCP grids ── */}
      {(cloud === "aws" || cloud === "azure" || cloud === "gcp") && (
        <div className="ep-content">
          <div className="ep-legend">
            {Object.values(ST_COLORS).map(st => (
              <span key={st.label} className="legend-item">
                <span className="legend-dot" style={{background:st.color}}/>
                {st.label}
              </span>
            ))}
          </div>
          <div className="svc-grid">
            {(cloud==="aws" ? AWS_SVCS : cloud==="azure" ? AZURE_SVCS : GCP_SVCS).map(svc => <ServiceCard key={svc.name} svc={svc}/>)}
          </div>
        </div>
      )}

      {/* ── SQL tab ── */}
      {cloud === "sql" && (
        <div className="ep-content">
          <div className="ep-streaming-intro">
            <p>
              MockMesh intercepts <strong>6 Python SQL drivers</strong> at the <code>connect()</code> level,
              routing all queries to a local <strong>SQLite backend</strong>. Full DB-API 2.0 support:
              CREATE TABLE, INSERT, SELECT, UPDATE, DELETE, JOIN, WHERE, ORDER BY, LIMIT, and stored procedures.
              Works with psycopg2, psycopg, pymysql, mysql-connector-python, asyncpg, and aiomysql.
            </p>
          </div>
          <div className="ep-legend">
            <span className="legend-item"><span className="legend-dot" style={{background:"#00b4ff"}}/> SQL Store (SQLite-backed)</span>
          </div>
          <div className="svc-grid">
            {SQL_SVCS.map(svc => <ServiceCard key={svc.name} svc={svc}/>)}
          </div>
          <div className="ep-streaming-detail">
            <div className="stream-detail-grid">
              {[
                {icon:"🗃",title:"SQLite-backed",desc:"All SQL operations execute against a local SQLite database at .mockmesh/sql/mockmesh.db. Schema and data persist between runs."},
                {icon:"🔄",title:"Full DB-API 2.0",desc:"MockConnection and MockCursor implement the DB-API 2.0 spec. Transactions, cursors, fetchone/fetchall, parameterized queries all work."},
                {icon:"⚡",title:"Async support",desc:"asyncpg and aiomysql intercepted with async/await support. Same SQLite backend, fully non-blocking API surface."},
                {icon:"🔌",title:"Zero config",desc:"No connection strings needed. Any host, port, or database name works — all queries route to the local SQLite instance."},
              ].map(d => (
                <div key={d.title} className="stream-detail-card">
                  <span className="stream-detail-icon">{d.icon}</span>
                  <div><strong>{d.title}</strong><p>{d.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── NoSQL tab ── */}
      {cloud === "nosql" && (
        <div className="ep-content">
          <div className="ep-streaming-intro">
            <p>
              MockMesh intercepts <strong>pymongo</strong> and <strong>redis-py</strong> at the client level.
              MongoDB uses an in-memory document store with full query operator support ($eq, $gt, $in, $regex, $and, $or).
              Redis uses an in-memory key-value store with support for strings, hashes, lists, sets, and key management.
            </p>
          </div>
          <div className="ep-legend">
            <span className="legend-item"><span className="legend-dot" style={{background:"#7c6aff"}}/> NoSQL Store (in-memory)</span>
            <span className="legend-item"><span className="legend-dot" style={{background:"#ff6b6b"}}/> Cache Store (in-memory)</span>
          </div>
          <div className="svc-grid">
            {NOSQL_SVCS.map(svc => <ServiceCard key={svc.name} svc={svc}/>)}
          </div>
          <div className="ep-streaming-detail">
            <div className="stream-detail-grid">
              {[
                {icon:"🍃",title:"MongoDB — full query operators",desc:"$eq, $gt, $gte, $lt, $in, $regex, $and, $or, $not all supported. Cursors, aggregation pipeline, and create_index work as expected."},
                {icon:"🔴",title:"Redis — 5 data types",desc:"Strings (get/set/incr), hashes (hset/hget/hgetall), lists (lpush/rpush/lpop/rpop), sets (sadd/smembers), and key operations (expire/ttl/rename)."},
                {icon:"💾",title:"In-memory persistence",desc:"Data persists within a MockMesh session. Use the context manager for per-test isolation, or share state across a session fixture."},
                {icon:"🔌",title:"Drop-in replacement",desc:"pymongo.MongoClient() and redis.Redis() work unchanged. No connection strings or server processes needed."},
              ].map(d => (
                <div key={d.title} className="stream-detail-card">
                  <span className="stream-detail-icon">{d.icon}</span>
                  <div><strong>{d.title}</strong><p>{d.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Streaming tab ── */}
      {cloud === "streaming" && (
        <div className="ep-content">
          <div className="ep-streaming-intro">
            <p>
              MockMesh intercepts all major <strong>queue, pub/sub, and event streaming</strong> protocols
              across AWS, Azure, GCP, Kafka, and RabbitMQ. SQS and SNS route through the botocore transport patch.
              Kafka uses confluent-kafka and kafka-python producer/consumer monkey-patches.
              RabbitMQ uses a pika BlockingConnection patch. GCP Pub/Sub routes through HTTP dispatch.
              Messages persist to local stream files —
              seeded rules and runtime messages are merged automatically.
            </p>
          </div>
          <div className="ep-legend">
            <span className="legend-item"><span className="legend-dot" style={{background:"#00ffc8"}}/> Stream Store</span>
          </div>
          <div className="svc-grid">
            {STREAMING_SVCS.map(svc => <ServiceCard key={svc.name} svc={svc}/>)}
          </div>
          <div className="ep-streaming-detail">
            <div className="stream-detail-grid">
              {[
                {icon:"📥",title:"Persistent queues",desc:"SQS and SNS messages written to .mockmesh/nosql/sqs_<queue>.json. RabbitMQ and Kafka rules configured via responses_path= folder (kafka.json / rabbitmq.json)."},
                {icon:"🔀",title:"Per-topic/queue overrides",desc:"Kafka: configure produce offset, partition, and consume body per topic. RabbitMQ: configure delivery_tag and consume body per queue/exchange pair."},
                {icon:"🧹",title:"PurgeQueue supported",desc:"Call SQS PurgeQueue at any time to atomically clear a queue. Verified against storage — assert len(after)==0 works correctly."},
                {icon:"🔌",title:"Multi-library support",desc:"Kafka: confluent-kafka and kafka-python both intercepted. RabbitMQ: pika BlockingConnection patched. SQS/SNS: botocore transport patched. GCP Pub/Sub: HTTP dispatch."},
              ].map(d => (
                <div key={d.title} className="stream-detail-card">
                  <span className="stream-detail-icon">{d.icon}</span>
                  <div><strong>{d.title}</strong><p>{d.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── HTTP Endpoints tab ── */}
      {cloud === "external" && (
        <div className="ep-content">
          <div className="ep-external-intro">
            <p>
              MockMesh intercepts <strong>any</strong> HTTP endpoint via glob-pattern and substring URL matching.
              Add rules to <code>http.json</code> — no code changes, works with any library using <code>requests</code> or <code>urllib</code>.
              Ships with built-in catch-all rules per HTTP method, so even unmatched URLs return realistic responses.
            </p>
          </div>
          <div className="ep-ext-config">
            <div className="section-label">// http.json</div>
            <pre className="feat-code">{`{
  "rules": [
    {
      "description": "Stripe charges — glob pattern",
      "match": { "url": "https://api.stripe.com/v1/charges*", "method": "POST" },
      "response": {
        "status": 200,
        "headers": { "Content-Type": "application/json" },
        "body": { "id": "ch_mock_001", "status": "succeeded", "amount": 2000 }
      }
    },
    {
      "description": "SendGrid send mail",
      "match": { "url": "https://api.sendgrid.com/v3/mail*", "method": "POST" },
      "response": { "status": 202, "headers": {}, "body": {} }
    },
    {
      "description": "All Slack webhooks — url_contains",
      "match": { "url_contains": "hooks.slack.com", "method": "*" },
      "response": {
        "status": 200,
        "body": { "ok": true }
      }
    },
    {
      "description": "Google OAuth token exchange",
      "match": { "url": "*oauth2.googleapis.com/token*", "method": "POST" },
      "response": {
        "status": 200,
        "body": { "access_token": "mock_token", "expires_in": 3599, "token_type": "Bearer" }
      }
    }
  ]
}`}</pre>
          </div>
          <div className="section-label" style={{paddingLeft:"2rem",marginTop:"3rem"}}>// built-in defaults</div>
          <div className="ep-streaming-detail" style={{marginBottom:"2rem"}}>
            <div className="stream-detail-grid">
              {[
                {icon:"📋",title:"CRUD /v1/users",desc:"GET → 200, POST → 201 with mock ID, PUT → 200, DELETE → 204. Ready out of the box."},
                {icon:"❤️",title:"/health endpoint",desc:'Returns { "status": "ok", "mocked": true } — 200 by default.'},
                {icon:"📊",title:"/metrics endpoint",desc:'Returns { "requests_per_sec": 42.5, "latency_ms": 12 } — 200 by default.'},
                {icon:"💳",title:"/payments endpoint",desc:'POST returns { "id": "pay_mock_001", "status": "succeeded" } — 200 by default.'},
                {icon:"🔄",title:"Catch-all per method",desc:"GET → 200, POST → 201, PUT → 200, PATCH → 200, DELETE → 204. Every unmatched URL still gets a realistic response."},
              ].map(d => (
                <div key={d.title} className="stream-detail-card">
                  <span className="stream-detail-icon">{d.icon}</span>
                  <div><strong>{d.title}</strong><p>{d.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="section-label" style={{paddingLeft:"2rem",marginTop:"3rem"}}>// popular examples</div>
          <div className="ext-examples-grid">
            {EXT_EXAMPLES.map(ex => (
              <div key={ex.name} className="ext-card">
                <div className="ext-name">{ex.name}</div>
                <code className="ext-url">{ex.url}</code>
                <div className="ext-example">{ex.ex}</div>
              </div>
            ))}
          </div>
          <div className="ep-how-ext">
            <div className="section-label">// how URL matching works</div>
            <div className="how-ext-grid">
              {[
                {label:"Glob patterns (fnmatch)",desc:'"*/v1/charges*" matches any host with that path. Supports *, ?, and [seq] wildcards via Python fnmatch.'},
                {label:"Substring matching",desc:'Use "url_contains": "stripe.com" to match any URL containing that substring — no wildcards needed.'},
                {label:"Per-method rules",desc:'Set "method": "POST" to match only POST, or "*" to match all verbs. Different status codes per method (201 for POST, 204 for DELETE).'},
                {label:"First match wins",desc:"Rules evaluated top-to-bottom: user overrides → folder overrides → built-in defaults → generic fallback."},
                {label:"4-tier resolution",desc:"User config (config_path) → folder overrides (.mockmesh/http.json) → built-in defaults → generic fallback { mocked: true }."},
              ].map(r => (
                <div key={r.label} className="how-ext-item">
                  <strong>{r.label}</strong>
                  <p>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
