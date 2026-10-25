import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'
import { company, externalSites } from '../content.ts'
import { Close, ExternalLink, Mail, MapPin, Menu, Phone } from './Icons.tsx'

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
      <img src="/images/brand/tas-logo.webp" alt="" width={64} height={40} />
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
  const setOpen = (next: (o: boolean) => boolean) => setOpenOn(next(open) ? pathname : null)

  return (
    <header className={`site-header${open ? ' is-open' : ''}`}>
      <div className="flag-stripe" aria-hidden="true" />
      <div className="container header-inner">
        <Brand />
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
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
                Products <ExternalLink size={14} />
              </a>
            </li>
          </ul>
          <Link to="/contact" className="btn btn-red btn-sm">
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>
            Precision machining and custom automated assembly machines, built in {company.location}{' '}
            since {company.founded}.
          </p>
        </div>
        <div>
          <h2 className="footer-heading">Pages</h2>
          <ul className="footer-links">
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
        <div>
          <h2 className="footer-heading">Our companies</h2>
          <ul className="footer-links">
            {[externalSites.dreamTeam, externalSites.products].map((site) => (
              <li key={site.href}>
                <a href={site.href} target="_blank" rel="noreferrer">
                  {site.label} <ExternalLink size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">Get in touch</h2>
          <ul className="footer-links footer-contact">
            <li>
              <MapPin size={16} /> {company.location}
            </li>
            <li>
              <Phone size={16} /> <a href={company.phoneHref}>{company.phone}</a>
            </li>
            <li>
              <Mail size={16} /> <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {currentYear} {company.name}. All rights reserved.
        </p>
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
