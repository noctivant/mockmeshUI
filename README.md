# MockMesh Website

A futuristic React marketing site for MockMesh — the local cloud infrastructure simulator.

## Stack

- **React 18** + **Vite 6**
- Pure CSS (no Tailwind / UI lib)
- Google Fonts: Syne (display) + Space Mono (code)
- Canvas-based particle network background

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Futuristic product landing page with animated terminal, stats, problem/solution sections |
| Features | `/features` | Tabbed feature explorer + comparison table vs LocalStack, Moto, Real Cloud |
| Install | `/install` | Step-by-step installation guide with copyable code blocks, schema reference, category guide |

## Running Locally

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Building

```bash
npm run build
# Output: dist/
```

## Design System

| Token | Value |
|-------|-------|
| `--bg` | `#050810` deep space black |
| `--cyan` | `#00ffc8` neon teal (primary accent) |
| `--violet` | `#7c6aff` electric violet |
| `--red` | `#ff6b6b` coral red |
| `--yellow` | `#ffd93d` amber |
| `--font-display` | Syne (800 weight headings) |
| `--font-mono` | Space Mono (code, labels, nav) |
