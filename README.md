# Burning Math Academy — Landing Page

Official landing page for [burningmath.com](https://burningmath.com): competition math coaching + AI analytics platform.

## Stack

- **Next.js 14** (App Router)
- **TailwindCSS**
- **Framer Motion** (subtle animations)
- **TypeScript**

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Edit **`siteConfig.ts`** to change:

- `platformUrl` / `diagnosticUrl` — internal routes or external links
- `contact.email` / `contact.whatsapp`
- `metrics` and `resultsMetrics`
- Nav items and `platformIsExternal` for Platform link
- Report image paths and hero/coach image paths

No need to touch component code for these.

## Assets

Place assets in **`public/assets/`**:

| File | Description |
|------|-------------|
| `hero-medals.jpg` | Hero background (e.g. copy from `Medal_Photo_multiuse.jpg`) |
| `coach.png` | Coach portrait (e.g. copy from `师资肖像.png`) |
| `report-1.png`, `report-2.png`, `report-3.png` | Platform report screenshots |

Until these exist, the site shows placeholders and does not break.

## Routes

- `/` — Home (full landing)
- `/programs` — Programs overview
- `/results` — Results / metrics
- `/platform` — Platform entry (or set `platformUrl` to external)
- `/contact` — Contact + Book a Trial form (`#booking` anchor)

## Build

```bash
npm run build
npm start
```

## SEO

Title, description, and Open Graph tags are set in `app/layout.tsx`. Update there or add per-page metadata as needed.
