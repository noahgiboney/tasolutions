import MachineCard from '../components/MachineCard.tsx'
import PageHero from '../components/PageHero.tsx'
import { automation, company, machines } from '../content.ts'
import { CallToAction } from './Home.tsx'

export default function Automation() {
  return (
    <>
      <title>{`Automation | ${company.name}`}</title>
      <PageHero eyebrow="Custom machine building" title="Automation" image="/images/banners/automation.webp" />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Our machines</p>
            <h2 className="section-title">Engineered for the product they build</h2>
            <div className="badge-card">
              <img src="/images/brand/solidworks.jpg" alt="SolidWorks" width={123} height={55} />
              <span>Designed and analyzed in SolidWorks with Cosmos F.E.A.</span>
            </div>
          </div>
          <div className="stack">
            {automation.intro.map((p) => (
              <p key={p.slice(0, 24)} className="lead">
                {p}
              </p>
            ))}
          </div>
        </div>
        <div className="container">
          <ul className="machine-grid">
            {machines.map((m) => (
              <li key={m.slug}>
                <MachineCard machine={m} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-steel">
        <div className="container">
          <p className="eyebrow">Our process</p>
          <h2 className="section-title">How a machine comes together</h2>
          <ol className="steps">
            {automation.steps.map((step, i) => (
              <li key={step.title} className="step">
                <div className={`step-media fit-${step.fit}`}>
                  <img src={step.image} alt={step.alt} loading="lazy" />
                </div>
                <div className="step-text">
                  <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  {step.body.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
