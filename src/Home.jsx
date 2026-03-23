import "./styles.css";
import { GlitchText } from "./Utilities/GlitchText";
import { ParticleCanvas } from "./Utilities/ParticleCanvas";
import { COMPARISON_ROWS } from "./constants";

export function HomePage({ setActive }) {
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
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => setActive("install")}><span>Start Free</span><span className="btn-arrow">→</span></button>
          <button className="btn-ghost" onClick={() => setActive("services")}>Browse Services</button>
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

      {/* Comparison — centered */}
      <section className="home-comparison">
        <div className="section-label">// comparison</div>
        <h2 className="section-title">MockMesh vs. <span className="highlight">Alternatives</span></h2>
        <div className="comparison-table">
          <div className="comp-head">
            <div className="comp-cap-head">Capability</div>
            <div className="comp-mm">MockMesh</div>
            <div className="comp-col-head">LocalStack</div>
            <div className="comp-col-head">Moto</div>
            <div className="comp-col-head">Real Cloud</div>
          </div>
          {COMPARISON_ROWS.map(([cap,...vals]) => (
            <div className="comp-row" key={cap}>
              <div className="comp-cap">{cap}</div>
              {vals.map((v,i) => (
                <div key={i} className={`comp-val ${i===0?"comp-mm-val":""} ${v==="✓"?"good":v==="✗"?"bad":"partial"}`}>{v}</div>
              ))}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
