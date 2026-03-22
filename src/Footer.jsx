import "./styles.css";

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
          {[["home","Home"],["services","Services"],["docs","Docs"],["install","Install"]].map(([pg,label]) => (
            <button key={pg} className="footer-link" onClick={() => setActive(pg)}>{label}</button>
          ))}
        </nav>
        <div className="footer-links">
          <span>BSL-1.1 License</span><span>·</span>
          <span>Python 3.9+</span><span>·</span>
          <span>v0.0.1 Beta</span><span>·</span>
          <span>17 AWS · 13 Azure · 8 GCP · SQL · MongoDB · Redis · ∞ HTTP</span>
        </div>
        {/* Semantic keyword section — visible to crawlers, styled as small muted text */}
        <div className="footer-seo" aria-label="About MockMesh">
          <p>
            MockMesh is a Python library for mocking AWS, Azure, GCP, SQL databases, MongoDB, Redis, Kafka, RabbitMQ and HTTP APIs locally.
            Mock S3, DynamoDB, SQS, SNS, Cosmos DB, Blob Storage, Cloud Storage, Firestore, BigQuery, Service Bus, Key Vault and 60+ more services with zero credentials and zero Docker.
            A lightweight alternative to LocalStack and Moto with real stateful storage, 4-tier response resolution, auto-detection, fallback modes, and single-line pytest integration.
          </p>
          <p>
            Works with boto3, azure-storage-blob, azure-cosmos, google-cloud-storage, google-cloud-firestore, pymongo, redis-py, psycopg2, pymysql, asyncpg, confluent-kafka, kafka-python, pika and requests.
            <a href="https://pypi.org/project/mockmesh/" target="_blank" rel="noopener noreferrer"> pip install mockmesh</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
