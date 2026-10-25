import { Link, useParams } from 'react-router'
import Figure from '../components/Figure.tsx'
import MachineCard from '../components/MachineCard.tsx'
import { company, machines } from '../content.ts'
import NotFound from './NotFound.tsx'

export default function MachineDetail() {
  const { slug } = useParams()
  const index = machines.findIndex((m) => m.slug === slug)
  const machine = machines[index]
  if (!machine) return <NotFound />

  const others = machines.filter((m) => m.slug !== machine.slug)
  const sheet = `03.${index + 1}`
  const rate = machine.specs.find((s) => s.label === 'Production rate')?.value

  return (
    <>
      <title>{`${machine.name} | ${company.name}`}</title>

      <section className="sheet page-hero">
        <div className="container page-hero-inner">
          <Link to="/automation" className="back-link">
            ← All machines
          </Link>
          <p className="label label-dark">Sheet {sheet} · Automation project</p>
          <h1>{machine.name}</h1>
        </div>
        <div className="sheet-meta">
          <div className="container sheet-meta-row">
            {machine.specs
              .filter((s) => ['Production rate', 'Style', 'Controls'].includes(s.label))
              .map((s) => (
                <span key={s.label}>
                  {s.label}: {s.value}
                </span>
              ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container machine-layout">
          <Figure
            src={machine.image}
            alt={`${machine.name} machine`}
            n={1}
            caption={machine.name}
            meta={rate}
            className="machine-photo"
            eager
          />

          <div className="spec-panel">
            <p className="label">Specifications</p>
            <dl className="spec-table">
              <div>
                <dt>Project name</dt>
                <dd>{machine.name}</dd>
              </div>
              {machine.specs.map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="product-panel">
            <p className="label">The product</p>
            <Figure
              src={machine.productImage}
              alt={`Product assembled by the ${machine.name} machine`}
              n={2}
              caption="Finished product"
              ratio="8 / 5"
            />
          </div>
        </div>
      </section>

      <section className="section section-grid">
        <div className="container">
          <p className="label">Keep exploring</p>
          <h2 className="section-title">View our other machines</h2>
          <ul className="machine-grid machine-grid-4">
            {others.map((m) => (
              <li key={m.slug}>
                <MachineCard machine={m} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
