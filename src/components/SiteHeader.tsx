import { useState, type MouseEvent, type ReactNode } from 'react'
import { Close, Menu } from './Icons.tsx'

type Props = {
  /** Logo + wordmark, already wrapped in a link. */
  brand: ReactNode
  /** <li> items for the nav list. */
  links: ReactNode
  /** Primary action on the right (one .btn-primary). */
  cta: ReactNode
}

// Shared header for all three sites (DESIGN.md §6, "Header").
export default function SiteHeader({ brand, links, cta }: Props) {
  const [open, setOpen] = useState(false)

  // Close the mobile menu when any link inside it is used.
  const closeOnLink = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest('a')) setOpen(false)
  }

  return (
    <header className={`site-header${open ? ' is-open' : ''}`}>
      <div className="container header-inner">
        {brand}
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Close size={24} /> : <Menu size={24} />}
        </button>
        <nav id="site-nav" className="site-nav" aria-label="Main" onClick={closeOnLink}>
          <ul>{links}</ul>
          {cta}
        </nav>
      </div>
    </header>
  )
}

type BrandProps = {
  logo: string
  logoAlt: string
  name: string
  sub: string
  /** Wraps the logo + text; lets the TAS site use a router <Link>. */
  wrap?: (children: ReactNode) => ReactNode
  href?: string
}

export function Brand({ logo, logoAlt, name, sub, wrap, href = '/' }: BrandProps) {
  const inner = (
    <>
      <img src={logo} alt={logoAlt} width={70} height={44} />
      <span className="brand-text">
        {name}
        <span>{sub}</span>
      </span>
    </>
  )
  return wrap ? (
    wrap(inner)
  ) : (
    <a href={href} className="brand" aria-label={`${name} ${sub} home`}>
      {inner}
    </a>
  )
}
