import type { ReactNode } from 'react'
import { company } from '../content.ts'

const currentYear = new Date().getFullYear()

type Props = {
  logo: string
  name: string
  note: string
  /** Two link columns, e.g. Pages and Sister companies. */
  columns: { label: string; links: ReactNode }[]
  /** Right side of the bottom row, like a drawing revision note. */
  rev: string
}

// Shared footer styled like a drawing's title block (DESIGN.md §6).
// The copyright year comes from the visitor's clock, so it's always current.
export default function SiteFooter({ logo, name, note, columns, rev }: Props) {
  return (
    <footer className="site-footer sheet">
      <div className="container">
        <div className="title-block">
          <div className="tb-cell tb-company">
            <span className="tb-label">Company</span>
            <span className="tb-brand">
              <img src={logo} alt="" width={56} height={35} />
              <span className="tb-value tb-name">{name}</span>
            </span>
            <span className="tb-note">{note}</span>
          </div>
          {columns.map((col) => (
            <div className="tb-cell" key={col.label}>
              <span className="tb-label">{col.label}</span>
              <ul className="tb-links">{col.links}</ul>
            </div>
          ))}
          <div className="tb-cell">
            <span className="tb-label">Location</span>
            <span className="tb-value">{company.location}</span>
          </div>
          <div className="tb-cell">
            <span className="tb-label">Phone</span>
            <a className="tb-value" href={company.phoneHref}>
              {company.phone}
            </a>
          </div>
          <div className="tb-cell">
            <span className="tb-label">Email</span>
            <a className="tb-value" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </div>
          <div className="tb-cell tb-rev">
            <span>
              © {currentYear} {company.name}
            </span>
            <span>
              {rev} · Rev {currentYear}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/** A footer link to another site, opened in a new tab. */
export function ExternalItem({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer">
        {label} ↗
      </a>
    </li>
  )
}
