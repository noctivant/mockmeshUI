import { useState, useEffect } from "react";
import "../styles.css";

const SPONSOR_URL = "https://github.com/sponsors/"; // fill in later

export function Nav({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const pages = [["home","Home"],["features","Features"],["services","Services"],["install","Install"]];
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
      <a href={SPONSOR_URL} target="_blank" rel="noopener noreferrer" className="nav-sponsor">
        <span className="sponsor-heart">♥</span> Sponsor
      </a>
      <button className="nav-cta" onClick={() => {setActive("install");setOpen(false);}}>Get Started →</button>
      <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="menu">
        <span/><span/><span/>
      </button>
    </nav>
  );
}
