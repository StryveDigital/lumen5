# Lumen5 landing pages: source code

React + TypeScript + Tailwind project (built with Vite) for five Lumen5 landing pages:
`lp1`, `lp2`, `lp3`, `explainers`, and `demo`.

## Where things live

| What | Where |
|---|---|
| Each page's sections | `src/pages/<page>/` (`Page.tsx` puts the sections in order) |
| Footer, logo strip, button links | `src/shared/` (`cta-urls.ts` holds every CTA destination) |
| Fonts, colors, animations | `src/index.css`, `tailwind.config.js` |
| Images, fonts, videos | `public/` |
| Tracking tags (GTM, GA4, Mixpanel) | `index.html` (and `export-template/index.html` for the export) |
| Demo page HubSpot form | `src/pages/demo/DemoForm.tsx` |

Note: `lp3` reuses one small piece from `lp2` (`src/pages/lp2/QuoteGlyph.tsx`).

## Commands (requires Node.js 20+)

```bash
npm install          # once
npm run dev          # local preview with live reload, e.g. http://localhost:5173/lp1
npm run build:pages  # rebuild the standalone page folders into export/
npm run build        # original single-app build (how it ran on Vercel)
```

`npm run build:pages` produces one self-contained folder per page in `export/`, the same
format as the "1_Website_Export" folder in this handoff. Edit a page in `src/`, run it,
and upload the updated folder.

## Internal pages (not exported)

`/video-strategy` (campaign hub) and `/plan` (static campaign document, `public/plan/`) are
internal pages that are only served by the Vercel app build. They're intentionally left out of
`build:pages` and the handoff.
