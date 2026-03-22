import { useState, useEffect } from "react";
import { Nav } from "./Utilities/Nav";
import { HomePage } from "./Home";
import { EndpointsPage } from "./Endpoints";
import { InstallPage } from "./Install";
import { DocsPage } from "./Docs";
import { Footer } from "./Footer";
import "./styles.css";

const PAGE_META = {
  home: {
    title: "MockMesh — Mock AWS, Azure & Cloud APIs Locally | Free Python Library",
    desc:  "Intercept boto3, azure-sdk, Kafka, RabbitMQ and HTTP calls at transport level. 40+ cloud services mocked locally. Zero cost, zero credentials. pip install mockmesh.",
  },
  services: {
    title: "MockMesh Services — 40+ AWS, Azure, Kafka & HTTP Endpoints Mocked Locally",
    desc:  "Browse all mocked services: S3, DynamoDB, SQS, SNS, Cosmos DB, Blob Storage, Service Bus, Key Vault, ElastiCache, Kafka, RabbitMQ and any HTTP endpoint.",
  },
  install: {
    title: "MockMesh Installation Guide — pip install mockmesh | Python Mock Cloud",
    desc:  "Install MockMesh in under 2 minutes. Complete guide: pip install, initialize(), responses_path folder overrides, pytest integration, and all API parameters.",
  },
  docs: {
    title: "MockMesh Documentation — Architecture, Providers, Config & Plugin Guide",
    desc:  "Complete MockMesh documentation: architecture internals, provider guides for AWS, Azure, GCP, SQL, MongoDB, Redis, Kafka & RabbitMQ, custom config, fallback modes, plugins, and troubleshooting.",
  },
};

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
    const meta = PAGE_META[page] || PAGE_META.home;
    document.title = meta.title;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute("content", meta.desc);
  }, [page]);

  return (
    <div className="app">
      <Nav active={page} setActive={setPage}/>
      {page==="home"     && <HomePage setActive={setPage}/>}
      {page==="services" && <EndpointsPage/>}
      {page==="install"  && <InstallPage/>}
      {page==="docs"     && <DocsPage/>}
      <Footer setActive={setPage}/>
    </div>
  );
}
