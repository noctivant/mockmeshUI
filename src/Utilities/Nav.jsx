import { useState, useEffect } from "react";
import "../styles.css";

export function Nav({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const pages = [["home","Home"],["services","Services"],["docs","Docs"],["install","Install"]];
  return (
    <nav className={`nav ${scrolled?"nav-scrolled":""}`}>
      <div className="nav-logo" onClick={() => {setActive("home");setOpen(false);}}>
        <span className="logo-bracket">[</span><span className="logo-mm">MM</span><span className="logo-bracket">]</span>
        <span className="logo-text">MockMesh</span>
      </div>
      <div className={`nav-links ${open?"open":""}`}>
        {pages.map(([p,l]) => (
          <button key={p} className={`nav-link ${active===p?"active":""}`} onClick={() => {setActive(p);setOpen(false);}}>
            {l}{active===p && <span className="nav-underline"/>}
          </button>
        ))}
      </div>
      <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="menu">
        <span/><span/><span/>
      </button>
    </nav>
  );
}
