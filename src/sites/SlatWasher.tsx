import DimensionLine from '../components/DimensionLine.tsx'
import Figure from '../components/Figure.tsx'
import { company, externalSites, slatWasher } from '../content.ts'
import SisterLayout from './SisterLayout.tsx'

// slatwasher.com
export default function SlatWasher() {
  return (
    <SisterLayout
      logo="/images/brand/tas-logo.webp"
      name={slatWasher.name}
      note={`A Tooling & Assembly Solutions product. ${slatWasher.patent}.`}
      anchors={[
        { label: 'The machine', href: '#machine' },
        { label: 'Specifications', href: '#specs' },
        { label: 'Modes', href: '#modes' },
      ]}
      sibling={externalSites.dreamTeam}
      rev={`DWG SW-${slatWasher.patent.replace(/\D/g, '')}`}
      cta={{
        label: 'Request a quote',
        title: 'Interested in a Slat Washer?',
        body: `Talk to the ${company.name} team about your filling line.`,
      }}
    >
      <title>{`${slatWasher.name} | ${company.name}`}</title>

      <section className="sheet hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="label label-dark">
              Product · {slatWasher.patent}
            </p>
            <h1>{slatWasher.name}</h1>
            <p className="hero-lead">{slatWasher.lead}</p>
            <DimensionLine value='15" – 42"' />
            <div className="hero-actions">
              <a href="#specs" className="btn btn-primary">
                See specifications →
              </a>
              <a href={`${externalSites.tas.href}contact`} className="btn btn-outline-light">
                Get in touch
              </a>
            </div>
          </div>
          <Figure
            src="/images/slatwasher/slat-washer-machine.jpg"
            alt="Stainless steel Slat Washer machine"
            n={1}
            caption="Slat Washer"
            meta="Stainless"
            ratio="8 / 5"
            onDark
            eager
            className="plate-small"
          />
        </div>
      </section>

      <div className="spec-strip-wrap">
        <div className="container">
          <dl className="spec-strip">
            {slatWasher.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <section className="section" id="machine">
        <div className="container split">
          <div>
            <p className="label">01 / The machine</p>
            <h2 className="section-title">Cleaner slats, less cross contamination</h2>
          </div>
          <div className="stack">
            <p className="lead">{slatWasher.intro}</p>
            {slatWasher.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-grid" id="specs">
        <div className="container feature">
          <div className="feature-text">
            <p className="label">02 / Specifications</p>
            <h2 className="section-title">Built for washdown</h2>
            <dl className="spec-table spec-table-spaced">
              {slatWasher.specs.map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Figure
            src="/images/slatwasher/slats.jpg"
            alt="Filling-line slats loaded in the Slat Washer carousel"
            n={2}
            caption="Slats in carousel"
            meta="72 per cycle"
            ratio="8 / 5"
          />
        </div>
      </section>

      <section className="section sheet" id="modes">
        <div className="container">
          <p className="label label-dark">03 / Modes of operation</p>
          <h2 className="section-title">Four modes, one hour</h2>
          <ol className="process-grid process-grid-4">
            {slatWasher.modes.map((mode, i) => (
              <li key={mode} className="process-cell">
                <span className="label label-dark">Mode {String(i + 1).padStart(2, '0')}</span>
                <h3>{mode}</h3>
              </li>
            ))}
          </ol>
          <p className="sheet-note">Optional USP rinse available.</p>
        </div>
      </section>
    </SisterLayout>
  )
}
