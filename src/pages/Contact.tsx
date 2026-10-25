import ContactForm from '../components/ContactForm.tsx'
import Figure from '../components/Figure.tsx'
import PageHero from '../components/PageHero.tsx'
import { Mail, Phone } from '../components/Icons.tsx'
import { company, externalSites } from '../content.ts'

const methods = [
  { icon: Phone, label: 'Phone', value: company.phone, href: company.phoneHref },
  { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
]

export default function Contact() {
  return (
    <>
      <title>{`Contact Us | ${company.name}`}</title>
      <PageHero
        sheet="05"
        label="Contact"
        title="Contact Us"
        meta={[company.phone, company.email]}
      />

      <section className="section">
        <div className="container">
          <p className="label">01 / Get in touch</p>
          <h2 className="section-title">We'd like to hear about your project</h2>
          <ul className="contact-grid">
            {methods.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a href={href} className="contact-cell">
                  <span className="contact-icon">
                    <Icon size={22} />
                  </span>
                  <span className="label">{label}</span>
                  <span className="contact-value">{value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-grid" id="message">
        <div className="container split">
          <div>
            <p className="label">02 / Send a message</p>
            <h2 className="section-title">Tell us about your project</h2>
            <p className="lead form-intro">
              Drawings, quantities, timelines: send what you have and we'll get back to you.
            </p>
          </div>
          <div className="form-panel">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="label">03 / Our companies</p>
          <h2 className="section-title">Two shops, one team</h2>
          <div className="company-grid">
            <div className="company">
              <Figure
                src="/images/brand/tas-logo.webp"
                alt="Tooling & Assembly Solutions logo"
                n={1}
                caption={company.name}
                fit="contain"
                ratio="16 / 9"
              />
              <p>Precision machining and automation machine building.</p>
            </div>
            <a
              className="company company-link"
              href={externalSites.dreamTeam.href}
              target="_blank"
              rel="noreferrer"
            >
              <Figure
                src="/images/brand/automation-dreamteam-logo.webp"
                alt="Automation Dreamteam logo"
                n={2}
                caption={`${externalSites.dreamTeam.label} ↗`}
                fit="contain"
                ratio="16 / 9"
              />
              <p>State-of-the-art automated machines and systems.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
