import "./styles.css";
import { GlitchText } from "./Utilities/GlitchText";
import { ParticleCanvas } from "./Utilities/ParticleCanvas";
import { COMPARISON_ROWS } from "./constants";

export function HomePage({ setActive }) {
  return (
    <div className="page home-page">
      <ParticleCanvas/>
      <section className="hero">
        <div className="hero-badge"><span className="badge-dot"/>4-tier local cloud · stateful storage · zero cost · zero Docker</div>
        <h1 className="hero-title">
          <GlitchText text="Mock"/><span className="title-mesh">Mesh</span>
          <br/><span className="title-sub">Your Cloud. Stateful. Local.</span>
        </h1>
        <p className="hero-desc">
          MockMesh intercepts every outbound call your app makes — AWS, Azure, Kafka, RabbitMQ and any HTTP endpoint — and fulfils them locally with real stateful behaviour. No network. No credentials. No Docker. No cost.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => setActive("install")}><span>Start Free</span><span className="btn-arrow">→</span></button>
          <button className="btn-ghost" onClick={() => setActive("services")}>Browse Services</button>
        </div>
        <div className="stats-row">
          {[{v:"17",l:"AWS Services"},{v:"9+",l:"Azure Services"},{v:"$0",l:"Cloud Cost"},{v:"∞",l:"HTTP Targets"}].map(s => (
            <div key={s.l} className="stat-card"><span className="stat-val">{s.v}</span><span className="stat-label">{s.l}</span></div>
          ))}
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

      <section className="solution-banner">
        <div className="solution-inner">
          <div className="solution-text">
            <div className="section-label">// the solution</div>
            <h2>Every call intercepted.<br/><span className="highlight">Real operation. Local file.</span></h2>
            <p>A stateful local engine routes every boto3, azure-sdk, streaming, and external HTTP call to fast file-backed stores. Items are stored. Bytes are saved. Messages queue up. Your code is untouched. Your tests are instant.</p>
            <div className="how-it-works">
              {[
                {step:"01",text:"SDK / HTTP client makes a call"},
                {step:"02",text:"botocore / requests / pika interceptor catches it"},
                {step:"03",text:"Operation parsed from headers, URL, or method"},
                {step:"04",text:"Tier 1: check responses_path folder (explicit overrides)"},
                {step:"05",text:"Tier 2: check .mockmesh/ auto-detected folder"},
                {step:"06",text:"Tier 3: check local storage (.mockmesh/ live data)"},
                {step:"07",text:"Tier 4: return built-in default shape"},
              ].map(h => (
                <div key={h.step} className="how-step">
                  <span className="how-num">{h.step}</span>
                  <span className="how-text">{h.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="solution-diagram">
            <div className="diag-node src">Your App</div>
            <div className="diag-arrow"><span className="diag-label">intercepted</span><div className="diag-line"/><span className="arrow-head">▶</span></div>
            <div className="diag-node mm">MockMesh</div>
            <div className="diag-arrow strike"><span className="diag-label">blocked ✕</span><div className="diag-line dashed"/><span className="arrow-head muted">▶</span></div>
            <div className="diag-node cloud muted">Cloud / APIs</div>
          </div>
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

      {/* Coverage — centered */}
      <section className="coverage-preview">
        <div className="section-label">// service coverage</div>
        <h2 className="section-title">17 AWS · 9 Azure · Kafka · RabbitMQ · Any HTTP target</h2>
        <div className="coverage-strips">
          {[
            {label:"AWS Storage & Data",items:["DynamoDB","S3","SQS","SNS","Kinesis","RDS","Redshift"],color:"#ff9a3c"},
            {label:"AWS Platform & AI",items:["Secrets Manager","CloudWatch","IAM","STS","Bedrock","Glue","Athena"],color:"#00ffc8"},
            {label:"AWS DevOps",items:["ECR","CodeBuild","CloudFormation","Route53","ACM","Cognito","SES"],color:"#7c6aff"},
            {label:"Azure Storage",items:["Blob Storage","CosmosDB","Table Storage","ADLS","Azure Files"],color:"#00b4ff"},
            {label:"Azure Messaging & AI",items:["Service Bus","Event Hub","Key Vault","Azure OpenAI","Entra ID"],color:"#a78bfa"},
            {label:"Azure Ops & Dev",items:["Azure Monitor","Container Registry","Cognitive Search","Data Factory","Azure ML"],color:"#ff6b6b"},
          ].map(strip => (
            <div key={strip.label} className="cov-strip" style={{"--strip-color":strip.color}}>
              <span className="cov-label">{strip.label}</span>
              <div className="cov-pills">
                {strip.items.map(item => <span key={item} className="cov-pill">{item}</span>)}
                <button className="cov-more" onClick={() => setActive("services")}>+ more →</button>
              </div>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:"2.5rem"}}>
          <button className="btn-ghost" onClick={() => setActive("services")}>View all 46 services with operations →</button>
        </div>
      </section>

    </div>
  );
}
