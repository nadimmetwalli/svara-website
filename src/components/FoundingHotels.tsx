import { useT } from '../hooks/useT'
import type { TranslationKey } from '../i18n'

interface Card {
  id: string
  icon: React.ReactNode
  titleKey: TranslationKey
  descKey: TranslationKey
}

const CARDS: Card[] = [
  {
    id: 'price-lock',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x={3} y={11} width={18} height={11} rx={2} /><path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    titleKey: 'found.c1.title',
    descKey: 'found.c1.desc',
  },
  {
    id: 'onboarding',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    titleKey: 'found.c2.title',
    descKey: 'found.c2.desc',
  },
  {
    id: 'roadmap',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx={12} cy={12} r={10} /><line x1={12} y1={8} x2={12} y2={12} /><line x1={12} y1={16} x2={12.01} y2={16} />
      </svg>
    ),
    titleKey: 'found.c3.title',
    descKey: 'found.c3.desc',
  },
  {
    id: 'first-mover',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx={12} cy={12} r={10} /><line x1={2} y1={12} x2={22} y2={12} />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    titleKey: 'found.c4.title',
    descKey: 'found.c4.desc',
  },
]

export default function FoundingHotels() {
  const { t } = useT()

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (!href) return
    const target = document.querySelector(href)
    if (!target) return
    e.preventDefault()
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
  }

  return (
    <section className="founding-section" id="testimonials">
      <div className="container">
        <div className="founding-inner fade-up">
          <div className="founding-eyebrow">
            <span className="founding-badge">{t('found.badge')}</span>
            <span className="founding-spots-label">
              <span className="founding-count">12</span> {t('found.spots')}
            </span>
          </div>
          <h2 className="section-h2 founding-h2">{t('found.title')}</h2>
          <p className="section-sub founding-sub">{t('found.sub')}</p>

          <div className="founding-grid">
            {CARDS.map((card) => (
              <div key={card.id} className="founding-card">
                <div className="founding-icon-wrap">{card.icon}</div>
                <h3>{t(card.titleKey)}</h3>
                <p>{t(card.descKey)}</p>
              </div>
            ))}
          </div>

          <div className="founding-cta">
            <a href="#demo" className="btn-primary btn-lg" onClick={handleAnchorClick}>
              {t('found.cta')}
            </a>
            <p className="founding-note">{t('found.note')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
