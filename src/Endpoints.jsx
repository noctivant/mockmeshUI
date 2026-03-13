import { useState } from "react";
import "./styles.css";
import { ServiceCard } from "./Utilities/ServiceCard";
import { AWS_SVCS, AZURE_SVCS, STREAMING_SVCS, EXT_EXAMPLES, ST_COLORS } from "./constants";

export function EndpointsPage() {
  const [cloud, setCloud] = useState("aws");
  const [q, setQ] = useState("");

  const filter = (list) => list.filter(s =>
    s.name.toLowerCase().includes(q.toLowerCase()) ||
    s.cat.toLowerCase().includes(q.toLowerCase())
  );

  const showSearch = cloud !== "external";

  return (
    <div className="page endpoints-page">
      <div className="page-hero">
        <div className="section-label">// services & operations</div>
        <h1 className="page-title">35+ services. <span className="highlight">Real operations.</span></h1>
        <p className="page-desc">Every service intercepts real SDK calls and performs the operation locally. Click any service to see all supported operations.</p>
      </div>

      <div className="ep-controls">
        <div className="ep-tabs">
          <button className={`ep-tab ${cloud==="aws"?"active":""}`} onClick={() => {setCloud("aws");setQ("");}}>
            <span className="ep-tab-badge">17</span> AWS
          </button>
          <button className={`ep-tab ${cloud==="azure"?"active":""}`} onClick={() => {setCloud("azure");setQ("");}}>
            <span className="ep-tab-badge">9</span> Azure
          </button>
          <button className={`ep-tab ${cloud==="streaming"?"active":""}`} onClick={() => {setCloud("streaming");setQ("");}}>
            <span className="ep-tab-badge">6</span> Streaming
          </button>
          <button className={`ep-tab ${cloud==="external"?"active":""}`} onClick={() => {setCloud("external");setQ("");}}>
            <span className="ep-tab-badge">∞</span> HTTP
          </button>
        </div>
        {showSearch && (
          <input className="ep-search" placeholder="Search services…" value={q} onChange={e => setQ(e.target.value)}/>
        )}
      </div>

      {/* ── AWS / Azure grids ── */}
      {(cloud === "aws" || cloud === "azure") && (
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
            {filter(cloud==="aws" ? AWS_SVCS : AZURE_SVCS).map(svc => <ServiceCard key={svc.name} svc={svc}/>)}
          </div>
          {filter(cloud==="aws" ? AWS_SVCS : AZURE_SVCS).length === 0 && (
            <div className="ep-empty">No services match "{q}"</div>
          )}
          <div className="ep-compute-note">
            <span className="note-icon">{cloud==="aws" ? "λ" : "☁"}</span>
            <div>
              <strong>{cloud==="aws"
                ? "AWS compute — response-based: Lambda, ECS, EKS, EventBridge."
                : "Azure compute — response-based: App Service, AKS, Logic Apps, Azure Functions, Azure SQL, PostgreSQL."
              }</strong>
              {" "}These return your configured <code>response</code> body — no local store involved. Override via <code>responses_path=</code> folder or the <code>aws.rules</code> section of <code>custom_overrides.json</code>.
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
              across AWS, Azure, Kafka, and RabbitMQ. SQS and SNS route through the botocore transport patch.
              Kafka uses confluent-kafka and kafka-python producer/consumer monkey-patches.
              RabbitMQ uses a pika BlockingConnection patch. Messages persist to local stream files —
              seeded rules and runtime messages are merged automatically.
            </p>
          </div>
          <div className="ep-legend">
            <span className="legend-item"><span className="legend-dot" style={{background:"#00ffc8"}}/> Stream Store</span>
          </div>
          <div className="svc-grid">
            {filter(STREAMING_SVCS).map(svc => <ServiceCard key={svc.name} svc={svc}/>)}
          </div>
          {filter(STREAMING_SVCS).length === 0 && (
            <div className="ep-empty">No services match "{q}"</div>
          )}
          <div className="ep-streaming-detail">
            <div className="stream-detail-grid">
              {[
                {icon:"📥",title:"Persistent queues",desc:"SQS and SNS messages written to .mockmesh/nosql/sqs_<queue>.json. RabbitMQ and Kafka rules configured via responses_path= folder (kafka.json / rabbitmq.json)."},
                {icon:"🔀",title:"Per-topic/queue overrides",desc:"Kafka: configure produce offset, partition, and consume body per topic. RabbitMQ: configure delivery_tag and consume body per queue/exchange pair."},
                {icon:"🧹",title:"PurgeQueue supported",desc:"Call SQS PurgeQueue at any time to atomically clear a queue. Verified against storage — assert len(after)==0 works correctly."},
                {icon:"🔌",title:"Multi-library support",desc:"Kafka: confluent-kafka and kafka-python both intercepted. RabbitMQ: pika BlockingConnection patched. SQS/SNS: botocore transport patched."},
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
              MockMesh intercepts <strong>any</strong> third-party HTTP endpoint via URL prefix matching.
              Add entries to <code>external.json</code> — no code changes, works with any library using requests or urllib3.
            </p>
          </div>
          <div className="ep-ext-config">
            <div className="section-label">// external.json</div>
            <pre className="feat-code">{`{
  "external": [
    {
      "sub_component": "https://api.stripe.com",
      "response": { "id": "ch_mock_001", "status": "succeeded", "amount": 2000 }
    },
    {
      "sub_component": "https://api.sendgrid.com/v3/mail",
      "status_code": 202,
      "response": {}
    },
    {
      "sub_component": "https://hooks.slack.com",
      "response": { "ok": true }
    },
    {
      "sub_component": "https://oauth2.googleapis.com/token",
      "response": { "access_token": "mock_token", "expires_in": 3599, "token_type": "Bearer" }
    }
  ]
}`}</pre>
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
                {label:"Prefix matching",desc:'"https://api.stripe.com" matches all Stripe endpoints — charges, customers, refunds, webhooks.'},
                {label:"Exact path",desc:'Use a full path "https://api.example.com/v1/charges" to match only that specific endpoint.'},
                {label:"Method-agnostic",desc:"URL rules match GET, POST, PUT, DELETE equally — one rule covers all verbs on a prefix."},
                {label:"First match wins",desc:"Rules are evaluated in config order. Put specific rules before broader prefix rules."},
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
