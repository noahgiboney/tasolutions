import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'

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

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contactApiDev()],
})
