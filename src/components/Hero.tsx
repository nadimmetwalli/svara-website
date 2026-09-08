import { useT } from '../hooks/useT'

export default function Hero() {
  const { t } = useT()

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (!href || href === '#') return
    const target = document.querySelector(href)
    if (!target) return
    e.preventDefault()
    const top = target.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
        <div className="hero-glow-3" />
        <div className="hero-noise" />
      </div>

      <div className="hero-center">
        <p className="hero-eyebrow">{t('hero.eyebrow')}</p>
        <h1 className="hero-h1">
          {t('hero.title1')}<br />{t('hero.title2')}<br /><em>{t('hero.title3')}</em>
        </h1>
      </div>

      <div className="hero-bottom">
        <div className="hero-bottom-inner">
          <div className="hero-bottom-left">
            <div className="hero-rating">
              <span className="rating-stars">★★★★★</span>
              <span className="rating-score">4.8</span>
              <span className="rating-source">Prototron</span>
            </div>
            <p className="hero-bottom-desc">{t('hero.desc')}</p>
          </div>
          <div className="hero-bottom-right">
            <a href="#demo" className="hero-demo-btn" onClick={handleAnchorClick}>
              <span>{t('hero.listen')}</span>
              <div className="demo-orb" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
