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

`src/site.ts` picks the site from the visitor's hostname (`www.` is ignored) before React renders, and sets the tab title, meta description and favicon. `src/main.tsx` then renders the matching entry component. Unknown hosts (Vercel preview URLs, localhost) get the TAS site.

Routing happens in the app, not in `vercel.json`: Vercel serves `index.html` before any `vercel.json` rule runs, so a host-based rewrite would never fire for `/`. Don't try to move it there.

Preview a sister site:
- Local: `http://slatwasher.localhost:5173` or `http://dreamteam.localhost:5173` (or add `?site=slatwasher` / `?site=dreamteam` to any URL).
- Vercel preview deploys: add `?site=slatwasher` or `?site=dreamteam`.

To add a domain: add it to `hostToSite` and `siteMeta` in `src/site.ts`, add an entry component under `src/sites/`, and attach the domain to the Vercel project.

Shared building blocks: `SiteHeader`, `SiteFooter`, `CallToAction`, `Figure`, `MachineCard`, `DimensionLine` in `src/components/`. The sister sites wrap their content in `src/sites/SisterLayout.tsx`, which links Contact to tasolutions.com/contact.

## Contact form

`src/components/ContactForm.tsx` (on the TAS contact page) posts JSON to `/api/contact`. The logic lives in `server/contact.ts` (validation, honeypot, Resend send) and is shared by:
- `api/contact.ts`: the Vercel serverless function in production.
- `vite.config.ts`: a dev-only middleware so `npm run dev` serves the same endpoint.

Inside `api/` and `server/`, import local files with a `.js` extension (`'../server/contact.js'`), never `.ts`. Vercel compiles each file to `.js` but keeps import paths as written, so a `.ts` import works in `npm run dev` but crashes the deployed function (`FUNCTION_INVOCATION_FAILED`).

Env vars (see `.env.example`): `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`. They're server-only; never prefix them with `VITE_`. `vercel.json`'s SPA rewrite excludes `/api/`; keep it that way.

## Layout of the code

- `src/content.ts`: all copy for all three sites (company info, TAS pages, machines, `slatWasher`, `dreamTeam`).
- `src/pages/`: one component per tasolutions.com route.
- `src/sites/`: the two sister sites and their shared layout.
- `src/components/`: shared components.
- `src/index.css`: all styles, organized by the component headings used in DESIGN.md.
- `public/images/`, `public/documents/`: static assets, shared by all domains.
- `vercel.json`: SPA rewrite, plus redirects from the old tasolutions.com `.html` URLs. Keep the redirects when adding routes.

## Commands

```bash
npm run dev      # local dev server
npm run build    # type-check + production build (must pass)
npm run lint     # oxlint (must be clean)
```

Check any UI change at 375px and desktop width, on every site it touches, before finishing.
