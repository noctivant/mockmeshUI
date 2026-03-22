import "./styles.css";
import { CodeBlock } from "./Utilities/CodeBlock";
import { STEPS } from "./constants";

export function InstallPage() {
  return (
    <div className="page install-page">
      <div className="page-hero">
        <div className="section-label">// installation guide</div>
        <h1 className="page-title">Up and running in <span className="highlight">under 2 minutes</span></h1>
        <p className="page-desc">Install, initialize, and start using your SDK unchanged — no credentials, no Docker. See Docs for configuration details.</p>
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
            {field:"config_path",       type:"str | Path", req:false, desc:"Path to a unified custom_overrides.json covering HTTP URL-match rules, AWS/Azure/GCP per-operation overrides, Kafka topic rules, and RabbitMQ queue rules."},
            {field:"responses_path",    type:"str | Path", req:false, desc:"Folder containing per-service override files: aws.json, azure.json, gcp.json, http.json, kafka.json, rabbitmq.json, sql.json, nosql.json, streaming.json. Only files present are applied; absent files fall through to built-in defaults."},
            {field:"storage_path",      type:"str | Path", req:false, desc:"Root directory for the .mockmesh/ workspace. Defaults to cwd/.mockmesh. Use /tmp/... for ephemeral tests. Any *.json files at the workspace root are auto-detected as Tier 2 response overrides."},
            {field:"fallback_mode",     type:"str",        req:false, desc:'How to handle interceptor errors: "mock" (default) returns generic response, "passthrough" calls real service, "error" raises InterceptError.'},
            {field:"on_intercept_error",type:"callable",   req:false, desc:"Callback invoked when an interceptor fails. Receives (provider, operation, exception). Return value used as the response."},
            {field:"console_log",       type:"bool",       req:false, desc:"Mirror log records to stdout (default False — logs go to .mockmesh/logs/mockmesh.log only)."},
            {field:"json_console",      type:"bool",       req:false, desc:"Use JSON format on stdout when console_log=True (default True). Set False for human-readable output."},
            {field:"log_level",         type:"int",        req:false, desc:"Python logging level (default logging.DEBUG)."},
            {field:"plugins",           type:"list | None",req:false, desc:"Explicit list of plugin instances. None (default) auto-detects installed providers and loads relevant interceptors."},
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

      {/* ── Workspace layout ── */}
      <div className="env-ref">
        <div className="section-label">// workspace</div>
        <h2 className="section-title">Local Storage Layout</h2>
        <div className="env-grid">
          {[
            {v:".mockmesh/logs/mockmesh.log",   d:"Structured JSON log — rotating, 5 MB × 5 files. Nothing on stdout by default."},
            {v:".mockmesh/sql/mockmesh.db",      d:"SQLite database for SQL interceptor and key-value config data."},
            {v:".mockmesh/nosql/<Table>.json",   d:"DynamoDB tables, SQS queues (sqs_<name>.json), Cosmos DB, and other NoSQL stores."},
            {v:".mockmesh/blob/<bucket>/<key>",  d:"Raw S3, Azure Blob, and GCS bytes. Companion .meta.json stores content-type and ETag."},
            {v:".mockmesh/cache/",               d:"ElastiCache metadata and Redis cache data."},
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
            {v:'python -c "import mockmesh; print(mockmesh.__version__)"',      d:"Confirm you see 0.0.1 (or later) before running tests."},
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
