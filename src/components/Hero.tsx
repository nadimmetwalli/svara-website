import mascot from '../assets/brand/mascot.webp'
import { HERO_SHOT } from '../content/site'
import { useT } from '../hooks/useT'
import HeroField from './HeroField'
import Link from './Link'

/* Frame.io-style split hero: the promise on the left, the real
   product on the right (the Juhtimiskeskus screenshot from the
   Näidishotell demo account), with the mascot on one corner and a
   floating "call in progress" waveform on the other. */

const WAVE_BARS = 40

export default function Hero() {
  const { t } = useT()
  return (
    <section className="hero" id="top">
      <HeroField />
      <div className="hero-wide hero-grid">
        <div className="hero-copy">
          <p className="intro rise rise-1">{t('hero.tagline')}</p>
          <h1 className="display rise rise-1">
            {t('hero.title1')} <span className="q">{t('hero.title2')}</span>
          </h1>
          <p className="body-lg rise rise-2">{t('hero.lead')}</p>
          <div className="cta-row rise rise-3">
            <Link className="pill pill-light" href="/#demo">{t('nav.bookDemo')}</Link>
            <Link className="more" href="/#kuula">{t('hero.listen')}<span className="chev" aria-hidden="true">›</span></Link>
          </div>
        </div>
        <div className="hero-visual rise rise-4">
          <img className="mascot" src={mascot} alt="" width={150} height={148} />
          <figure className="app app-shot">
            <img src={HERO_SHOT} alt={t('hero.shotAlt')} width={2400} height={1500} fetchPriority="high" />
          </figure>
          <div className="live-call" aria-hidden="true">
            <div className="live-head">
              <span className="dot" />
              <span>{t('hero.liveLabel')}</span>
              <span className="lang-tag">{t('hero.liveLang')}</span>
            </div>
            <div className="wave">
              {Array.from({ length: WAVE_BARS }, (_, i) => (
                <i key={i} style={{ animationDelay: `${(i % 11) * 0.12}s` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
