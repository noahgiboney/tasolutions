// Vercel serverless function: POST /api/contact
import type { VercelRequest, VercelResponse } from '@vercel/node'
// Import with ".js": Vercel compiles each file to .js but keeps import paths
// as written, so a ".ts" path here crashes the function at startup.
import { handleContact } from '../server/contact.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }
  const result = await handleContact(req.body, process.env)
  return res.status(result.status).json(result.body)
}
