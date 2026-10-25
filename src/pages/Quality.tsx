import Figure from '../components/Figure.tsx'
import PageHero from '../components/PageHero.tsx'
import { company, quality } from '../content.ts'
import { CallToAction } from './Home.tsx'

export default function Quality() {
  return (
    <>
      <title>{`Quality | ${company.name}`}</title>
      <PageHero
        sheet="04"
        label="Quality"
        title="Quality"
        meta={['Brown & Sharpe CNC CMM', 'PC-DMIS', 'First article inspection']}
      />

      <section className="section">
        <div className="container feature">
          <div className="feature-text">
            <p className="label">01 / Quality department</p>
            <h2 className="section-title">Certified for material and dimensional correctness</h2>
            {quality.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="figure-pair">
            <Figure
              src="/images/quality/cmm.jpg"
              alt="Brown & Sharpe CNC coordinate measuring machine"
              n={1}
              caption="CNC CMM"
              ratio="4 / 5"
            />
            <Figure
              src="/images/quality/cmm-probe.jpg"
              alt="CMM probe measuring a part"
              n={2}
              caption="CMM probe"
              ratio="8 / 5"
            />
          </div>
        </div>
        <div className="container">
          <dl className="spec-strip spec-strip-3">
            {quality.highlights.map((h) => (
              <div key={h.value}>
                <dt>{h.label}</dt>
                <dd>{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section-grid">
        <div className="container">
          <p className="label">02 / Documents</p>
          <h2 className="section-title">Quality paperwork</h2>
          <ul className="doc-list">
            {quality.documents.map((d, i) => (
              <li key={d.href}>
                <a href={d.href} target="_blank" rel="noreferrer" className="doc-row">
                  <span className="doc-tag">PDF</span>
                  <span className="doc-text">
                    <span className="label">Doc {String(i + 1).padStart(2, '0')}</span>
                    <strong>{d.title}</strong>
                    <span>{d.body}</span>
                  </span>
                  <span className="doc-open">Open →</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
