import { Link } from 'react-router'
import Carousel from '../components/Carousel.tsx'
import DimensionLine from '../components/DimensionLine.tsx'
import Figure from '../components/Figure.tsx'
import { company, home, story } from '../content.ts'

export default function Home() {
  return (
    <>
      <title>{`${company.name} | Precision Machining & Automation`}</title>

      <section className="sheet hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="label label-dark">
              DWG TAS-{company.founded} · {company.location}
            </p>
            <h1>{company.name}</h1>
            <p className="hero-lead">
              Precision machining and automated assembly machines for medical, aerospace, defense
              and automotive manufacturers.
            </p>
            <figure className="hero-mission">
              <figcaption className="label">Mission statement</figcaption>
              <blockquote>
                <p>“{story.mission}”</p>
              </blockquote>
            </figure>
            <DimensionLine value='±.0001"' />
            <div className="hero-actions">
              <Link to="/automation" className="btn btn-primary">
                See our machines →
              </Link>
              <a href={company.phoneHref} className="btn btn-outline-light">
                Call {company.phone}
              </a>
            </div>
          </div>
          <Figure
            src="/images/work/lyophilizing-machine.webp"
            alt="Lyophilizing machine built by TAS in a clean room"
            n={1}
            caption="Lyophilizing machine"
            meta="Clean room"
            onDark
            eager
          />
        </div>
      </section>

      <div className="spec-strip-wrap">
        <div className="container">
          <dl className="spec-strip">
            {home.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <section className="section">
        <div className="container split">
          <div>
            <p className="label">01 / What we do</p>
            <h2 className="section-title">{home.intro.title}</h2>
          </div>
          <p className="lead">{home.intro.body}</p>
        </div>
      </section>

      <section className="section section-grid">
        <div className="container">
          <p className="label">02 / Featured work</p>
          <h2 className="section-title">Parts and machines we've built</h2>
          <Carousel label="Featured work">
            {home.work.map((item, i) => (
              <li key={item.title} className="work-item">
                <Figure
                  src={item.image}
                  alt={item.title}
                  n={i + 2}
                  caption={item.title}
                  fit={item.fit}
                />
                <p className="work-body">{item.body}</p>
              </li>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="section sheet">
        <div className="container">
          <p className="label label-dark">03 / How we work</p>
          <h2 className="section-title">From drawing to installed equipment</h2>
          <ol className="process-grid">
            {home.process.map((step, i) => (
              <li key={step.title} className="process-cell">
                <span className="label label-dark">
                  Step {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CallToAction />
    </>
  )
}

export function CallToAction() {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div>
          <p className="cta-label">Request a quote</p>
          <h2>Have a project in mind?</h2>
          <p>Large or small, every job gets the same care in planning and processing.</p>
        </div>
        <div className="cta-actions">
          <a href={company.phoneHref} className="btn btn-white">
            Call {company.phone}
          </a>
          <Link to="/contact" className="btn btn-outline-light">
            Contact us →
          </Link>
        </div>
      </div>
    </section>
  )
}
