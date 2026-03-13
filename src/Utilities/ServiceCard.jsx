import { useState } from "react";
import "../styles.css";
import { ST_COLORS } from "../constants";

export function ServiceCard({ svc }) {
  const [open, setOpen] = useState(false);
  const st = ST_COLORS[svc.st] || ST_COLORS.nosql;
  return (
    <div className={`svc-card ${open?"expanded":""}`} onClick={() => setOpen(o => !o)}>
      <div className="svc-top">
        <span className="svc-icon">{svc.icon}</span>
        <div className="svc-meta">
          <span className="svc-name">{svc.name}</span>
          <span className="svc-cat">{svc.cat}</span>
        </div>
        <span className="svc-store" style={{"--store-color":st.color}}>{st.label}</span>
        <span className="svc-expand">{open?"▲":"▼"}</span>
      </div>
      {open && (
        <div className="svc-ops">
          {svc.ops.map(op => <span key={op} className="svc-op">{op}</span>)}
        </div>
      )}
    </div>
  );
}