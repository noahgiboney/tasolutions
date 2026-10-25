import type { ReactNode } from 'react'

type Props = {
  label?: string
  title?: string
  body?: string
  /** The "Contact us" button (.btn-white). The TAS site passes a router <Link>. */
  contact: ReactNode
}

// Flat red band (DESIGN.md §6, "Call to action").
export default function CallToAction({
  label = 'Request a quote',
  title = 'Have a project in mind?',
  body = 'Large or small, every job gets the same care in planning and processing.',
  contact,
}: Props) {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div>
          <p className="cta-label">{label}</p>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="cta-actions">
          {contact}
        </div>
      </div>
    </section>
  )
}
