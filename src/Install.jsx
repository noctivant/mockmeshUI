import "./styles.css";
import { CodeBlock } from "./Utilities/CodeBlock";
import { STEPS } from "./constants";

export function InstallPage() {
  return (
    <div className="page install-page">
      <div className="page-hero">
        <div className="section-label">// installation guide</div>
        <h1 className="page-title">Up and running in <span className="highlight">under 2 minutes</span></h1>
        <p className="page-desc">Nine steps: install, initialize, configure overrides via responses_path folder or .mockmesh/ auto-detect, then use your SDK unchanged — no credentials, no Docker.</p>
      </div>
      <div className="steps-list">
        {STEPS.map(step => (
          <div className="install-step" key={step.id}>
            <div className="step-header">
              <span className="step-badge">{step.id}</span>
              <h3 className="step-title">{step.title}</h3>
            </div>
            <p className="step-desc">{step.desc}</p>
            <CodeBlock code={step.code} lang={step.lang}/>
          </div>
        ))}
      </div>

      {/* ── initialize() parameter reference ── */}
      <div className="config-ref">
        <div className="section-label">// initialize() — all parameters</div>
        <h2 className="section-title">All Parameters</h2>
        <div className="schema-grid">
          {[
            {field:"responses_path",    type:"str | Path", req:false, desc:"Folder containing per-service override files named exactly like the built-in defaults: aws.json, azure.json, http.json, kafka.json, rabbitmq.json. Only files present are applied; absent files fall through to built-in defaults. Priority: responses_path > .mockmesh/ auto-detect > built-in defaults."},
            {field:"config_path",       type:"str | Path", req:false, desc:"Path to a unified custom_overrides.json covering HTTP URL-match rules, AWS per-operation overrides, Kafka topic rules, and RabbitMQ queue rules."},
            {field:"storage_path",      type:"str | Path", req:false, desc:"Root directory for the .mockmesh/ workspace. Defaults to cwd/.mockmesh. Use /tmp/... for ephemeral tests. Any *.json files at the workspace root are auto-detected as Tier 2 response overrides."},
            {field:"console_log",       type:"bool",       req:false, desc:"Mirror log records to stdout (default False — logs go to .mockmesh/logs/mockmesh.log only)."},
            {field:"json_console",      type:"bool",       req:false, desc:"Use JSON format on stdout when console_log=True (default True). Set False for human-readable output."},
            {field:"log_level",         type:"int",        req:false, desc:"Python logging level (default logging.DEBUG)."},
            {field:"plugins",           type:"list | None",req:false, desc:"Explicit list of plugin instances. None (default) loads all built-in interceptors."},
          ].map(f => (
            <div className="schema-row" key={f.field}>
              <code className="schema-field">{f.field}</code>
              <code className="schema-type">{f.type}</code>
              <span className={`schema-req ${f.req?"required":"optional"}`}>{f.req?"required":"optional"}</span>
              <span className="schema-desc">{f.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Override config format reference ── */}
      <div className="category-ref">
        <div className="section-label">// responses_path folder — file names</div>
        <h2 className="section-title">Override File Names</h2>
        <div className="cat-grid">
          {[
            {cat:"aws.json",       color:"#ff9a3c", meaning:"AWS operation body overrides",    ex:'{ "s3": { "GetObject": { "Body": "...", "ContentType": "..." } } }'},
            {cat:"azure.json",     color:"#00b4ff", meaning:"Azure service body overrides",    ex:'{ "blob": { "GET": { "status": 200 } }, "cosmos": { ... } }'},
            {cat:"http.json",      color:"#7c6aff", meaning:"HTTP URL routing rules",          ex:'{ "rules": [ { "match": { "url_contains": "stripe.com" }, "response": {...} } ] }'},
            {cat:"kafka.json",     color:"#00ffc8", meaning:"Kafka topic rules",               ex:'{ "rules": [ { "match": { "topic": "order-events" }, ... } ] }'},
            {cat:"rabbitmq.json",  color:"#4ecdc4", meaning:"RabbitMQ queue/exchange rules",   ex:'{ "rules": [ { "match": { "queue": "q", "exchange": "*" }, ... } ] }'},
          ].map(c => (
            <div className="cat-card" key={c.cat} style={{"--cat-color":c.color}}>
              <div className="cat-name">{c.cat}</div>
              <div className="cat-meaning">{c.meaning}</div>
              <code className="cat-ex">{c.ex}</code>
            </div>
          ))}
        </div>
      </div>

      {/* ── HTTP match fields ── */}
      <div className="config-ref">
        <div className="section-label">// http rules — match fields</div>
        <h2 className="section-title">HTTP Match Criteria</h2>
        <div className="schema-grid">
          {[
            {field:"url",         type:"string", req:false, desc:'Exact URL or glob pattern. * matches any suffix. e.g. "https://api.acme.io/v1/products*"'},
            {field:"url_contains",type:"string", req:false, desc:'Substring match against the full URL. e.g. "stripe.com" matches any Stripe endpoint.'},
            {field:"method",      type:"string", req:false, desc:'HTTP method: GET, POST, PUT, PATCH, DELETE, or * for any. Default: *.'},
          ].map(f => (
            <div className="schema-row" key={f.field}>
              <code className="schema-field">{f.field}</code>
              <code className="schema-type">{f.type}</code>
              <span className="schema-req optional">optional</span>
              <span className="schema-desc">{f.desc}</span>
            </div>
          ))}
        </div>
        <p className="step-desc" style={{marginTop:"1rem",color:"var(--text-muted)"}}>
          Rules are evaluated <strong>top-to-bottom</strong> — place more specific rules (exact URL + method) before broader ones (wildcards). First match wins.
        </p>
      </div>

      {/* ── AWS match fields ── */}
      <div className="config-ref">
        <div className="section-label">// aws rules — match fields</div>
        <h2 className="section-title">AWS Match Criteria</h2>
        <div className="schema-grid">
          {[
            {field:"service",  type:"string", req:true,  desc:'Lowercase botocore service name. e.g. "s3", "dynamodb", "sqs", "secretsmanager", "ssm", "sts", "cloudwatch"'},
            {field:"operation",type:"string", req:true,  desc:'Botocore operation name. e.g. "GetObject", "PutItem", "GetSecretValue", "AssumeRole"'},
          ].map(f => (
            <div className="schema-row" key={f.field}>
              <code className="schema-field">{f.field}</code>
              <code className="schema-type">{f.type}</code>
              <span className={`schema-req ${f.req?"required":"optional"}`}>{f.req?"required":"optional"}</span>
              <span className="schema-desc">{f.desc}</span>
            </div>
          ))}
        </div>
        <p className="step-desc" style={{marginTop:"1rem",color:"var(--text-muted)"}}>
          AWS rules fire for <strong>all calls to that operation</strong> regardless of resource (any bucket, table, or queue). To return resource-specific data, write it via the Storage API instead.
        </p>
      </div>

      {/* ── Workspace layout ── */}
      <div className="env-ref">
        <div className="section-label">// workspace</div>
        <h2 className="section-title">Local Storage Layout</h2>
        <div className="env-grid">
          {[
            {v:".mockmesh/logs/mockmesh.log",   d:"Structured JSON log — rotating, 5 MB × 5 files. Nothing on stdout by default."},
            {v:".mockmesh/sql/mockmesh.db",      d:"SQLite database for key-value config data."},
            {v:".mockmesh/nosql/<Table>.json",   d:"DynamoDB tables, SQS queues (sqs_<name>.json), and other NoSQL stores."},
            {v:".mockmesh/blob/<bucket>/<key>",  d:"Raw S3 and Azure Blob bytes. Companion .meta.json stores content-type and ETag."},
            {v:".mockmesh/audit.log",            d:"One-line-per-operation audit trail for debugging."},
          ].map(e => (
            <div key={e.v} className="env-row">
              <code className="env-var">{e.v}</code>
              <span className="env-desc">{e.d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Upgrading note ── */}
      <div className="env-ref">
        <div className="section-label">// upgrading</div>
        <h2 className="section-title">Clean Install</h2>
        <div className="env-grid">
          {[
            {v:"pip uninstall mockmesh -y",                                     d:"Remove the old installation first."},
            {v:"find . -name '*.pyc' -delete",                                  d:"Delete cached bytecode — stale .pyc files will run the old code even after reinstall."},
            {v:"find . -name '__pycache__' -type d | xargs rm -rf",             d:"Remove all __pycache__ directories."},
            {v:"pip install -e .",                                               d:"Reinstall in editable mode from the new source."},
            {v:'python -c "import mockmesh; print(mockmesh.__version__)"',      d:"Confirm you see 1.0.0 (or later) before running tests."},
          ].map(e => (
            <div key={e.v} className="env-row">
              <code className="env-var">{e.v}</code>
              <span className="env-desc">{e.d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
