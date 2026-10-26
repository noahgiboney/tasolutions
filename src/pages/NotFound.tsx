import { Link } from 'react-router'
import { company, notFound } from '../content.ts'

type PageLink = { label: string; href: string }

type Props = {
  homeHref?: string
  /** Pages to suggest. Defaults to the tasolutions.com pages. */
  pages?: PageLink[]
  /** The sister sites render outside React Router, so they use plain links. */
  plainLinks?: boolean
}

const tasPages: PageLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Automation', href: '/automation' },
  { label: 'Quality', href: '/quality' },
  { label: 'Contact', href: '/contact' },
]

// Shown for any address that isn't a page, on all three sites.
export default function NotFound({ homeHref = '/', pages = tasPages, plainLinks = false }: Props) {
  const go = (href: string, className: string | undefined, children: React.ReactNode) =>
    plainLinks || href.startsWith('http') ? (
      <a href={href} className={className}>
        {children}
      </a>
    ) : (
      <Link to={href} className={className}>
        {children}
      </Link>
    )

  return (
    <section className="sheet not-found">
      <title>{`Page not found | ${company.name}`}</title>
      <div className="container not-found-grid">
        <div>
          <p className="label label-dark">{notFound.label}</p>
          <h1>{notFound.title}</h1>
          <p className="page-hero-lead">{notFound.lead}</p>
          <p className="not-found-path">
            {notFound.pathLabel}: <span>{window.location.pathname}</span>
          </p>
          {go(homeHref, 'btn btn-primary', 'Back to home →')}
        </div>

        <div className="not-found-panel">
          <p className="not-found-code" aria-hidden="true">
            404
          </p>
          <p className="label label-dark">{notFound.linksLabel}</p>
          <ul className="not-found-links">
            {pages.map((p) => (
              <li key={p.href}>
                {go(
                  p.href,
                  undefined,
                  <>
                    {p.label}
                    <span aria-hidden="true">{p.href.startsWith('http') ? '↗' : '→'}</span>
                  </>,
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
