import PageHero from '../components/PageHero.tsx'
import { ExternalLink, Mail, MapPin, Phone } from '../components/Icons.tsx'
import { company, externalSites } from '../content.ts'

const methods = [
  { icon: MapPin, label: 'Location', value: company.location, href: company.mapsHref, external: true },
  { icon: Phone, label: 'Phone', value: company.phone, href: company.phoneHref },
  { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
]

export default function Contact() {
  return (
    <>
      <title>{`Contact Us | ${company.name}`}</title>
      <PageHero eyebrow="Let's talk" title="Contact Us" image="/images/banners/contact.webp" />

      <section className="section">
        <div className="container">
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-title">We'd like to hear about your project</h2>
          <ul className="contact-grid">
            {methods.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className="contact-card"
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <span className="contact-icon">
                    <Icon size={24} />
                  </span>
                  <span className="contact-label">{label}</span>
                  <span className="contact-value">{value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-steel">
        <div className="container">
          <p className="eyebrow">Our companies</p>
          <h2 className="section-title">Two shops, one team</h2>
          <div className="company-grid">
            <div className="company-card">
              <img src="/images/brand/tas-logo.webp" alt="" loading="lazy" />
              <h3>{company.name}</h3>
              <p>Precision machining and automation machine building.</p>
            </div>
            <a
              className="company-card"
              href={externalSites.dreamTeam.href}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/brand/automation-dreamteam-logo.webp" alt="" loading="lazy" />
              <h3>
                {externalSites.dreamTeam.label} <ExternalLink size={16} />
              </h3>
              <p>State-of-the-art automated machines and systems.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
