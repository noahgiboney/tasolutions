import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'
import { company, externalSites } from '../content.ts'
import SiteFooter, { ExternalItem } from './SiteFooter.tsx'
import SiteHeader, { Brand } from './SiteHeader.tsx'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/automation', label: 'Automation' },
  { to: '/quality', label: 'Quality' },
]

// Layout for the tasolutions.com site.
export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader
        brand={
          <Brand
            logo="/images/brand/tas-logo.webp"
            logoAlt="TAS"
            name="Tooling & Assembly"
            sub="Solutions"
            wrap={(inner) => (
              <Link to="/" className="brand" aria-label={`${company.name} home`}>
                {inner}
              </Link>
            )}
          />
        }
        links={
          <>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a href={externalSites.products.href} target="_blank" rel="noreferrer">
                Products ↗
              </a>
            </li>
          </>
        }
        cta={
          <Link to="/contact" className="btn btn-primary btn-sm">
            Contact →
          </Link>
        }
      />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter
        logo="/images/brand/tas-logo.webp"
        name={company.name}
        note={`Precision machining and automated assembly machines since ${company.founded}.`}
        columns={[
          {
            label: 'Pages',
            links: (
              <>
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </>
            ),
          },
          {
            label: 'Sister companies',
            links: (
              <>
                <ExternalItem {...externalSites.dreamTeam} />
                <ExternalItem {...externalSites.products} />
              </>
            ),
          },
        ]}
        rev={`DWG TAS-${company.founded}`}
      />
    </>
  )
}
