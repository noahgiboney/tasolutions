import { Link } from 'react-router'
import { company } from '../content.ts'

export default function NotFound() {
  return (
    <section className="section not-found">
      <title>{`Page not found | ${company.name}`}</title>
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="section-title">We couldn't find that page</h1>
        <p className="lead">It may have moved when we rebuilt the site.</p>
        <Link to="/" className="btn btn-red">
          Back to home
        </Link>
      </div>
    </section>
  )
}
