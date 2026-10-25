// Contact form handler, shared by the Vercel function (api/contact.ts) and the
// local dev server (vite.config.ts). Runs on the server only: the Resend key
// never reaches the browser.
import { Resend } from 'resend'

export type ContactEnv = {
  RESEND_API_KEY?: string
  CONTACT_TO_EMAIL?: string
  CONTACT_FROM_EMAIL?: string
}

export type ContactResult = { status: number; body: { ok: boolean; error?: string } }

const LIMITS = { name: 100, email: 200, company: 150, phone: 40, message: 5000 }
const SITES: Record<string, string> = {
  tas: 'tasolutions.com',
  slatwasher: 'slatwasher.com',
  dreamteam: 'automationdreamteam.com',
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function field(input: Record<string, unknown>, key: string): string {
  const value = input[key]
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(text: string) {
  return text.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`)
}

export async function handleContact(raw: unknown, env: ContactEnv): Promise<ContactResult> {
  const input = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>

  // Honeypot: real visitors never see or fill this field. Pretend it worked.
  if (field(input, 'website')) return { status: 200, body: { ok: true } }

  const data = {
    name: field(input, 'name'),
    email: field(input, 'email'),
    company: field(input, 'company'),
    phone: field(input, 'phone'),
    message: field(input, 'message'),
  }
  const site = SITES[field(input, 'site')] ?? SITES.tas

  if (!data.name || !data.email || !data.message) {
    return { status: 400, body: { ok: false, error: 'Name, email and message are required.' } }
  }
  if (!EMAIL_RE.test(data.email)) {
    return { status: 400, body: { ok: false, error: 'Enter a valid email address.' } }
  }
  for (const [key, max] of Object.entries(LIMITS)) {
    if (data[key as keyof typeof data].length > max) {
      return { status: 400, body: { ok: false, error: `${key} is too long.` } }
    }
  }

  if (!env.RESEND_API_KEY) {
    console.error('Contact form: RESEND_API_KEY is not set')
    return {
      status: 500,
      body: { ok: false, error: "The contact form isn't available right now. Please try again later." },
    }
  }

  const to = env.CONTACT_TO_EMAIL || 'email@tasolutions.com'
  // Until tasolutions.com is verified in Resend, onboarding@resend.dev only
  // delivers to the Resend account owner's own address.
  const from = env.CONTACT_FROM_EMAIL || 'TAS Website <onboarding@resend.dev>'

  const rows: [string, string][] = [
    ['Name', data.name],
    ['Email', data.email],
    ['Company', data.company || '—'],
    ['Phone', data.phone || '—'],
    ['Sent from', site],
  ]
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\n${data.message}`
  const html = `
    <table cellpadding="4" style="font-family:sans-serif;font-size:14px">
      ${rows.map(([k, v]) => `<tr><td style="color:#5b6486">${k}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`).join('')}
    </table>
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(data.message)}</p>`

  const { error } = await new Resend(env.RESEND_API_KEY).emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `Website inquiry from ${data.name}${data.company ? ` (${data.company})` : ''}`,
    text,
    html,
  })

  if (error) {
    console.error('Contact form: Resend error', error)
    return {
      status: 502,
      body: { ok: false, error: "Your message couldn't be sent. Please try again in a moment." },
    }
  }
  return { status: 200, body: { ok: true } }
}
