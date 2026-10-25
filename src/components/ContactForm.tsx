import { useState, type FormEvent } from 'react'
import { detectSite } from '../site.ts'

type Status = 'idle' | 'sending' | 'sent' | 'error'
type Errors = Partial<Record<'name' | 'email' | 'message', string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(form: FormData): Errors {
  const errors: Errors = {}
  const get = (k: string) => String(form.get(k) ?? '').trim()
  if (!get('name')) errors.name = 'Enter your name'
  if (!get('email')) errors.email = 'Enter your email'
  else if (!EMAIL_RE.test(get('email'))) errors.email = 'Enter a valid email, like name@company.com'
  if (!get('message')) errors.message = 'Tell us a little about your project'
  return errors
}

// Sends to /api/contact, which emails the TAS inbox through Resend (DESIGN.md §6, "Contact form").
export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})
  const [serverError, setServerError] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formEl = e.currentTarget
    const form = new FormData(formEl)
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length) {
      formEl.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus()
      return
    }

    setStatus('sending')
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...Object.fromEntries(form), site: detectSite() }),
      })
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
      if (!res.ok || !data.ok) throw new Error(data.error || "Your message couldn't be sent.")
      setStatus('sent')
      formEl.reset()
    } catch (err) {
      setStatus('error')
      setServerError(err instanceof Error ? err.message : "Your message couldn't be sent.")
    }
  }

  const clearError = (key: keyof Errors) =>
    errors[key] && setErrors((prev) => ({ ...prev, [key]: undefined }))

  if (status === 'sent') {
    return (
      <div className="form-success" role="status">
        <p className="label">Message sent</p>
        <h3>Thanks, we'll be in touch soon.</h3>
        <p>We read every message and reply by email.</p>
        <button type="button" className="btn btn-outline" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <Field label="Name" name="name" autoComplete="name" required error={errors.name} onInput={() => clearError('name')} />
        <Field label="Company" name="company" autoComplete="organization" />
      </div>
      <div className="form-row">
        <Field label="Email" name="email" type="email" autoComplete="email" placeholder="name@company.com" required error={errors.email} onInput={() => clearError('email')} />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <Field label="Message" name="message" textarea required placeholder="What are you looking to build or machine?" error={errors.message} onInput={() => clearError('message')} />

      {/* Honeypot for bots: hidden from people and screen readers. */}
      <div className="form-trap" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === 'error' && (
        <p className="form-error" role="alert">
          {serverError}
        </p>
      )}

      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message →'}
        </button>
      </div>
    </form>
  )
}

type FieldProps = {
  label: string
  name: string
  type?: string
  autoComplete?: string
  placeholder?: string
  required?: boolean
  textarea?: boolean
  error?: string
  onInput?: () => void
}

function Field({ label, name, type = 'text', autoComplete, placeholder, required, textarea, error, onInput }: FieldProps) {
  const id = `contact-${name}`
  const shared = {
    id,
    name,
    placeholder,
    autoComplete,
    onInput,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? `${id}-error` : undefined,
  }
  return (
    <div className={`field${error ? ' has-error' : ''}`}>
      <label htmlFor={id}>
        {label}
        {!required && <span className="field-optional"> (optional)</span>}
      </label>
      {textarea ? <textarea rows={6} maxLength={5000} {...shared} /> : <input type={type} {...shared} />}
      {error && (
        <span className="field-error" id={`${id}-error`}>
          {error}
        </span>
      )}
    </div>
  )
}
