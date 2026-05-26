import { Link } from 'react-router-dom'
import logoSvg from '../assets/logo.svg'
import { ROUTES } from '../routes'

const PRODUCT_LINKS = [
  { to: ROUTES.product, label: 'Features' },
  { to: ROUTES.integrations, label: 'Integrations' },
  { to: ROUTES.howItWorks, label: 'How It Works' },
  { to: ROUTES.pricing, label: 'Pricing' },
  { to: ROUTES.faq, label: 'FAQ' },
]

const EARLY_ACCESS_LINKS = [
  { to: ROUTES.earlyAccess, label: 'Founding Hotels' },
  { to: ROUTES.demo, label: 'Book a Demo' },
  { to: ROUTES.demo, label: 'Contact Sales' },
]

const COMPANY_LINKS = [
  { href: 'https://www.linkedin.com/company/ai-svara/', label: 'LinkedIn', external: true },
  { to: ROUTES.demo, label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to={ROUTES.home} className="nav-logo footer-logo">
              <div className="logo-mark">
                <img src={logoSvg} alt="SVARA" width={18} height={18} />
              </div>
              <span>SVARA</span>
            </Link>
            <p className="footer-tagline">The AI voice concierge built for hospitality.</p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/ai-svara/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx={4} cy={4} r={2} />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              {PRODUCT_LINKS.map(({ to, label }) => (
                <li key={label}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Early Access</h4>
            <ul>
              {EARLY_ACCESS_LINKS.map(({ to, label }) => (
                <li key={label}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {COMPANY_LINKS.map(({ href, to, label, external }) => (
                <li key={label}>
                  {external ? (
                    <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
                  ) : (
                    <Link to={to!}>{label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-legal">
          <p>SVARA TECHNOLOGIES OÜ · Registry code: 17453177 · Harju maakond, Tallinn, Kesklinna linnaosa, Narva mnt 2-62, 10117, Estonia</p>
          <p>
            <a href="mailto:info@svara-ai.com">info@svara-ai.com</a>
            {' · '}
            <a href="tel:+37256983182">+372 5698 3182</a>
          </p>
        </div>

        <div className="footer-bottom">
          <p>© 2026 SVARA TECHNOLOGIES OÜ. All rights reserved.</p>
          <p>Built for hospitality. Powered by AI.</p>
        </div>
      </div>
    </footer>
  )
}
