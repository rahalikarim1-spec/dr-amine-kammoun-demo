# Dr Amine Kammoun — bilingual (FR/AR) medical website (DEMO)

Next.js 15 (App Router, SSG) · TypeScript · Tailwind CSS 3. 48 pages × 2 languages = 96 static URLs.

## Run locally
```bash
npm install
cp .env.example .env.local      # optional for local work
npm run dev                     # http://localhost:3000  → redirects to /fr/
```
Quality gate: `npm run qa` (typecheck → source SEO validation → build → rendered-HTML validation).

## Project structure
```
src/
  config/        site.ts (NAP + ALL unverified data) · seo.ts · editorial.ts · sources.ts · navigation.ts
  lib/           registry.ts (page structure) · links.ts · metadata.ts · schema.ts · content.ts · inline.tsx
  content/{fr,ar}/  page copy, keyed by page id (core, hubs, gynecology, pregnancy, ultrasound, fertility, conditions, legal)
  dictionaries/  UI strings FR/AR
  components/    layout, templates (PageView, HomeView), content blocks, map, form, consent, tracking
  app/fr · app/ar  one root layout per language (lang/dir/fonts) + catch-all route  · api/contact · sitemap · robots · og
scripts/         validate-seo.ts · validate-html.ts · generate-seo-docs.ts
```
Add a page: registry entry + `fr` and `ar` content with the same id → URL, breadcrumbs, sitemap, hreflang, JSON-LD are automatic.

## Tracking
GTM/GA4 load only if `NEXT_PUBLIC_GTM_ID` / `NEXT_PUBLIC_GA4_ID` exist, with Consent Mode v2 (denied until the visitor accepts). Events pushed to `dataLayer`: `phone_click`, `appointment_click`, `whatsapp_click`, `map_click`, `language_change`, `contact_form_submit` (via `data-track` attributes).

## Deploy (Vercel recommended)
1. Import the repo in Vercel (framework: Next.js, no build settings needed).
2. Set env vars from `.env.example`. For the demo: `NEXT_PUBLIC_INDEXING=off` (default).
3. Go live: set `NEXT_PUBLIC_SITE_URL` to the production domain and `NEXT_PUBLIC_INDEXING=on`, redeploy.
4. Search Console: add the property, set `NEXT_PUBLIC_GSC_VERIFICATION`, submit `/sitemap.xml`.
5. Any Node host works too: `npm run build && npm start` (the contact API needs a Node runtime).

See `SEO-ARCHITECTURE.md`, `INTERNAL-LINKING.md`, `CLIENT-DATA-NEEDED.md`.
