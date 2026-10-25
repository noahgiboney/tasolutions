import type { ReactNode } from 'react'

type Props = {
  /** Sheet number shown in the drawing metadata, e.g. "03". */
  sheet: string
  label: string
  title: string
  meta?: string[]
  children?: ReactNode
}

// Navy drawing-sheet page header (DESIGN.md §6, "Page header"). No photos.
export default function PageHero({ sheet, label, title, meta = [], children }: Props) {
  return (
    <section className="sheet page-hero">
      <div className="container page-hero-inner">
        <p className="label label-dark">
          Sheet {sheet} · {label}
        </p>
        <h1>{title}</h1>
        {children && <div className="page-hero-lead">{children}</div>}
      </div>
      {meta.length > 0 && (
        <div className="sheet-meta">
          <div className="container sheet-meta-row">
            {meta.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
