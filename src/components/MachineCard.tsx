import { Link } from 'react-router'
import type { Machine } from '../content.ts'
import Figure from './Figure.tsx'

type Props = {
  machine: Machine
  n?: number
  /** Set on the sister sites to link to the machine page on tasolutions.com. */
  externalBase?: string
}

export default function MachineCard({ machine, n, externalBase }: Props) {
  const rate = machine.specs.find((s) => s.label === 'Production rate')?.value
  const path = `/automation/${machine.slug}`
  const inner = (
    <>
      <Figure
        src={machine.image}
        alt={`${machine.name} machine`}
        n={n}
        caption={machine.name}
        meta={rate}
      />
      <span className="machine-card-cta" aria-hidden="true">
        View specs {externalBase ? '↗' : '→'}
      </span>
    </>
  )

  return externalBase ? (
    <a
      href={`${externalBase}${path}`}
      className="machine-card"
      aria-label={machine.name}
      target="_blank"
      rel="noreferrer"
    >
      {inner}
    </a>
  ) : (
    <Link to={path} className="machine-card" aria-label={machine.name}>
      {inner}
    </Link>
  )
}
