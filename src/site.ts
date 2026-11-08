// One build serves three domains. The visitor's hostname decides which site
// renders (see AGENTS.md, "Three sites, one app").

import { isSiteId, siteForHost, type SiteId } from './hosts.ts'
import { iconFiles, sitePages, siteBrand } from './seo.ts'

export type { SiteId }

export function detectSite(location: Location = window.location): SiteId {
  // ?site=slatwasher overrides the hostname, for Vercel preview URLs and local dev.
  const param = new URLSearchParams(location.search).get('site')
  if (isSiteId(param)) return param
  return siteForHost(location.hostname)
}

/**
 * Point the icons at the right site before React renders. In production each
 * page's HTML already has the right <head> (server/seo-files.ts); this covers
 * local dev and ?site= previews. Pages set their own title and description.
 */
export function applySiteMeta(site: SiteId) {
  const icons = iconFiles(siteBrand[site].icon)
  document.querySelector('link[rel="icon"][type="image/png"]')?.setAttribute('href', icons.png32)
  document.querySelector('link[rel="apple-touch-icon"]')?.setAttribute('href', icons.apple)
  if (site !== 'tas') {
    document.title = sitePages[site][0].title
  }
}
