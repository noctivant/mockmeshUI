import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Nav } from "./Utilities/Nav";
import { HomePage } from "./Home";
import { Footer } from "./Footer";
import "./styles.css";

const EndpointsPage = lazy(() => import("./Endpoints").then(m => ({ default: m.EndpointsPage })));
const InstallPage   = lazy(() => import("./Install").then(m => ({ default: m.InstallPage })));
const DocsPage      = lazy(() => import("./Docs").then(m => ({ default: m.DocsPage })));
const ComparePage   = lazy(() => import("./Compare").then(m => ({ default: m.ComparePage })));

const SITE_URL = "https://mockmesh.netlify.app";

const PAGE_META = {
  "/": {
    title: "MockMesh — Mock AWS, Azure & Cloud APIs Locally | Free Python Library",
    desc:  "Intercept boto3, azure-sdk, Kafka, RabbitMQ and HTTP calls at transport level. 60+ cloud services mocked locally. Zero cost, zero credentials. pip install mockmesh.",
  },
  "/services": {
    title: "MockMesh Services — 60+ AWS, Azure, Kafka & HTTP Endpoints Mocked Locally",
    desc:  "Browse all mocked services: S3, DynamoDB, SQS, SNS, Cosmos DB, Blob Storage, Service Bus, Key Vault, ElastiCache, Kafka, RabbitMQ and any HTTP endpoint.",
  },
  "/install": {
    title: "MockMesh Installation Guide — pip install mockmesh | Python Mock Cloud",
    desc:  "Install MockMesh in under 2 minutes. Complete guide: pip install, initialize(), responses_path folder overrides, pytest integration, and all API parameters.",
  },
  "/docs": {
    title: "MockMesh Documentation — Architecture, Providers, Config & Plugin Guide",
    desc:  "Complete MockMesh documentation: architecture internals, provider guides for AWS, Azure, GCP, SQL, MongoDB, Redis, Kafka & RabbitMQ, custom config, fallback modes, plugins, and troubleshooting.",
  },
  "/compare": {
    title: "MockMesh vs LocalStack, Moto & Testcontainers — Comparison",
    desc:  "Side-by-side comparison of MockMesh against LocalStack, Moto, Testcontainers and real cloud. No Docker, no credentials, multi-cloud — see which mock cloud library fits your stack.",
  },
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const meta = PAGE_META[pathname] || PAGE_META["/"];
    document.title = meta.title;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute("content", meta.desc);

    const pageUrl = pathname === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathname}/`;
    const canonEl = document.querySelector('link[rel="canonical"]');
    if (canonEl) canonEl.setAttribute("href", pageUrl);
    const ogUrlEl = document.querySelector('meta[property="og:url"]');
    if (ogUrlEl) ogUrlEl.setAttribute("content", pageUrl);
    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) ogTitleEl.setAttribute("content", meta.title);
    const ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl) ogDescEl.setAttribute("content", meta.desc);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Nav />
      <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<EndpointsPage />} />
          <Route path="/install" element={<InstallPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}
