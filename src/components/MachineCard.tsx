import { Link } from 'react-router'
import type { Machine } from '../content.ts'
import { ArrowRight } from './Icons.tsx'

export default function MachineCard({ machine }: { machine: Machine }) {
  const rate = machine.specs.find((s) => s.label === 'Production rate')?.value
  return (
    <Link to={`/automation/${machine.slug}`} className="machine-card">
      <div className="machine-card-media">
        <img src={machine.image} alt={`${machine.name} machine`} loading="lazy" />
      </div>
      <div className="machine-card-body">
        <div>
          <h3>{machine.name}</h3>
          {rate && <p>{rate}</p>}
        </div>
        <span className="machine-card-arrow" aria-hidden="true">
          <ArrowRight size={18} />
        </span>
      </div>
    </Link>
  )
}
