import "./styles.css";

export function Footer({ setActive }) {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-inner">

        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-bracket">[</span><span className="logo-mm">MM</span><span className="logo-bracket">]</span>
              <span className="logo-text">MockMesh</span>
            </div>
            <p className="footer-tagline">Intercept every cloud SDK call. Zero network. Zero cost. Pure local.</p>
            <div className="footer-stats">
              {[["60+","Services"],["400+","Operations"],["9","Interceptors"]].map(([v,l]) => (
                <div key={l} className="footer-stat"><span className="footer-stat-val">{v}</span><span className="footer-stat-label">{l}</span></div>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div className="footer-col">
            <div className="footer-col-title">Navigate</div>
            <nav className="footer-nav" aria-label="Footer navigation">
              {[["home","Home"],["services","Services"],["docs","Docs"],["install","Install"]].map(([pg,label]) => (
                <button key={pg} className="footer-link" onClick={() => setActive(pg)}>{label}</button>
              ))}
            </nav>
          </div>

          {/* Providers column */}
          <div className="footer-col">
            <div className="footer-col-title">Providers</div>
            <div className="footer-providers">
              {["AWS","Azure","GCP","Kafka","RabbitMQ","Redis","MongoDB","SQL"].map(p => (
                <span key={p} className="footer-provider-tag">{p}</span>
              ))}
            </div>
          </div>

          {/* Project column */}
          <div className="footer-col">
            <div className="footer-col-title">Project</div>
            <div className="footer-nav">
              <a href="https://github.com/noctivant/mockmesh" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
              <a href="https://pypi.org/project/mockmesh/" target="_blank" rel="noopener noreferrer" className="footer-link">PyPI</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-line"/>
          <div className="footer-bottom-row">
            <span className="footer-copy">&copy; {new Date().getFullYear()} Noctivant</span>
            <span className="footer-pip">pip install mockmesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
