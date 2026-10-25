import { Link } from 'react-router'
import type { Machine } from '../content.ts'
import Figure from './Figure.tsx'

export default function MachineCard({ machine, n }: { machine: Machine; n?: number }) {
  const rate = machine.specs.find((s) => s.label === 'Production rate')?.value
  return (
    <Link to={`/automation/${machine.slug}`} className="machine-card" aria-label={machine.name}>
      <Figure
        src={machine.image}
        alt={`${machine.name} machine`}
        n={n}
        caption={machine.name}
        meta={rate}
      />
      <span className="machine-card-cta" aria-hidden="true">
        View specs →
      </span>
    </Link>
  )
}
