// Build-time SEO files (run by the seoFiles plugin in vite.config.ts).
//
// The app renders in the browser, so crawlers and link previews only see the
// HTML Vercel sends. For each page on each site this writes a copy of
// index.html with that page's title, description, canonical link, Open Graph
// tags and icons. middleware.ts picks the right copy by hostname and path.
//
//   dist/_shell/<site>/<path>/index.html   one per page in sitePages
//   dist/404.html                          any other address (status 404)
//   dist/_seo/<site>/robots.txt, sitemap.xml, site.webmanifest

import { siteOrigin, type SiteId } from '../src/hosts.js'
import { iconFiles, notFoundPage, siteBrand, sitePages, type PageMeta } from '../src/seo.js'

const SITES: SiteId[] = ['tas', 'slatwasher', 'dreamteam']
const BLOCK = /<!-- seo:start[\s\S]*?<!-- seo:end -->/

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function headTags(site: SiteId, page: PageMeta | null) {
  const brand = siteBrand[site]
  const icons = iconFiles(brand.icon)
  const origin = siteOrigin[site]
  const meta = page ?? { ...notFoundPage, path: '' }
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
  ]
  if (page) {
    const url = origin + page.path
    tags.push(
      `<link rel="canonical" href="${url}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:site_name" content="${esc(brand.name)}" />`,
      `<meta property="og:title" content="${esc(page.title)}" />`,
      `<meta property="og:description" content="${esc(page.description)}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${origin}${brand.ogImage}" />`,
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
      `<meta property="og:image:alt" content="${esc(brand.ogAlt)}" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
    )
  } else {
    tags.push(`<meta name="robots" content="noindex" />`)
  }
  if (brand.icon === 'tas') tags.push(`<link rel="icon" href="/favicon.ico" sizes="any" />`)
  tags.push(
    `<link rel="icon" type="image/png" sizes="32x32" href="${icons.png32}" />`,
    `<link rel="apple-touch-icon" href="${icons.apple}" />`,
    `<link rel="manifest" href="/site.webmanifest" />`,
  )
  return tags.join('\n    ')
}

export function robotsTxt(site: SiteId) {
  return `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${siteOrigin[site]}/sitemap.xml\n`
}

export function sitemapXml(site: SiteId) {
  const urls = sitePages[site]
    .map((p) => `  <url><loc>${siteOrigin[site]}${p.path}</loc></url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

export function webManifest(site: SiteId) {
  const brand = siteBrand[site]
  const icons = iconFiles(brand.icon)
  return JSON.stringify(
    {
      name: brand.name,
      short_name: site === 'tas' ? 'TAS' : brand.name,
      start_url: '/',
      display: 'browser',
      background_color: '#ffffff',
      theme_color: '#0b1a4a',
      icons: [
        { src: icons.png192, sizes: '192x192', type: 'image/png' },
        { src: icons.png512, sizes: '512x512', type: 'image/png' },
      ],
    },
    null,
    2,
  )
}

/** Every file to write into dist/, keyed by its path there. */
export function seoFiles(indexHtml: string): Record<string, string> {
  if (!BLOCK.test(indexHtml)) throw new Error('index.html is missing the <!-- seo:start --> block')
  const files: Record<string, string> = {}
  for (const site of SITES) {
    for (const page of sitePages[site]) {
      const dir = page.path === '/' ? '' : page.path
      files[`_shell/${site}${dir}/index.html`] = indexHtml.replace(BLOCK, headTags(site, page))
    }
    files[`_seo/${site}/robots.txt`] = robotsTxt(site)
    files[`_seo/${site}/sitemap.xml`] = sitemapXml(site)
    files[`_seo/${site}/site.webmanifest`] = webManifest(site)
  }
  files['404.html'] = indexHtml.replace(BLOCK, headTags('tas', null))
  return files
}
