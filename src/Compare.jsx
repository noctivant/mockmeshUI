import { Link } from "react-router-dom";
import "./styles.css";
import { COMPARISON_ROWS } from "./constants";

export function ComparePage() {
  return (
    <div className="page compare-page">
      <div className="page-hero">
        <section className="why-mockmesh">
          
            <div className="section-label">// why mockmesh</div>
            <h2 className="section-title">LocalStack is gone.<br/><span className="highlight">What now?</span></h2>
            <p className="why-subtitle">
              LocalStack archived its public GitHub repo and moved all Docker images behind authentication in March 2026.
              Moto is AWS-only. Testcontainers needs Docker. MockMesh fills the gap — one library for every cloud, no containers, no credentials.
            </p>
            <div className="why-grid">
              {[
                {icon:"1", title:"One initialize() call", desc:"A single call to mockmesh.initialize() intercepts every SDK request. There are no decorators, context managers, or endpoint URL rewrites to manage."},
                {icon:"2", title:"Multi-cloud by default", desc:"One library covers AWS, Azure, GCP, Kafka, MongoDB, Redis, SQL, and HTTP. Moto only handles AWS, and LocalStack does not support GCP."},
                {icon:"3", title:"Zero infrastructure", desc:"MockMesh is pure Python with no Docker or containers to run. It works anywhere Python does, including CI pipelines, notebooks, and offline machines."},
                {icon:"4", title:"Actually stateful", desc:"Writes persist across calls, so GetObject returns what you put, DynamoDB records stay, and SQS messages queue and dequeue. It behaves like the real service, not a stub."},
              ].map(item => (
                <div key={item.title} className="why-card">
                  <span className="why-number">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
        </section>
      </div>

      <section className="home-comparison compare-table-section">
        <div className="section-label">// comparison</div>
        <h1 className="page-title">MockMesh vs. <span className="highlight">Alternatives</span></h1>
        <div className="comparison-table">
          <div className="comp-head">
            <div className="comp-cap-head">Capability</div>
            <div className="comp-mm">MockMesh</div>
            <div className="comp-col-head">LocalStack</div>
            <div className="comp-col-head">Moto</div>
            <div className="comp-col-head">Real Cloud</div>
          </div>
          {COMPARISON_ROWS.map(([cap, ...vals]) => (
            <div className="comp-row" key={cap}>
              <div className="comp-cap">{cap}</div>
              {vals.map((v, i) => (
                <div
                  key={i}
                  className={`comp-val ${i === 0 ? "comp-mm-val" : ""} ${v === "✓" ? "good" : v === "✗" ? "bad" : "partial"}`}
                >
                  {v}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div className="compare-cta">
        <Link to="/install" className="btn-primary"><span>Start Free</span><span className="btn-arrow">→</span></Link>
        <Link to="/services" className="btn-ghost">Browse Services</Link>
      </div>
    </div>
  );
}
