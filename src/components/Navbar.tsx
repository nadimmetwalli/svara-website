import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logoSvg from '../assets/logo.svg'
import { ROUTES } from '../routes'

const NAV_LINKS = [
  { to: ROUTES.product, label: 'Product' },
  { to: ROUTES.howItWorks, label: 'How It Works' },
  { to: ROUTES.earlyAccess, label: 'Early Access' },
  { to: ROUTES.integrations, label: 'Integrations' },
  { to: ROUTES.pricing, label: 'Pricing' },
  { to: ROUTES.faq, label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-pill">
        <Link to={ROUTES.home} className="nav-logo">
          <div className="logo-mark">
            <img src={logoSvg} alt="SVARA" width={18} height={18} />
          </div>
          <span>SVARA AI</span>
        </Link>

        <ul className="nav-links">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <Link to={ROUTES.demo} className="btn-ghost">Contact Sales</Link>
          <Link to={ROUTES.demo} className="btn-primary nav-btn">Book a Demo</Link>
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
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mobile-cta">
          <Link to={ROUTES.demo} className="btn-ghost-full">Contact Sales</Link>
          <Link to={ROUTES.demo} className="btn-primary btn-full">Book a Demo</Link>
        </div>
      </div>
    </nav>
  )
}
