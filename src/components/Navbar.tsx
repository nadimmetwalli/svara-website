import { useEffect, useState } from 'react'
import logoSvg from '../assets/logo.svg'

const NAV_LINKS = [
  { href: '#features', label: 'Product' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#testimonials', label: 'Early Access' },
  { href: '#integrations', label: 'Integrations' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
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
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={(e) => handleAnchorClick(e, href)}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a href="#demo" className="btn-ghost" onClick={(e) => handleAnchorClick(e, '#demo')}>Contact Sales</a>
          <a href="#demo" className="btn-primary nav-btn" onClick={(e) => handleAnchorClick(e, '#demo')}>Book a Demo</a>
        </div>

        <button
          className="hamburger"
          id="hamburger"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={(e) => handleAnchorClick(e, href)}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="mobile-cta">
          <a href="#demo" className="btn-ghost-full" onClick={(e) => handleAnchorClick(e, '#demo')}>Contact Sales</a>
          <a href="#demo" className="btn-primary btn-full" onClick={(e) => handleAnchorClick(e, '#demo')}>Book a Demo</a>
        </div>
      </div>
    </nav>
  )
}
