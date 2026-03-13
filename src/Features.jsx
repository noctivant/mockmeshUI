import { useState } from "react";
import "./styles.css";
import { FEATURES, TERM } from "./constants";
import { Terminal } from "./Utilities/Terminal";

export function FeaturesPage() {
  const [active, setActive] = useState(0);
  const feat = FEATURES[active];
  return (
    <div className="page features-page">

      {/* ── Hero: title + subtitle only, no terminal ── */}
      <div className="page-hero">
        <div className="section-label">// features</div>
        <h1 className="page-title">A <span className="highlight">real local cloud</span><br/>not a fake one</h1>
        <p className="page-desc">MockMesh performs actual operations against local stores. Your app can't tell the difference from the real cloud — except the bill.</p>
      </div>

      {/* ── Terminal: full-width strip between hero and tabs ── */}
      <div className="feat-terminal-strip">
        <div className="feat-terminal-inner">
          <div className="section-label">// live demo — stateful operations</div>
          <Terminal lines={TERM} title="mockmesh ~ dev"/>
        </div>
      </div>

      {/* ── Tabbed feature cards ── */}
      <div className="feat-layout">
        <div className="feat-tabs">
          {FEATURES.map((f,i) => (
            <button key={f.cat} className={`feat-tab ${active===i?"active":""}`} onClick={() => setActive(i)} style={{"--tab-color":f.color}}>
              <span className="feat-tab-icon">{f.icon}</span><span>{f.cat}</span>
            </button>
          ))}
        </div>
        <div className="feat-content">
          {feat.items.map(item => (
            <div className="feat-card" key={item.title}>
              <h3 className="feat-card-title" style={{color:feat.color}}>{item.title}</h3>
              <p className="feat-card-desc">{item.desc}</p>
              <pre className="feat-code">{item.code}</pre>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
