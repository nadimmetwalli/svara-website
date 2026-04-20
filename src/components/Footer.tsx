import logoSvg from '../assets/logo.svg'

const PRODUCT_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#integrations', label: 'Integrations' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#faq', label: 'FAQ' },
]

const EARLY_ACCESS_LINKS = [
  { href: '#testimonials', label: 'Founding Hotels' },
  { href: '#demo', label: 'Book a Demo' },
  { href: '#demo', label: 'Contact Sales' },
]

const COMPANY_LINKS = [
  { href: 'https://www.linkedin.com/company/ai-svara/', label: 'LinkedIn', external: true },
  { href: '#demo', label: 'Contact' },
]

export default function Footer() {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (!href || href.startsWith('http')) return
    const target = document.querySelector(href)
    if (!target) return
    e.preventDefault()
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="nav-logo footer-logo">
              <div className="logo-mark">
                <img src={logoSvg} alt="SVARA" width={18} height={18} />
              </div>
              <span>SVARA</span>
            </a>
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
              {PRODUCT_LINKS.map(({ href, label }) => (
                <li key={label}><a href={href} onClick={handleAnchorClick}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Early Access</h4>
            <ul>
              {EARLY_ACCESS_LINKS.map(({ href, label }) => (
                <li key={label}><a href={href} onClick={handleAnchorClick}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {COMPANY_LINKS.map(({ href, label, external }) => (
                <li key={label}>
                  <a href={href} onClick={handleAnchorClick} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-legal">
          <p>SVARA TECHNOLOGIES OÜ · Registry code: 17234663 · Harju maakond, Tallinn, Kesklinna linnaosa, Narva mnt 2-62, 10117, Estonia</p>
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
