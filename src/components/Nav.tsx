import { useEffect, useState } from 'react'
import mark from '../assets/brand/mark-white.png'
import { useT } from '../hooks/useT'
import type { TranslationKey } from '../i18n'
import LanguageSwitch from './LanguageSwitch'
import Link from './Link'

/* Apple's product bar: name on the left, small links, one pill.
   On phones the links fold into a sheet under a chevron. */
const LINKS: { href: string; key: TranslationKey }[] = [
  { href: '/#ulevaade', key: 'nav.overview' },
  { href: '/#miks', key: 'nav.why' },
  { href: '/hinnad', key: 'nav.pricing' },
  { href: '/#kkk', key: 'nav.faq' },
  { href: '/meist', key: 'nav.about' },
]

export default function Nav() {
  const { t } = useT()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`lnav${open ? ' open' : ''}`}>
      <div className="wide lnav-bar">
        <Link className="lnav-title" href="/" translate="no">
          <span className="lnav-mark" aria-hidden="true"><img src={mark} alt="" width={16} height={17} /></span>
          SVARA AI
        </Link>
        <div className="lnav-end">
          <nav className="lnav-links" aria-label={t('nav.main')}>
            {LINKS.map((l) => <Link key={l.href} href={l.href}>{t(l.key)}</Link>)}
          </nav>
          <LanguageSwitch />
          <Link className="pill pill-light pill-sm" href="/#demo">{t('nav.bookDemo')}</Link>
          <button
            className="lnav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="lnav-sheet"
            aria-label={open ? t('nav.menuClose') : t('nav.menuOpen')}
            onClick={() => setOpen((o) => !o)}
          >
            <span aria-hidden="true">⌄</span>
          </button>
        </div>
      </div>
      <div className="lnav-sheet" id="lnav-sheet" hidden={!open}>
        <nav aria-label={t('nav.mobile')} onClick={(e) => { if ((e.target as HTMLElement).closest('a')) setOpen(false) }}>
          {LINKS.map((l) => <Link key={l.href} href={l.href}>{t(l.key)}</Link>)}
          <Link href="/#demo">{t('nav.bookDemo')}</Link>
        </nav>
      </div>
    </header>
  )
}
