import { useState, useEffect } from "react";
import { Nav } from "./Utilities/Nav";
import { HomePage } from "./Home";
import { FeaturesPage } from "./Features";
import { EndpointsPage } from "./Endpoints";
import { InstallPage } from "./Install";
import { Footer } from "./Footer";
import "./styles.css";

const PAGE_META = {
  home: {
    title: "MockMesh — Mock AWS, Azure & Cloud APIs Locally | Free Python Library",
    desc:  "Intercept boto3, azure-sdk, Kafka, RabbitMQ and HTTP calls at transport level. 40+ cloud services mocked locally. Zero cost, zero credentials. pip install mockmesh.",
  },
  features: {
    title: "MockMesh Features — 4-Tier Resolution, Stateful Storage, Real Cloud Mocking",
    desc:  "4-tier response resolution, real file-backed stateful storage, 17 AWS services, 9 Azure services, Kafka, RabbitMQ and HTTP interception. No Docker. No credentials.",
  },
  services: {
    title: "MockMesh Services — 40+ AWS, Azure, Kafka & HTTP Endpoints Mocked Locally",
    desc:  "Browse all mocked services: S3, DynamoDB, SQS, SNS, Cosmos DB, Blob Storage, Service Bus, Key Vault, ElastiCache, Kafka, RabbitMQ and any HTTP endpoint.",
  },
  install: {
    title: "MockMesh Installation Guide — pip install mockmesh | Python Mock Cloud",
    desc:  "Install MockMesh in under 2 minutes. Complete guide: pip install, initialize(), responses_path folder overrides, pytest integration, and all API parameters.",
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
      {page==="features" && <FeaturesPage/>}
      {page==="services" && <EndpointsPage/>}
      {page==="install"  && <InstallPage/>}
      <Footer setActive={setPage}/>
    </div>
  );
}
