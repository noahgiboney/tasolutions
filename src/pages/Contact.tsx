import ContactForm from '../components/ContactForm.tsx'
import Figure from '../components/Figure.tsx'
import PageHero from '../components/PageHero.tsx'
import { company, externalSites, ourSites } from '../content.ts'

export default function Contact() {
  return (
    <>
      <title>{`Contact Us | ${company.name}`}</title>
      <PageHero sheet="05" label="Contact" title="Contact Us" />

      <section className="section" id="message">
        <div className="container split">
          <div>
            <p className="label">01 / Send a message</p>
            <h2 className="section-title">Get in touch</h2>
            <p className="lead form-intro">Tell us about your project and we'll get back to you.</p>
          </div>
          <div className="form-panel">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section section-grid">
        <div className="container">
          <p className="label">02 / Our sites</p>
          <h2 className="section-title">More from TAS</h2>
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
              <p>{ourSites.tas}</p>
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
              <p>{ourSites.dreamTeam}</p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
