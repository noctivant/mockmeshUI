import { useState, useEffect } from "react";
import "../styles.css";

export function Terminal({ lines, title = "terminal" }) {
  const [displayed, setDisplayed] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  useEffect(() => {
    if (currentLine >= lines.length) return;
    const line = lines[currentLine];
    if (currentChar < line.text.length) {
      const t = setTimeout(() => setCurrentChar(c => c + 1), line.speed || 28);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setDisplayed(d => [...d, line]);
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, line.pause || 280);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar, lines]);
  const cur = currentLine < lines.length ? lines[currentLine].text.slice(0, currentChar) : null;
  return (
    <div className="terminal-box">
      <div className="terminal-header">
        <span className="dot red"/><span className="dot yellow"/><span className="dot green"/>
        <span className="terminal-title">{title}</span>
      </div>
      <div className="terminal-body">
        {displayed.map((line, i) => (
          <div key={i} className={`terminal-line type-${line.type || "out"}`}>
            {line.type === "cmd" && <span className="prompt">$ </span>}
            {line.type === "comment" && <span className="comment"># </span>}
            {line.text}
          </div>
        ))}
        {cur !== null && (
          <div className={`terminal-line type-${lines[currentLine]?.type || "out"}`}>
            {lines[currentLine]?.type === "cmd" && <span className="prompt">$ </span>}
            {lines[currentLine]?.type === "comment" && <span className="comment"># </span>}
            {cur}<span className="cursor">▌</span>
          </div>
        )}
      </div>
    </div>
  );
}