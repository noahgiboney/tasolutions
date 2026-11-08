// Which site a hostname belongs to. Kept free of browser APIs so the Vercel
// middleware (middleware.ts) and the build (vite.config.ts) can share it.

export type SiteId = 'tas' | 'slatwasher' | 'dreamteam'

export const hostToSite: Record<string, SiteId> = {
  'slatwasher.com': 'slatwasher',
  'automationdreamteam.com': 'dreamteam',
  // Local preview: http://slatwasher.localhost:5173, http://dreamteam.localhost:5173
  'slatwasher.localhost': 'slatwasher',
  'dreamteam.localhost': 'dreamteam',
}

/** Production address of each site, used for canonical links, Open Graph and sitemaps. */
export const siteOrigin: Record<SiteId, string> = {
  tas: 'https://www.tasolutions.com',
  slatwasher: 'https://www.slatwasher.com',
  dreamteam: 'https://www.automationdreamteam.com',
}

export function isSiteId(value: string | null | undefined): value is SiteId {
  return value === 'tas' || value === 'slatwasher' || value === 'dreamteam'
}

/** `www.` is ignored. Unknown hosts (Vercel previews, localhost) get the TAS site. */
export function siteForHost(hostname: string): SiteId {
  const host = hostname.toLowerCase().replace(/:\d+$/, '').replace(/^www\./, '')
  return hostToSite[host] ?? 'tas'
}
