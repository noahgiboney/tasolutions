import type { ReactNode } from 'react'
import CallToAction from '../components/CallToAction.tsx'
import SiteFooter, { ExternalItem } from '../components/SiteFooter.tsx'
import SiteHeader, { Brand } from '../components/SiteHeader.tsx'
import { company, externalSites } from '../content.ts'

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
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader
        brand={<Brand logo={logo} logoAlt="" name={name} sub={`By ${company.shortName}`} />}
        links={
          <>
            {anchors.map((a) => (
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
      <main id="main">
        {children}
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
                {anchors.map((a) => (
                  <li key={a.href}>
                    <a href={a.href}>{a.label}</a>
                  </li>
                ))}
              </>
            ),
          },
          {
            label: 'Sister companies',
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
