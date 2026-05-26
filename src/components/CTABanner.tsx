import { Link } from 'react-router-dom'
import { ROUTES } from '../routes'

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-inner fade-up">
          <h2>Ready to transform your guest experience?</h2>
          <p>Join hotels already using SVARA to deliver five-star service around the clock.</p>
          <div className="cta-actions">
            <Link to={ROUTES.demo} className="btn-white btn-lg">Book a Demo</Link>
            <Link to={ROUTES.demo} className="btn-outline-white btn-lg">Contact Sales</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
