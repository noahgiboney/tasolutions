import { Link } from 'react-router'
import { company } from '../content.ts'

export default function NotFound() {
  return (
    <section className="sheet page-hero not-found">
      <title>{`Page not found | ${company.name}`}</title>
      <div className="container page-hero-inner">
        <p className="label label-dark">Sheet 404 · Not found</p>
        <h1>We couldn't find that page</h1>
        <p className="page-hero-lead">It may have moved when we rebuilt the site.</p>
        <Link to="/" className="btn btn-primary">
          Back to home →
        </Link>
      </div>
    </section>
  )
}
