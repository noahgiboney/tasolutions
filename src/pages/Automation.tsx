import Figure from '../components/Figure.tsx'
import MachineCard from '../components/MachineCard.tsx'
import PageHero from '../components/PageHero.tsx'
import { automation, company, machines } from '../content.ts'
import { CallToAction } from './Home.tsx'

export default function Automation() {
  return (
    <>
      <title>{`Automation | ${company.name}`}</title>
      <PageHero
        sheet="03"
        label="Automation"
        title="Automation"
        meta={['Custom machine building', 'SolidWorks + Cosmos F.E.A.', 'Allen Bradley · Festo']}
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="label">01 / Our machines</p>
            <h2 className="section-title">Engineered for the product they build</h2>
            <div className="badge">
              <img src="/images/brand/solidworks.jpg" alt="SolidWorks" width={110} height={49} />
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
            {machines.map((m, i) => (
              <li key={m.slug}>
                <MachineCard machine={m} n={i + 1} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-grid">
        <div className="container">
          <p className="label">02 / Our process</p>
          <h2 className="section-title">How a machine comes together</h2>
          <ol className="steps">
            {automation.steps.map((step, i) => (
              <li key={step.title} className="step">
                <Figure
                  src={step.image}
                  alt={step.alt}
                  n={machines.length + i + 1}
                  caption={step.title}
                  fit={step.fit}
                />
                <div className="step-text">
                  <span className="label">
                    Step {String(i + 1).padStart(2, '0')}
                  </span>
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
