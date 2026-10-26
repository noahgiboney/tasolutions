# TAS design spec: "Blueprint"

The site should read like a clean engineering drawing: navy drawing sheets with a fine grid, hairline rules, typewriter-style labels, and red used the way a checker uses a red pen. It's a precision machine shop, so the design is precise too: square corners, exact alignment, nothing decorative that doesn't look like it came off a drawing.

The same design covers all three sites: tasolutions.com, slatwasher.com and automationdreamteam.com (see AGENTS.md for how one app serves all three). The sister sites use the same tokens and components. Their only differences are the brand in the header (the TAS logo beside the site name, with "By TAS" underneath), in-page anchor links instead of page links, and Contact pointing to tasolutions.com/contact.

This file is the source of truth for how the site looks. When you change the UI, follow it. If a change needs something the spec doesn't cover, add it here in the same commit.

---

## 1. Principles

1. **Drawing, not template.** Prefer rules, grids, labels and figure captions over cards, shadows and gradients.
2. **Real work only.** Every photo shows a real TAS part, machine or piece of equipment. No AI-generated or stock "industrial" imagery, ever.
3. **Red is a redline.** Red marks the one thing to act on (primary button, active nav item, key label). If everything is red, nothing is.
4. **Square and flat.** `border-radius: 0` everywhere. No box shadows, no gradients, no glows.
5. **No location or phone number.** The sites never name a city or address and never show a phone number. Every "get in touch" action goes to the contact form on tasolutions.com/contact. The email address appears only in the footer.
6. **Copy stays the company's.** Page text lives in `src/content.ts`. Design changes don't rewrite copy.

---

## 2. Color tokens

All colors are CSS variables in `src/index.css` under `:root`. Use the variable, never a raw hex in component CSS.

| Token | Value | Use |
|---|---|---|
| `--navy-950` | `#07123a` | Footer, deepest panels |
| `--navy-900` | `#0b1a4a` | Drawing sheets (hero, page headers, dark sections); headings on light |
| `--navy-700` | `#1a2d6e` | Hover on navy, secondary emphasis |
| `--red` | `#d7141f` | Primary buttons, active nav, labels on light, emphasis rules |
| `--red-600` | `#b40f19` | Primary button hover |
| `--red-on-dark` | `#ff8a90` | Labels and accents on navy (passes contrast where `--red` doesn't) |
| `--dim` | `#9fb3ff` | Dimension lines and secondary text on navy |
| `--paper` | `#ffffff` | Default page background |
| `--paper-2` | `#f3f5fa` | Alternate light sections (with light grid) |
| `--ink` | `#0b1a4a` | Headings on light |
| `--text` | `#2a3352` | Body text on light |
| `--muted` | `#5b6486` | Secondary text on light |
| `--rule` | `#d5dbea` | Hairlines on light |
| `--rule-strong` | `#0b1a4a` | Heavy rules, figure frames on light |
| `--rule-dark` | `rgb(255 255 255 / 0.18)` | Hairlines on navy |

Text on navy is `#fff` (headings) or `rgb(255 255 255 / 0.78)` (body). Never put `--red` text on navy; use `--red-on-dark`.

---

## 3. Typography

Loaded from Google Fonts in `index.html`.

- **IBM Plex Sans** (400, 500, 600): headings and body.
- **IBM Plex Mono** (400, 500): labels, figure captions, spec values, drawing metadata, numbers in stats.

| Role | Font | Size | Weight | Notes |
|---|---|---|---|---|
| Display (home hero) | Sans | `clamp(2.5rem, 6vw, 4.5rem)` | 600 | `letter-spacing: -0.03em`, line-height 1.02 |
| Page title (h1) | Sans | `clamp(2.25rem, 5vw, 3.5rem)` | 600 | `-0.025em` |
| Section title (h2) | Sans | `clamp(1.75rem, 3vw, 2.5rem)` | 600 | `-0.02em`, max 22ch |
| Item title (h3) | Sans | `1.25rem` | 600 | |
| Body | Sans | `1rem` | 400 | line-height 1.65 |
| Lead | Sans | `1.125rem` | 400 | `--muted` on light |
| Label | Mono | `0.75rem` | 500 | UPPERCASE, `letter-spacing: 0.08em` |
| Caption | Mono | `0.75rem` | 400 | UPPERCASE, `letter-spacing: 0.06em` |
| Stat value | Mono | `clamp(1.5rem, 2.6vw, 2rem)` | 500 | |

Uppercase is only for mono labels and captions, never for headings or body copy.

---

## 4. Layout and spacing

- Container: max `1200px` content width, side gutter `clamp(16px, 4vw, 32px)`.
- Section padding: `clamp(64px, 9vw, 112px)` top and bottom.
- Spacing steps: 4, 8, 12, 16, 24, 32, 48, 64, 96 px. Don't invent in-between values.
- Grid backgrounds:
  - **On navy** (`.sheet`): minor grid every 24px at `rgb(255 255 255 / 0.05)`, major every 120px at `rgb(255 255 255 / 0.09)`.
  - **On paper-2** (`.section-grid`): minor grid every 24px at `#e6eaf3`.
- Breakpoints: 900px (nav collapses to menu), 860px (two-column layouts stack), 640px (phones).
- No horizontal scrolling at 375px width.

---

## 5. Shape, lines and depth

- `border-radius: 0` on everything.
- Hairline: `1px solid var(--rule)` (light) or `var(--rule-dark)` (navy).
- Emphasis rule: `3px solid var(--red)` along the top of a strip or panel.
- Figure frame: `1px solid var(--rule-strong)` on light, `1px solid rgb(255 255 255 / 0.35)` on navy.
- Depth comes from contrast (navy vs paper) and rules, not shadows. `box-shadow` is not used.
- Focus ring: `outline: 2px solid var(--red); outline-offset: 2px`. On navy, `var(--red-on-dark)`.

---

## 6. Components

Each lives in `src/components/` (React) with styles in `src/index.css` under a matching heading.

### Label (`.label`)
Mono, uppercase, red on light (`--red-on-dark` on navy). Format: `NN / NAME` for numbered sections (`01 / WHAT WE DO`), or plain metadata (`DWG TAS-1996 · PRECISION MACHINING AND AUTOMATION`). Sits directly above a heading.

### Buttons (`.btn`)
Square, 48px tall (40px for `.btn-sm`), Plex Sans 600, arrow glyph `→` for forward actions.
- `.btn-primary`: red fill, white text. One per view.
- `.btn-outline`: 1px navy border on light; `.btn-outline-light`: white border on navy.
- Hover: primary darkens to `--red-600`; outline fills with a 6% tint. No movement or scaling.

### Header (`Layout.tsx`)
White bar with a 3px red rule on top and a 1px bottom rule. The real TAS logo (`/images/brand/tas-logo.webp`) on the left, about 44px tall, beside the wordmark. Nav in Plex Sans 500. The active item gets a 2px red underline. Contact is a `.btn-primary.btn-sm`. Below 900px the nav collapses into a menu button.

### Sheet (`.sheet`)
A navy drawing panel with the grid background. Used for the home hero, page headers and dark sections.

### Page header (`PageHero.tsx`)
A `.sheet` with: a metadata label (`SHEET 03 · AUTOMATION`), the page title, an optional lead, and a bottom strip of mono metadata cells separated by `--rule-dark`. No background photos.

### Figure plate (`Figure.tsx`)
The standard way to show any image. A 1px frame, 8px inner padding, the image, then a mono caption bar: `FIG. 03 — SWAB ASSEMBLY` on the left and optional metadata (`45/MIN`) on the right. Number figures in order on each page.

### Mission quote
The mission statement (`story.mission` in `content.ts`) appears in two places:
- **Home hero (`.hero-mission`):** under the lead paragraph. A 2px red rule on the left, a `MISSION STATEMENT` label, and the quote in white Plex Sans 500.
- **Our Story (`.mission`):** a large bordered panel with a 3px red top rule.

Both read the same content entry, so edit the text in one place.

### Dimension line (`DimensionLine.tsx`)
A decorative `|◄──── ±.0001" ────►|` in `--dim` (navy) or `--muted` (light). Always `aria-hidden`. At most one per view.

### Spec strip (`.spec-strip`)
A row of equal cells split by hairlines, each with a mono label and a mono value. Used for the home stats and quality highlights.

### Spec table (`.spec-table`)
Rows split by hairlines: mono uppercase label on the left, Plex Sans 500 value on the right. Used for machine specifications.

### Machine card (`MachineCard.tsx`)
A figure plate that links to the machine page. Caption: machine name, plus production rate as metadata. On hover the frame turns red and the image scales to 1.03.

### Small plate (`.plate-small`)
For figures whose source photo is only about 200px wide (like the Slat Washer machine). Caps the plate at 420px so the image is never shown much past 2× its size.

### Process cell (`.process-cell`)
On navy: a `STEP NN` label (or `MODE NN`, `PART NN` on the sister sites), an h3 and optional body text, in a grid of cells separated by `--rule-dark`. Use `.process-grid` for three columns and `.process-grid-4` for four. Don't repeat the h3 text in the label. The automation process steps use the same `STEP NN` label beside a figure plate.

### Call to action (`CallToAction.tsx`)
A flat red band with a mono label, a heading, one line of body text, and a single white button (`.btn-white`) that goes to the contact form.

### Contact form (`ContactForm.tsx`)
A white panel with a 1px navy frame and 3px red top rule. Fields are square inputs with a 1px `--rule` border (navy bottom edge), mono uppercase labels, and "(optional)" in muted sentence case. Focus is a 2px red outline. Errors show under the field in `--red-600` and turn its border red. One `.btn-primary` submit with nothing beside it (don't show the destination email). The success state replaces the form with a short confirmation.

### Footer as title block (`Layout.tsx`)
The footer is styled like a drawing's title block: a grid of bordered cells, each with a mono label (`COMPANY`, `PAGES`, `OUR SITES`, `ESTABLISHED`, `EMAIL`) and its value. The copyright line sits in the last row like a revision note.

---

## 7. Imagery rules

- **Real photos only.** Shop floor, machines, parts, CAD screenshots of TAS designs, inspection equipment. No AI-generated or stock imagery. The old AI banners were removed on purpose; don't bring them back.
- Show images inside figure plates, not as full-bleed backgrounds.
- Many photos are small (200×125 px). Never display an image wider than about 2× its native width. Small photos go in small plates.
- CAD renders and transparent PNGs use `.fit-contain` (white background, contained). Photos use `object-fit: cover` at 4:3.
- Store images in `public/images/<section>/` with kebab-case names. Convert large PNG/JPG to WebP (`cwebp -q 80 -resize 1400 0`). Keep files under about 150 KB.
- Every image needs meaningful `alt` text unless it's purely decorative.

---

## 8. Motion

Minimal. Hover transitions are 150 to 200ms on color, border-color and image transform. The carousel uses native smooth scrolling. Everything respects `prefers-reduced-motion`.

---

## 9. Do and don't

| Do | Don't |
|---|---|
| Square corners, hairline rules | Rounded cards, pills, drop shadows |
| Mono labels like `02 / FABRICATION` | Uppercase headings or body text |
| Real photos in figure plates | AI or stock images, full-bleed photo heroes |
| One red primary button per view | Red text on navy, multiple red CTAs |
| Navy grid sheets for emphasis | Gradients, glows, blurred glass |
| Copy changes in `src/content.ts` | Hard-coding page text in components |

---

## 10. Adding or changing a page

1. Add copy to `src/content.ts`.
2. Create `src/pages/YourPage.tsx`. Start with `<PageHero sheet="NN" label="..." title="..." />`, then alternate `.section` (paper) and `.section.section-grid` (paper-2). Use `.sheet` sections sparingly, at most one besides the header.
3. Show images with `<Figure>`.
4. Add the route in `src/App.tsx` and, if it belongs in the nav, in `navItems` in `src/components/Layout.tsx`.
5. Set the page `<title>` inside the component (React 19 hoists it).
6. Run `npm run build` and `npm run lint`, and check the page at 375px and desktop widths.
