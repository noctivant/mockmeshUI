import { launch } from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PORT = 4173;
const SITE_URL = 'https://mockmesh.netlify.app';

const ROUTES = ['/', '/services', '/install', '/docs'];

const MIME_TYPES = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.json': 'application/json',
  '.xml':  'application/xml',
  '.txt':  'text/plain',
  '.woff2': 'font/woff2',
};

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let url = req.url.split('?')[0];
      let filePath = join(DIST, url === '/' ? 'index.html' : url);

      if (!existsSync(filePath) || !extname(filePath)) {
        filePath = join(DIST, 'index.html');
      }

      try {
        const content = readFileSync(filePath);
        const ext = extname(filePath);
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(PORT, () => {
      console.log(`  Static server on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('Pre-rendering pages...\n');

  const server = await startServer();
  const browser = await launch({ headless: true });

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route}`;
    console.log(`  Rendering ${route} ...`);

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    await page.waitForSelector('.app', { timeout: 10000 });

    // Get rendered HTML inside #root
    const renderedContent = await page.evaluate(() => {
      return document.getElementById('root').innerHTML;
    });

    // Read the built index.html
    const indexHtml = readFileSync(join(DIST, 'index.html'), 'utf-8');

    // Get page-specific title and description
    const pageTitle = await page.title();
    const pageDesc = await page.evaluate(() => {
      const meta = document.querySelector('meta[name="description"]');
      return meta ? meta.getAttribute('content') : '';
    });

    // Inject rendered content
    let html = indexHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedContent}</div>`
    );

    // Update title and meta for sub-pages
    if (route !== '/') {
      html = html.replace(/<title>[^<]*<\/title>/, `<title>${pageTitle}</title>`);
      if (pageDesc) {
        html = html.replace(
          /<meta name="description" content="[^"]*" \/>/,
          `<meta name="description" content="${pageDesc.replace(/"/g, '&quot;')}" />`
        );
      }
      html = html.replace(
        /<link rel="canonical" href="[^"]*" \/>/,
        `<link rel="canonical" href="${SITE_URL}${route}" />`
      );
    }

    // Write pre-rendered HTML
    if (route === '/') {
      writeFileSync(join(DIST, 'index.html'), html);
    } else {
      const dir = join(DIST, route.slice(1));
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, 'index.html'), html);
    }

    console.log(`  done ${route}`);
    await page.close();
  }

  await browser.close();
  server.close();
  console.log('\nPre-rendering complete!');
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
