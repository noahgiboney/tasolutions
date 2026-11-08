import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import { siteForHost } from './src/hosts.js'
import { robotsTxt, seoFiles, sitemapXml, webManifest } from './server/seo-files.js'

// Serves POST /api/contact during `npm run dev`, using the same handler as the
// Vercel function, with env vars from .env / .env.local (never sent to the browser).
function contactApiDev(): Plugin {
  return {
    name: 'contact-api-dev',
    configureServer(server) {
      const env = loadEnv(server.config.mode, process.cwd(), '')
      server.middlewares.use('/api/contact', async (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end(JSON.stringify({ ok: false, error: 'Method not allowed' }))
          return
        }
        let raw = ''
        for await (const chunk of req) raw += chunk
        let body: unknown = {}
        try {
          body = JSON.parse(raw || '{}')
        } catch {
          // Treated as an empty submission; the handler returns a 400.
        }
        const { handleContact } = (await server.ssrLoadModule(
          '/server/contact.ts',
        )) as typeof import('./server/contact.ts')
        const result = await handleContact(body, env)
        res.statusCode = result.status
        res.end(JSON.stringify(result.body))
      })
    },
  }
}

// Writes each page's HTML head, robots.txt, sitemap.xml and site.webmanifest
// for every site (server/seo-files.ts). In dev, serves the last three by host.
function seo(): Plugin {
  const devFiles: Record<string, (site: ReturnType<typeof siteForHost>) => [string, string]> = {
    '/robots.txt': (site) => ['text/plain', robotsTxt(site)],
    '/sitemap.xml': (site) => ['application/xml', sitemapXml(site)],
    '/site.webmanifest': (site) => ['application/manifest+json', webManifest(site)],
  }
  return {
    name: 'seo-files',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const file = devFiles[(req.url ?? '').split('?')[0]]
        if (!file) return next()
        const [type, body] = file(siteForHost(req.headers.host ?? ''))
        res.setHeader('Content-Type', type)
        res.end(body)
      })
    },
    async writeBundle({ dir = 'dist' }) {
      const html = await readFile(join(dir, 'index.html'), 'utf8')
      for (const [path, body] of Object.entries(seoFiles(html))) {
        const out = join(dir, path)
        await mkdir(dirname(out), { recursive: true })
        await writeFile(out, body)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contactApiDev(), seo()],
})
