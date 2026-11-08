import PageHero from '../components/PageHero.tsx'
import PageMeta from '../components/PageMeta.tsx'
import { privacy } from '../content.ts'
import { tasPages } from '../seo.ts'

// Shared by all three sites; the sister sites link here from their footers.
export default function Privacy() {
  return (
    <>
      <PageMeta {...tasPages.privacy} />
      <PageHero
        sheet="06"
        label="Privacy"
        title="Privacy Policy"
        meta={[`Updated ${privacy.updated}`, 'tasolutions.com', 'slatwasher.com', 'automationdreamteam.com']}
      >
        <p>{privacy.lead}</p>
      </PageHero>

      <section className="section">
        <div className="container legal">
          {privacy.sections.map((s, i) => (
            <div className="split legal-row" key={s.title}>
              <div>
                <p className="label">{String(i + 1).padStart(2, '0')} / Policy</p>
                <h2 className="legal-title">{s.title}</h2>
              </div>
              <div className="stack">
                {s.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
