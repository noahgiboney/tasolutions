import Figure from '../components/Figure.tsx'
import PageHero from '../components/PageHero.tsx'
import { company, externalSites, story } from '../content.ts'
import { CallToAction } from './Home.tsx'

export default function OurStory() {
  return (
    <>
      <title>{`Our Story | ${company.name}`}</title>
      <PageHero
        sheet="02"
        label="Our story"
        title="Our Story"
        meta={[`Est. ${company.founded}`, company.location, '40 yrs machine building']}
      />

      <section className="section">
        <div className="container">
          <figure className="mission">
            <figcaption className="label">Mission statement</figcaption>
            <blockquote>
              <p>“{story.mission}”</p>
            </blockquote>
          </figure>
        </div>
      </section>

      <section className="section section-grid">
        <div className="container feature">
          <div className="feature-text">
            <p className="label">01 / Who we are</p>
            <h2 className="section-title">Our Story</h2>
            {story.story.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <Figure
            src="/images/brand/tas-logo.webp"
            alt="Tooling & Assembly Solutions logo"
            n={1}
            caption="Tooling & Assembly Solutions"
            meta={`Est. ${company.founded}`}
            fit="contain"
            ratio="1 / 1"
          />
        </div>
      </section>

      <section className="section">
        <div className="container feature feature-reverse">
          <div className="feature-text">
            <p className="label">02 / Sister company</p>
            <h2 className="section-title">Our Dream</h2>
            {story.dream.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <a
              className="btn btn-outline"
              href={externalSites.dreamTeam.href}
              target="_blank"
              rel="noreferrer"
            >
              Go to Automation Dream Team ↗
            </a>
          </div>
          <Figure
            src="/images/brand/automation-dreamteam-logo.webp"
            alt="Automation Dreamteam logo"
            n={2}
            caption="Automation Dream Team"
            fit="contain"
            ratio="1 / 1"
          />
        </div>
      </section>

      <CallToAction />
    </>
  )
}
