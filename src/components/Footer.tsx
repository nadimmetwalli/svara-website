import logoSvg from '../assets/logo.svg'
import { useT } from '../hooks/useT'
import type { TranslationKey } from '../i18n'

interface FooterLink {
  href: string
  key: TranslationKey
  external?: boolean
  label?: string
}

const PRODUCT_LINKS: FooterLink[] = [
  { href: '#features', key: 'footer.features' },
  { href: '#integrations', key: 'nav.integrations' },
  { href: '#how-it-works', key: 'nav.how' },
  { href: '#faq', key: 'nav.faq' },
]

const EARLY_ACCESS_LINKS: FooterLink[] = [
  { href: '#testimonials', key: 'footer.founding' },
  { href: '#demo', key: 'nav.bookDemo' },
  { href: '#demo', key: 'nav.contactSales' },
]

const COMPANY_LINKS: FooterLink[] = [
  // LinkedIn is a brand name — it stays untranslated in both languages.
  { href: 'https://www.linkedin.com/company/ai-svara/', key: 'footer.company', label: 'LinkedIn', external: true },
  { href: '#demo', key: 'footer.contact' },
]

export default function Footer() {
  const { t } = useT()

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (!href || href.startsWith('http')) return
    const target = document.querySelector(href)
    if (!target) return
    e.preventDefault()
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
  }

  const renderLinks = (links: FooterLink[]) =>
    links.map(({ href, key, external, label }) => (
      <li key={label ?? key}>
        <a href={href} onClick={handleAnchorClick} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {label ?? t(key)}
        </a>
      </li>
    ))

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
            <p className="footer-tagline">{t('footer.tagline')}</p>
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
            <h4>{t('footer.product')}</h4>
            <ul>{renderLinks(PRODUCT_LINKS)}</ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.early')}</h4>
            <ul>{renderLinks(EARLY_ACCESS_LINKS)}</ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.company')}</h4>
            <ul>{renderLinks(COMPANY_LINKS)}</ul>
          </div>
        </div>

        <div className="footer-legal">
          <p>{t('footer.legal')}</p>
          <p>
            <a href="mailto:info@svara-ai.com">info@svara-ai.com</a>
            {' · '}
            <a href="tel:+37256983182">+372 5698 3182</a>
          </p>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.rights')}</p>
          <p>{t('footer.builtFor')}</p>
        </div>
      </div>
    </footer>
  )
}
