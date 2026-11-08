// Vercel Routing Middleware: runs before static files, so it also sees "/".
// It sends each request the HTML written for that site and page by the build
// (server/seo-files.ts), so crawlers and link previews get the right title,
// description and share image without running JavaScript.
//
// A path with no page for that site isn't found on disk, so Vercel serves
// dist/404.html with a real 404 status; the app then shows the error page.

import { next, rewrite } from '@vercel/functions/middleware'
import { siteForHost } from './src/hosts.js'

const PER_SITE_FILES = new Set(['/robots.txt', '/sitemap.xml', '/site.webmanifest'])

export const config = {
  // Skip the API, built assets and static folders.
  matcher: '/((?!api/|assets/|images/|documents/|icons/|_shell/|_seo/).*)',
}

export default function middleware(request: Request) {
  const url = new URL(request.url)
  const site = siteForHost(url.hostname)

  if (PER_SITE_FILES.has(url.pathname)) {
    return rewrite(new URL(`/_seo/${site}${url.pathname}`, url))
  }
  // Other files (favicon.ico, apple-touch-icon.png, 404.html...) are served as-is.
  if (/\.[a-z0-9]+$/i.test(url.pathname)) return next()

  const path = url.pathname.replace(/\/+$/, '')
  return rewrite(new URL(`/_shell/${site}${path}/index.html`, url))
}
