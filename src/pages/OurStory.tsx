import PageHero from '../components/PageHero.tsx'
import { ExternalLink } from '../components/Icons.tsx'
import { company, externalSites, story } from '../content.ts'
import { CallToAction } from './Home.tsx'

export default function OurStory() {
  return (
    <>
      <title>{`Our Story | ${company.name}`}</title>
      <PageHero eyebrow={`Since ${company.founded}`} title="Our Story" image="/images/banners/ourstory.webp" />

      <section className="section">
        <div className="container">
          <figure className="mission">
            <p className="eyebrow">Mission statement</p>
            <blockquote>
              <p>“{story.mission}”</p>
            </blockquote>
          </figure>
        </div>
      </section>

      <section className="section section-steel">
        <div className="container feature">
          <div className="feature-text">
            <p className="eyebrow">Who we are</p>
            <h2 className="section-title">Our Story</h2>
            {story.story.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="logo-panel">
            <img src="/images/brand/tas-logo.webp" alt="TAS logo" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature feature-reverse">
          <div className="feature-text">
            <p className="eyebrow">Sister company</p>
            <h2 className="section-title">Our Dream</h2>
            {story.dream.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <a
              className="btn btn-navy"
              href={externalSites.dreamTeam.href}
              target="_blank"
              rel="noreferrer"
            >
              Go to Automation Dream Team <ExternalLink size={16} />
            </a>
          </div>
          <div className="logo-panel">
            <img
              src="/images/brand/automation-dreamteam-logo.webp"
              alt="Automation Dreamteam logo"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
