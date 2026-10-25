import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'
import { company, externalSites } from '../content.ts'
import { Close, Menu } from './Icons.tsx'

const currentYear = new Date().getFullYear()

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/automation', label: 'Automation' },
  { to: '/quality', label: 'Quality' },
]

function Brand() {
  return (
    <Link to="/" className="brand" aria-label={`${company.name} home`}>
      <img src="/images/brand/tas-logo.webp" alt="TAS" width={70} height={44} />
      <span className="brand-text">
        Tooling &amp; Assembly
        <span>Solutions</span>
      </span>
    </Link>
  )
}

function Header() {
  const { pathname } = useLocation()
  // Remember which page the mobile menu was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null)
  const open = openOn === pathname

  return (
    <header className={`site-header${open ? ' is-open' : ''}`}>
      <div className="container header-inner">
        <Brand />
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          {open ? <Close size={24} /> : <Menu size={24} />}
        </button>
        <nav id="site-nav" className="site-nav" aria-label="Main">
          <ul>
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
          </ul>
          <Link to="/contact" className="btn btn-primary btn-sm">
            Contact →
          </Link>
        </nav>
      </div>
    </header>
  )
}

// Styled like a drawing's title block (DESIGN.md §6).
function Footer() {
  return (
    <footer className="site-footer sheet">
      <div className="container">
        <div className="title-block">
          <div className="tb-cell tb-company">
            <span className="tb-label">Company</span>
            <span className="tb-brand">
              <img src="/images/brand/tas-logo.webp" alt="" width={56} height={35} />
              <span className="tb-value tb-name">{company.name}</span>
            </span>
            <span className="tb-note">
              Precision machining and automated assembly machines since {company.founded}.
            </span>
          </div>
          <div className="tb-cell">
            <span className="tb-label">Pages</span>
            <ul className="tb-links">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="tb-cell">
            <span className="tb-label">Sister companies</span>
            <ul className="tb-links">
              {[externalSites.dreamTeam, externalSites.products].map((site) => (
                <li key={site.href}>
                  <a href={site.href} target="_blank" rel="noreferrer">
                    {site.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
            <span>DWG TAS-{company.founded} · Rev {currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

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
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
