import { useEffect, type ReactNode } from 'react'
import CallToAction from '../components/CallToAction.tsx'
import SiteFooter, { ExternalItem } from '../components/SiteFooter.tsx'
import SiteHeader, { Brand } from '../components/SiteHeader.tsx'
import { company, externalSites } from '../content.ts'
import NotFound from '../pages/NotFound.tsx'

const contactHref = `${externalSites.tas.href}contact`

type Props = {
  logo: string
  name: string
  note: string
  /** In-page anchor links for the header, e.g. [{ label: 'Specs', href: '#specs' }]. */
  anchors: { label: string; href: string }[]
  /** The other sister site, linked in the footer. */
  sibling: { label: string; href: string }
  rev: string
  cta: { label: string; title: string; body: string }
  children: ReactNode
}

// Shared shell for slatwasher.com and automationdreamteam.com: same header,
// footer and CTA as tasolutions.com, but contact goes to the TAS site.
export default function SisterLayout({ logo, name, note, anchors, sibling, rev, cta, children }: Props) {
  // These are one-page sites: any other path gets the error page. Keep the
  // query so ?site= previews still work from the error page's links.
  const { pathname, search } = window.location
  const onHome = pathname === '/'
  const homeHref = `/${search}`
  const links = onHome ? anchors : anchors.map((a) => ({ ...a, href: `${homeHref}${a.href}` }))

  // Arriving with a #section (e.g. from the error page): the browser looks for
  // it before React has rendered, so scroll to it once the page exists.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
  }, [])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader
        brand={<Brand logo={logo} logoAlt="" name={name} sub={`By ${company.shortName}`} />}
        links={
          <>
            {links.map((a) => (
              <li key={a.href}>
                <a href={a.href}>{a.label}</a>
              </li>
            ))}
            <li>
              <a href={externalSites.tas.href} target="_blank" rel="noreferrer">
                TAS home ↗
              </a>
            </li>
          </>
        }
        cta={
          <a href={contactHref} className="btn btn-primary btn-sm">
            Contact →
          </a>
        }
      />
      <main id="main" className="sister-main">
        {onHome ? (
          children
        ) : (
          <NotFound
            homeHref={homeHref}
            pages={[
              ...links,
              { label: 'Tooling & Assembly Solutions', href: externalSites.tas.href },
              { label: 'Contact', href: contactHref },
            ]}
            plainLinks
          />
        )}
        <CallToAction
          {...cta}
          contact={
            <a href={contactHref} className="btn btn-white">
              Contact TAS →
            </a>
          }
        />
      </main>
      <SiteFooter
        logo={logo}
        name={name}
        note={note}
        columns={[
          {
            label: 'On this page',
            links: (
              <>
                {links.map((a) => (
                  <li key={a.href}>
                    <a href={a.href}>{a.label}</a>
                  </li>
                ))}
              </>
            ),
          },
          {
            label: 'Our sites',
            links: (
              <>
                <ExternalItem {...externalSites.tas} />
                <ExternalItem {...sibling} />
              </>
            ),
          },
        ]}
        rev={rev}
      />
    </>
  )
}
