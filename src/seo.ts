// Every page on every site, with its title and description. The pages read
// this in the browser, and the build (server/seo-files.ts) uses it to write
// each page's <head>, the sitemaps and robots.txt. No browser APIs here.

import { company, dreamTeam, machineDescription, machines, pageMeta, slatWasher, type Machine } from './content.ts'
import type { SiteId } from './hosts.ts'

export type PageMeta = {
  path: string
  title: string
  description: string
}

export const tasPages = {
  home: { path: '/', ...pageMeta.home },
  ourStory: { path: '/our-story', ...pageMeta.ourStory },
  automation: { path: '/automation', ...pageMeta.automation },
  quality: { path: '/quality', ...pageMeta.quality },
  contact: { path: '/contact', ...pageMeta.contact },
  privacy: { path: '/privacy', ...pageMeta.privacy },
} satisfies Record<string, PageMeta>

export function machinePage(m: Machine): PageMeta {
  return {
    path: `/automation/${m.slug}`,
    title: `${m.name} | ${company.name}`,
    description: machineDescription(m),
  }
}

export const sisterPages = {
  slatwasher: {
    path: '/',
    title: `${slatWasher.name} | ${company.name}`,
    description: slatWasher.description,
  },
  dreamteam: {
    path: '/',
    title: `${dreamTeam.name} | ${company.name}`,
    description: dreamTeam.description,
  },
} satisfies Record<Exclude<SiteId, 'tas'>, PageMeta>

/** Every indexable page, per site: one HTML head each, and the sitemap entries. */
export const sitePages: Record<SiteId, PageMeta[]> = {
  tas: [
    tasPages.home,
    tasPages.ourStory,
    tasPages.automation,
    ...machines.map(machinePage),
    tasPages.quality,
    tasPages.contact,
    tasPages.privacy,
  ],
  slatwasher: [sisterPages.slatwasher],
  dreamteam: [sisterPages.dreamteam],
}

export const notFoundPage = pageMeta.notFound

/** Display name, share image and icons per site. Slat Washer uses the TAS icons. */
export const siteBrand: Record<SiteId, { name: string; ogImage: string; ogAlt: string; icon: 'tas' | 'dreamteam' }> = {
  tas: {
    name: company.name,
    ogImage: '/images/og/tas.jpg',
    ogAlt: 'Tooling & Assembly Solutions, with a photo of a lyophilizing machine built by TAS',
    icon: 'tas',
  },
  slatwasher: {
    name: slatWasher.name,
    ogImage: '/images/og/slatwasher.jpg',
    ogAlt: 'Slat Washer, with a photo of the stainless steel machine',
    icon: 'tas',
  },
  dreamteam: {
    name: dreamTeam.name,
    ogImage: '/images/og/dreamteam.jpg',
    ogAlt: 'Automation Dream Team, with a photo of the TAS assembly floor',
    icon: 'dreamteam',
  },
}

/** Icon files for an icon set (public/icons/, made from the real logos). */
export function iconFiles(icon: 'tas' | 'dreamteam') {
  return {
    png32: `/icons/${icon}-32.png`,
    apple: `/icons/${icon}-180.png`,
    png192: `/icons/${icon}-192.png`,
    png512: `/icons/${icon}-512.png`,
  }
}
