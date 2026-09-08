import { useEffect, useState } from 'react'
import logoSvg from '../assets/logo.svg'
import { useT } from '../hooks/useT'
import type { TranslationKey } from '../i18n'
import LanguageSwitch from './LanguageSwitch'

const NAV_LINKS: { href: string; key: TranslationKey }[] = [
  { href: '#features', key: 'nav.product' },
  { href: '#how-it-works', key: 'nav.how' },
  { href: '#testimonials', key: 'nav.earlyAccess' },
  { href: '#integrations', key: 'nav.integrations' },
  { href: '#faq', key: 'nav.faq' },
]

export default function Navbar() {
  const { t } = useT()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#') return
    const target = document.querySelector(href)
    if (!target) return
    e.preventDefault()
    const top = target.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-pill">
        <a href="/" className="nav-logo">
          <div className="logo-mark">
            <img src={logoSvg} alt="SVARA" width={18} height={18} />
          </div>
          <span>SVARA AI</span>
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map(({ href, key }) => (
            <li key={href}>
              <a href={href} onClick={(e) => handleAnchorClick(e, href)}>{t(key)}</a>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <LanguageSwitch />
          <a href="#demo" className="btn-ghost" onClick={(e) => handleAnchorClick(e, '#demo')}>{t('nav.contactSales')}</a>
          <a href="#demo" className="btn-primary nav-btn" onClick={(e) => handleAnchorClick(e, '#demo')}>{t('nav.bookDemo')}</a>
        </div>

        <button
          className="hamburger"
          id="hamburger"
          aria-label={t('nav.menu')}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          {NAV_LINKS.map(({ href, key }) => (
            <li key={href}>
              <a href={href} onClick={(e) => handleAnchorClick(e, href)}>{t(key)}</a>
            </li>
          ))}
        </ul>
        <div className="mobile-cta">
          <LanguageSwitch />
          <a href="#demo" className="btn-ghost-full" onClick={(e) => handleAnchorClick(e, '#demo')}>{t('nav.contactSales')}</a>
          <a href="#demo" className="btn-primary btn-full" onClick={(e) => handleAnchorClick(e, '#demo')}>{t('nav.bookDemo')}</a>
        </div>
      </div>
    </nav>
  )
}
