# Agent guide

One repo and one Vercel project serve three websites for Tooling & Assembly Solutions:

| Domain | Site | Entry component |
|---|---|---|
| tasolutions.com | Main company site (multi-page, React Router) | `src/App.tsx` |
| slatwasher.com | Slat Washer product page (single page) | `src/sites/SlatWasher.tsx` |
| automationdreamteam.com | Automation Dream Team (single page) | `src/sites/DreamTeam.tsx` |

Stack: React 19 + Vite + TypeScript + React Router 7, deployed on Vercel.

## Before changing anything visual

Read [DESIGN.md](DESIGN.md). It defines the "Blueprint" design shared by all three sites: tokens, type, components, and imagery rules. Follow it, and update it in the same change if you add or alter a pattern.

Hard rules:
- No AI-generated or stock images. Only real TAS photos, shown in `<Figure>` plates.
- Square corners, no shadows, no gradients.
- Use the CSS variables in `src/index.css`; don't hard-code colors.
- Page copy lives in `src/content.ts`, not in components.

## Three sites, one app

`src/hosts.ts` maps a hostname to a site (`www.` is ignored). In the browser, `src/site.ts` uses it before React renders and `src/main.tsx` renders the matching entry component. Unknown hosts (Vercel preview URLs, localhost) get the TAS site.

## SEO: each page's HTML, sitemaps, 404s

The app renders in the browser, but crawlers and link previews only read the HTML Vercel sends. So:
- `src/seo.ts` lists every page on every site with its title and description (copy in `pageMeta` in `src/content.ts`). Pages render `<PageMeta {...tasPages.x} />` to set the tab title and description.
- At build time, `server/seo-files.ts` (run by the `seo` plugin in `vite.config.ts`) writes a copy of `index.html` per page into `dist/_shell/<site>/<path>/`, filling the `<!-- seo:start -->` block with title, description, canonical, Open Graph tags and icons. It also writes `dist/_seo/<site>/robots.txt`, `sitemap.xml` and `site.webmanifest`, and `dist/404.html`.
- `middleware.ts` (Vercel Routing Middleware) runs before static files, so it also sees `/`. It rewrites each request to the right shell by host and path, and `/robots.txt`, `/sitemap.xml` and `/site.webmanifest` to that site's file. A path with no shell isn't found, so Vercel serves `404.html` with a real 404 status. There's no SPA catch-all rewrite in `vercel.json`; don't add one back, it would turn 404s into 200s.
- In `npm run dev` the shells aren't used (titles still update in the browser); the `seo` plugin serves robots, sitemap and manifest by host.
- Import `@vercel/functions/middleware`, not `@vercel/functions`: the main entry pulls in Node-only modules that break the edge bundle.

To add a page: add it to `tasPages` (or `sitePages`) in `src/seo.ts` with copy in `pageMeta`, and it gets a shell and a sitemap entry automatically.

Share images (`public/images/og/`, 1200×630) and icons (`public/icons/`, `public/favicon.ico`, `public/apple-touch-icon.png`) were made from the real photos and logos. Slat Washer uses the TAS icons.

Preview a sister site:
- Local: `http://slatwasher.localhost:5173` or `http://dreamteam.localhost:5173` (or add `?site=slatwasher` / `?site=dreamteam` to any URL).
- Vercel preview deploys: add `?site=slatwasher` or `?site=dreamteam`.

To add a domain: add it to `hostToSite` and `siteOrigin` in `src/hosts.ts` and to `sitePages` and `siteBrand` in `src/seo.ts`, add an entry component under `src/sites/`, and attach the domain to the Vercel project.

Shared building blocks: `SiteHeader`, `SiteFooter`, `CallToAction`, `Figure`, `MachineCard`, `DimensionLine` in `src/components/`. The sister sites wrap their content in `src/sites/SisterLayout.tsx`, which links Contact to tasolutions.com/contact.

## Contact form

`src/components/ContactForm.tsx` (on the TAS contact page) posts JSON to `/api/contact`. The logic lives in `server/contact.ts` (validation, honeypot, Resend send) and is shared by:
- `api/contact.ts`: the Vercel serverless function in production.
- `vite.config.ts`: a dev-only middleware so `npm run dev` serves the same endpoint.

Inside `api/` and `server/`, import local files with a `.js` extension (`'../server/contact.js'`), never `.ts`. Vercel compiles each file to `.js` but keeps import paths as written, so a `.ts` import works in `npm run dev` but crashes the deployed function (`FUNCTION_INVOCATION_FAILED`).

Env vars (see `.env.example`): `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`. They're server-only; never prefix them with `VITE_`. `middleware.ts` skips `/api/`; keep it that way.

## Layout of the code

- `src/content.ts`: all copy for all three sites (company info, TAS pages, machines, `slatWasher`, `dreamTeam`).
- `src/pages/`: one component per tasolutions.com route.
- `src/sites/`: the two sister sites and their shared layout.
- `src/components/`: shared components.
- `src/index.css`: all styles, organized by the component headings used in DESIGN.md.
- `public/images/`, `public/documents/`: static assets, shared by all domains.
- `vercel.json`: redirects from the old tasolutions.com `.html` URLs. Keep them when adding routes.
- `middleware.ts`, `src/hosts.ts`, `src/seo.ts`, `server/seo-files.ts`: per-site HTML heads, sitemaps and 404s (see SEO above).

## Commands

```bash
npm run dev      # local dev server
npm run build    # type-check + production build (must pass)
npm run lint     # oxlint (must be clean)
```

Check any UI change at 375px and desktop width, on every site it touches, before finishing.
