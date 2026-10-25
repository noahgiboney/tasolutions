import { Link } from 'react-router'
import Carousel from '../components/Carousel.tsx'
import { ArrowRight, Phone } from '../components/Icons.tsx'
import { company, home } from '../content.ts'

export default function Home() {
  return (
    <>
      <title>{`${company.name} | Precision Machining & Automation`}</title>

      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow eyebrow-light">Precision machining · Custom automation</p>
          <h1>Tooling &amp; Assembly Solutions</h1>
          <p className="hero-lead">
            Machined parts and automated assembly machines for medical, aerospace, defense and
            automotive manufacturers. Built in {company.location} since {company.founded}.
          </p>
          <div className="hero-actions">
            <Link to="/automation" className="btn btn-red">
              See our machines <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-ghost-light">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        <dl className="stats">
          {home.stats.map((s) => (
            <div key={s.label} className="stat">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="section-title">{home.intro.title}</h2>
          </div>
          <p className="lead">{home.intro.body}</p>
        </div>
      </section>

      <section className="section section-steel">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Featured work</p>
              <h2 className="section-title">Parts &amp; machines we've built</h2>
            </div>
          </div>
          <Carousel label="Featured work">
            {home.work.map((item) => (
              <li key={item.title} className="work-card">
                <div className={`work-card-media fit-${item.fit}`}>
                  <img src={item.image} alt={item.title} loading="lazy" draggable={false} />
                </div>
                <div className="work-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <p className="eyebrow eyebrow-light">How we work</p>
          <h2 className="section-title">From drawing to installed equipment</h2>
          <ol className="process-grid">
            {home.process.map((step, i) => (
              <li key={step.title} className="process-card">
                <span className="process-num">{String(i + 1).padStart(2, '0')}</span>
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
          <h2>Have a project in mind?</h2>
          <p>Large or small, every job gets the same care in planning and processing.</p>
        </div>
        <div className="cta-actions">
          <a href={company.phoneHref} className="btn btn-white">
            <Phone size={18} /> {company.phone}
          </a>
          <Link to="/contact" className="btn btn-ghost-light">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
