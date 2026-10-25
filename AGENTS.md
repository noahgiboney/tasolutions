# Agent guide

Website for Tooling & Assembly Solutions (tasolutions.com). React 19 + Vite + TypeScript + React Router 7, deployed on Vercel.

## Before changing anything visual

Read [DESIGN.md](DESIGN.md). It defines the "Blueprint" design: tokens, type, components, and imagery rules. Follow it, and update it in the same change if you add or alter a pattern.

Hard rules:
- No AI-generated or stock images. Only real TAS photos, shown in `<Figure>` plates.
- Square corners, no shadows, no gradients.
- Use the CSS variables in `src/index.css`; don't hard-code colors.
- Page copy lives in `src/content.ts`, not in components.

## Layout of the code

- `src/content.ts`: all copy, machine specs, contact info, document links.
- `src/pages/`: one component per route.
- `src/components/`: `Layout` (header, footer), `PageHero`, `Figure`, `DimensionLine`, `Carousel`, `MachineCard`, `Icons`.
- `src/index.css`: all styles, organized by the component headings used in DESIGN.md.
- `public/images/`, `public/documents/`: static assets.
- `vercel.json`: SPA rewrite plus redirects from the old `.html` URLs. Keep the redirects when adding routes.

## Commands

```bash
npm run dev      # local dev server
npm run build    # type-check + production build (must pass)
npm run lint     # oxlint (must be clean)
```

Check any UI change at 375px and desktop width before finishing.
