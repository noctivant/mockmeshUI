import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles.css";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const pages = [
    ["/", "Home"],
    ["/services", "Services"],
    ["/compare", "Compare"],
    ["/docs", "Docs"],
    ["/install", "Install"],
  ];

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
        <span className="logo-bracket">[</span>
        <span className="logo-mm">MM</span>
        <span className="logo-bracket">]</span>
        <span className="logo-text">MockMesh</span>
      </Link>
      <div className={`nav-links ${open ? "open" : ""}`}>
        {pages.map(([to, label]) => (
          <Link
            key={to}
            to={to}
            className={`nav-link ${pathname === to ? "active" : ""}`}
            onClick={() => setOpen(false)}
          >
            {label}
            {pathname === to && <span className="nav-underline" />}
          </Link>
        ))}
      </div>
      <button
        className="nav-burger"
        onClick={() => setOpen((o) => !o)}
        aria-label="menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
