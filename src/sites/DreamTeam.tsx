import Figure from '../components/Figure.tsx'
import MachineCard from '../components/MachineCard.tsx'
import { company, dreamTeam, externalSites, machines } from '../content.ts'
import SisterLayout from './SisterLayout.tsx'

const tasBase = externalSites.tas.href.replace(/\/$/, '')

// automationdreamteam.com
export default function DreamTeam() {
  return (
    <SisterLayout
      logo="/images/brand/automation-dreamteam-logo.webp"
      name={dreamTeam.name}
      note={`The automation team at ${company.name}, building machines since ${company.founded}.`}
      anchors={[
        { label: 'The team', href: '#team' },
        { label: 'Machines', href: '#machines' },
      ]}
      sibling={externalSites.products}
      rev="DWG ADT-01"
      cta={{
        label: 'Start a project',
        title: 'Put the Dream Team on your next machine',
        body: 'Every job gets the same care in planning and processing.',
      }}
    >
      <title>{`${dreamTeam.name} | ${company.name}`}</title>

      <section className="sheet hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="label label-dark">Automation excellence · {company.location}</p>
            <h1>{dreamTeam.name}</h1>
            <p className="hero-lead">{dreamTeam.lead}</p>
            <div className="hero-actions">
              <a href="#machines" className="btn btn-primary">
                See our machines →
              </a>
              <a href={company.phoneHref} className="btn btn-outline-light">
                Call {company.phone}
              </a>
            </div>
          </div>
          <Figure
            src="/images/dreamteam/assembly-floor.webp"
            alt="Automated assembly lines on a clean room floor"
            n={1}
            caption="Assembly floor"
            meta="Clean room"
            onDark
            eager
          />
        </div>
      </section>

      <section className="section" id="team">
        <div className="container split">
          <div>
            <p className="label">01 / The Dream Team</p>
            <h2 className="section-title">Superior machinery takes a superior team</h2>
          </div>
          <div className="stack">
            {dreamTeam.body.map((p, i) => (
              <p key={p.slice(0, 24)} className={i === 0 ? 'lead' : undefined}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section sheet">
        <div className="container">
          <p className="label label-dark">02 / What makes the team</p>
          <h2 className="section-title">Hand selected, every part of it</h2>
          <ol className="process-grid process-grid-4">
            {dreamTeam.team.map((t, i) => (
              <li key={t.title} className="process-cell">
                <span className="label label-dark">Part {String(i + 1).padStart(2, '0')}</span>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-grid" id="machines">
        <div className="container">
          <p className="label">03 / Machines we've built</p>
          <h2 className="section-title">Automation projects</h2>
          <ul className="machine-grid">
            {machines.map((m, i) => (
              <li key={m.slug}>
                <MachineCard machine={m} n={i + 2} externalBase={tasBase} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SisterLayout>
  )
}
