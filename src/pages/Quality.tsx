import PageHero from '../components/PageHero.tsx'
import { ArrowRight, FileText } from '../components/Icons.tsx'
import { company, quality } from '../content.ts'
import { CallToAction } from './Home.tsx'

export default function Quality() {
  return (
    <>
      <title>{`Quality | ${company.name}`}</title>
      <PageHero eyebrow="Inspection & certification" title="Quality" image="/images/banners/quality.webp" />

      <section className="section">
        <div className="container feature">
          <div className="feature-text">
            <p className="eyebrow">Quality department</p>
            <h2 className="section-title">Certified for material and dimensional correctness</h2>
            {quality.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="photo-pair">
            <img src="/images/quality/cmm.jpg" alt="Brown & Sharpe CNC coordinate measuring machine" loading="lazy" />
            <img src="/images/quality/cmm-probe.jpg" alt="CMM probe measuring a part" loading="lazy" />
          </div>
        </div>
        <div className="container">
          <dl className="highlights">
            {quality.highlights.map((h) => (
              <div key={h.value}>
                <dd>{h.value}</dd>
                <dt>{h.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section-steel">
        <div className="container">
          <p className="eyebrow">Documents</p>
          <h2 className="section-title">Quality paperwork</h2>
          <ul className="doc-grid">
            {quality.documents.map((d) => (
              <li key={d.href}>
                <a href={d.href} target="_blank" rel="noreferrer" className="doc-card">
                  <span className="doc-icon">
                    <FileText size={26} />
                  </span>
                  <span className="doc-text">
                    <strong>{d.title}</strong>
                    <span>{d.body}</span>
                  </span>
                  <span className="doc-open">
                    Open PDF <ArrowRight size={16} />
                  </span>
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
