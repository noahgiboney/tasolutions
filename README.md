# Tooling & Assembly Solutions websites

One React app (Vite + TypeScript + React Router) that serves three sites from a single Vercel project, chosen by the domain the visitor uses:

- **tasolutions.com**: the main company site
- **slatwasher.com**: the Slat Washer product page
- **automationdreamteam.com**: the Automation Dream Team page

To preview the sister sites locally, open `http://slatwasher.localhost:5179` or `http://dreamteam.localhost:5179`, or add `?site=slatwasher` / `?site=dreamteam` to any URL (this works on Vercel preview links too).

## Contact form (Resend)

The form on tasolutions.com/contact posts to `/api/contact`, a Vercel serverless function (`api/contact.ts`) that emails the message through [Resend](https://resend.com). The visitor's address is set as reply-to, so you can reply directly.

Setup:

1. Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY`. `npm run dev` serves `/api/contact` locally with the same code.
2. In Vercel, add `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` under **Settings → Environment Variables**, then redeploy.
3. To deliver to `email@tasolutions.com`, verify the `tasolutions.com` domain in Resend (it gives you DNS records to add), then set `CONTACT_FROM_EMAIL` to an address on that domain, such as `TAS Website <website@tasolutions.com>`. Until then, Resend's test sender `onboarding@resend.dev` only delivers to the email address on your Resend account.

## Connecting the domains

In the Vercel project, open **Settings → Domains** and add all six names: `tasolutions.com`, `www.tasolutions.com`, `slatwasher.com`, `www.slatwasher.com`, `automationdreamteam.com` and `www.automationdreamteam.com`. Vercel shows the DNS records to set at the domain registrar for each one. No other configuration is needed; the app picks the right site from the domain.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # type-check + production build into dist/
npm run preview   # serve the built site locally
npm run lint
```

## Design

The site follows the "Blueprint" design spec in [DESIGN.md](DESIGN.md): colors, type, components and imagery rules. [AGENTS.md](AGENTS.md) (and `CLAUDE.md`, which imports it) tells AI coding agents to follow that spec when they change the site.

## Where things live

- `src/content.ts`: all page copy, machine specs, contact details and document links. Edit text here.
- `src/pages/`: one component per page (Home, Our Story, Automation, machine detail, Quality, Contact).
- `src/components/`: header/footer layout, page banner, carousel, machine card, icons.
- `src/index.css`: all styles. Brand colors are CSS variables at the top (`--red`, `--navy`, ...).
- `public/images/`: site images, already resized and converted to WebP where it helped.
- `public/documents/`: Certificate of Conformance and Quality Manual PDFs.

## Deploying to Vercel

Import the GitHub repo in Vercel. It auto-detects Vite (build command `npm run build`, output `dist`).

`vercel.json` does two things:

- Sends every route to `index.html`, so links like `/automation/swab-assembly` work on refresh.
- Permanently redirects the old page URLs (`/ourstory.html`, `/machine1.html`, …) to the new routes, so existing links and search results keep working.
