import { useState } from "react";
import "../styles.css";

export function CodeBlock({ code, lang }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="code-block">
      <div className="code-header">
        <span className="code-lang">{lang}</span>
        <button className="copy-btn" onClick={() => {navigator.clipboard.writeText(code);setCopied(true);setTimeout(()=>setCopied(false),1500);}}>
          {copied?"✓ Copied":"Copy"}
        </button>
      </div>
      <pre className="code-pre">{code}</pre>
    </div>
  );
}