import { Link } from "react-router-dom";
import "./styles.css";
import { GlitchText } from "./Utilities/GlitchText";
import { ParticleCanvas } from "./Utilities/ParticleCanvas";
import { CodeBlock } from "./Utilities/CodeBlock";

export function HomePage() {
  return (
    <div className="page home-page">
      <ParticleCanvas/>
      <section className="hero">
        <h1 className="hero-title">
          <GlitchText text="Mock"/><span className="title-mesh">Mesh</span>
        </h1>
        <div className="solution-diagram hero-diagram">
          <div className="diag-node src">Your App</div>
          <div className="diag-arrow"><span className="diag-label">intercepted</span><div className="diag-line"/><span className="arrow-head">▶</span></div>
          <div className="diag-node mm">MockMesh</div>
          <div className="diag-arrow strike"><span className="diag-label">blocked ✕</span><div className="diag-line dashed"/><span className="arrow-head muted">▶</span></div>
          <div className="diag-node cloud muted">Cloud / APIs</div>
        </div>
        <p className="hero-subtitle">
          An open-source Python library that intercepts boto3, azure-sdk, google-cloud, pymongo, redis, SQL drivers, Kafka, RabbitMQ and HTTP calls at the transport level. Mock 60+ cloud services locally with zero credentials, zero Docker, and zero cost.
        </p>
        <div className="hero-actions">
          <Link to="/install" className="btn-primary"><span>Start Free</span><span className="btn-arrow">→</span></Link>
          <Link to="/services" className="btn-ghost">Browse Services</Link>
        </div>
      </section>

      <section className="problem-section">
        <div className="section-label">// the problem</div>
        <h2 className="section-title">Why deploy to the cloud<br/><span className="highlight">just to test?</span></h2>
        <div className="problem-grid">
          {[
            {icon:"💸",title:"Skyrocketing Dev Bills",desc:"Every DynamoDB PutItem, S3 GetObject, or Lambda invocation in dev accumulates real AWS charges. Even mistakes cost money."},
            {icon:"🐌",title:"Slow Feedback Loops",desc:"Network round-trips to real cloud services add 20–80ms per call. Tight iteration loops become sluggish slogs."},
            {icon:"🔒",title:"Credential Hell",desc:"IAM roles, access keys, STS sessions — managing auth just to run local tests burns dev time that could ship features."},
            {icon:"🌐",title:"Offline Impossible",desc:"Spotty WiFi, flight mode, VPN issues — any network problem takes your entire development workflow offline."},
          ].map(p => (
            <div key={p.title} className="problem-card">
              <span className="problem-icon">{p.icon}</span>
              <h3>{p.title}</h3><p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start — copy-pasteable example */}
      <section className="quick-start">
        <div className="section-label">// get started in 30 seconds</div>
        <h2 className="section-title">Three lines to <span className="highlight">mock everything</span></h2>
        <div className="quick-start-grid">
          <div className="quick-start-step">
            <div className="step-number">1</div>
            <h3>Install</h3>
            <CodeBlock code="pip install mockmesh" lang="bash" />
          </div>
          <div className="quick-start-step">
            <div className="step-number">2</div>
            <h3>Initialize</h3>
            <CodeBlock code={`import mockmesh\nmockmesh.initialize()`} lang="python" />
          </div>
          <div className="quick-start-step">
            <div className="step-number">3</div>
            <h3>Use your SDKs normally</h3>
            <CodeBlock code={`import boto3\n\ns3 = boto3.client("s3", region_name="us-east-1")\ns3.put_object(Bucket="my-bucket", Key="hello.txt", Body=b"Hello")\nobj = s3.get_object(Bucket="my-bucket", Key="hello.txt")\nprint(obj["Body"].read())  # b"Hello"`} lang="python" />
          </div>
        </div>
        <div className="quick-start-cta">
          <Link to="/install" className="btn-primary"><span>Full Installation Guide</span><span className="btn-arrow">→</span></Link>
          <Link to="/docs" className="btn-ghost">Read the Docs</Link>
        </div>
      </section>

      {/* FAQ — visible content matching schema */}
      <section className="home-faq">
        <div className="section-label">// frequently asked questions</div>
        <h2 className="section-title">Common <span className="highlight">Questions</span></h2>
        <div className="faq-list">
          {[
            {q: "What is MockMesh?", a: "MockMesh is an open-source Python library that intercepts cloud API calls from AWS (boto3), Azure (azure-sdk), GCP (google-cloud), SQL databases, MongoDB, Redis, Kafka, RabbitMQ, and HTTP endpoints at the transport level. It provides real stateful local mocking of 60+ cloud services with zero credentials and zero cost. Install with pip install mockmesh."},
            {q: "What is the difference between MockMesh and LocalStack?", a: "LocalStack runs actual AWS service emulators in Docker containers. MockMesh intercepts at the Python SDK transport layer — no Docker required. MockMesh also supports Azure, GCP, SQL databases, MongoDB, Redis, Kafka, RabbitMQ and any HTTP endpoint in the same library, with a 4-tier response resolution system, auto-detection, fallback modes, and real file-backed stateful storage."},
            {q: "How does MockMesh compare to Moto?", a: "Moto is an AWS-only mocking library that requires decorators or context managers on each test. MockMesh intercepts at the transport layer with a single initialize() call — no decorators needed. MockMesh also goes beyond AWS to support Azure, GCP, SQL databases, MongoDB, Redis, Kafka, RabbitMQ, and HTTP endpoints in one unified library with real stateful storage."},
            {q: "Does MockMesh require Docker?", a: "No. MockMesh is a pure Python library with zero Docker dependency. Unlike LocalStack or other emulator-based tools, MockMesh intercepts SDK calls at the transport layer within your Python process. Just pip install mockmesh and call initialize() — it runs anywhere Python runs, including CI/CD pipelines, notebooks, and serverless environments."},
            {q: "How do I use MockMesh with pytest?", a: "MockMesh provides pytest integration with session-scoped and per-test isolation. Add a conftest.py fixture that calls mockmesh.initialize() with your desired configuration. Session scope shares state across tests for integration scenarios, while per-test scope gives each test a clean slate."},
            {q: "Is MockMesh stateful?", a: "Yes. Storage-backed operations (S3, DynamoDB, SQS, GCS, Cosmos DB, Service Bus, Key Vault, SSM, SecretsManager, ElastiCache) use real local file-backed stores. MongoDB and Redis use in-memory stores. SQL databases use a SQLite backend. Your application cannot distinguish this from the real cloud."},
          ].map(faq => (
            <details key={faq.q} className="faq-item">
              <summary className="faq-question">{faq.q}</summary>
              <p className="faq-answer">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

    </div>
  );
}
