// One build serves three domains. The visitor's hostname decides which site
// renders (see AGENTS.md, "Three sites, one app").

export type SiteId = 'tas' | 'slatwasher' | 'dreamteam'

type SiteMeta = {
  title: string
  description: string
  favicon: string
}

export const siteMeta: Record<SiteId, SiteMeta> = {
  tas: {
    title: 'Tooling & Assembly Solutions',
    description:
      'Tooling & Assembly Solutions: precision machining and custom automated assembly machines, built in Simi Valley, California since 1996.',
    favicon: '/favicon.png',
  },
  slatwasher: {
    title: 'Slat Washer | Tooling & Assembly Solutions',
    description:
      'The Slat Washer by Tooling & Assembly Solutions: an automated, stainless steel machine that cleans filling-line slats for the pharmaceutical industry.',
    favicon: '/favicon.png',
  },
  dreamteam: {
    title: 'Automation Dream Team | Tooling & Assembly Solutions',
    description:
      'Automation Dream Team by Tooling & Assembly Solutions: hand-selected engineers, technicians, HAAS machines and suppliers building automated assembly machines.',
    favicon: '/favicon-dreamteam.png',
  },
}

const hostToSite: Record<string, SiteId> = {
  'slatwasher.com': 'slatwasher',
  'automationdreamteam.com': 'dreamteam',
  // Local preview: http://slatwasher.localhost:5179, http://dreamteam.localhost:5179
  'slatwasher.localhost': 'slatwasher',
  'dreamteam.localhost': 'dreamteam',
}

function isSiteId(value: string | null): value is SiteId {
  return value === 'tas' || value === 'slatwasher' || value === 'dreamteam'
}

export function detectSite(location: Location = window.location): SiteId {
  // ?site=slatwasher overrides the hostname, for Vercel preview URLs and local dev.
  const param = new URLSearchParams(location.search).get('site')
  if (isSiteId(param)) return param

  const host = location.hostname.toLowerCase().replace(/^www\./, '')
  return hostToSite[host] ?? 'tas'
}

/** Set the tab title, description and favicon before React renders. */
export function applySiteMeta(site: SiteId) {
  const meta = siteMeta[site]
  document.title = meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
  document.querySelector('link[rel="icon"]')?.setAttribute('href', meta.favicon)
}
