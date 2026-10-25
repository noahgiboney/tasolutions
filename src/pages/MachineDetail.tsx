import { Link, useParams } from 'react-router'
import MachineCard from '../components/MachineCard.tsx'
import { ArrowLeft } from '../components/Icons.tsx'
import { company, machines } from '../content.ts'
import NotFound from './NotFound.tsx'

export default function MachineDetail() {
  const { slug } = useParams()
  const machine = machines.find((m) => m.slug === slug)
  if (!machine) return <NotFound />

  const others = machines.filter((m) => m.slug !== machine.slug)

  return (
    <>
      <title>{`${machine.name} | ${company.name}`}</title>

      <section className="machine-hero">
        <div className="container">
          <Link to="/automation" className="back-link">
            <ArrowLeft size={16} /> All machines
          </Link>
          <p className="eyebrow">Automation project</p>
          <h1>{machine.name}</h1>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container machine-layout">
          <figure className="machine-photo">
            <img src={machine.image} alt={`${machine.name} machine`} />
          </figure>

          <div className="spec-card">
            <h2>Specifications</h2>
            <dl>
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

          <div className="product-card">
            <h2>The product</h2>
            <img src={machine.productImage} alt={`Product assembled by the ${machine.name} machine`} />
          </div>
        </div>
      </section>

      <section className="section section-steel">
        <div className="container">
          <p className="eyebrow">Keep exploring</p>
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
