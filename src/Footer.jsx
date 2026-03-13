import "./styles.css";

const SPONSOR_URL = "https://github.com/sponsors/"; // fill in later

export function Footer({ setActive }) {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <span className="logo-bracket">[</span><span className="logo-mm">MM</span><span className="logo-bracket">]</span>
          <span className="logo-text">MockMesh</span>
        </div>
        <p className="footer-tagline">Stateful. Local. Zero cost.</p>
        <nav className="footer-nav" aria-label="Footer navigation">
          {[["home","Home"],["features","Features"],["services","Services"],["install","Install"]].map(([pg,label]) => (
            <button key={pg} className="footer-link" onClick={() => setActive(pg)}>{label}</button>
          ))}
        </nav>
        <div className="footer-links">
          <span>MIT License</span><span>·</span>
          <span>Python 3.9+</span><span>·</span>
          <span>v1.0.0</span><span>·</span>
          <span>17 AWS · 9 Azure · Kafka · RabbitMQ · ∞ HTTP</span>
        </div>
        <div className="footer-sponsor">
          <a href={SPONSOR_URL} target="_blank" rel="noopener noreferrer">
            <span>♥</span> Support MockMesh on GitHub Sponsors
          </a>
        </div>
        {/* Semantic keyword section — visible to crawlers, styled as small muted text */}
        <div className="footer-seo" aria-label="About MockMesh">
          <p>
            MockMesh is a free, open-source Python library for mocking AWS, Azure, Kafka, RabbitMQ and HTTP APIs locally.
            Mock S3, DynamoDB, SQS, SNS, Cosmos DB, Blob Storage, Service Bus, Key Vault and 30+ more services with zero credentials and zero Docker.
            A lightweight alternative to LocalStack and Moto with real stateful storage, 4-tier response resolution, and single-line pytest integration.
          </p>
          <p>
            Works with boto3, azure-storage-blob, azure-cosmos, azure-servicebus, azure-keyvault-secrets, confluent-kafka, kafka-python, pika and requests.
            <a href="https://pypi.org/project/mockmesh/" target="_blank" rel="noopener noreferrer"> pip install mockmesh</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
