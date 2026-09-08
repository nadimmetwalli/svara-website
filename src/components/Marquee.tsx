import { useT } from '../hooks/useT'
import type { TranslationKey } from '../i18n'

const LANGUAGES: TranslationKey[] = [
  'lang.english', 'lang.finnish', 'lang.estonian', 'lang.swedish', 'lang.norwegian',
  'lang.german', 'lang.french', 'lang.spanish', 'lang.portuguese', 'lang.italian',
  'lang.dutch', 'lang.polish', 'lang.russian', 'lang.japanese', 'lang.mandarin',
  'lang.arabic', 'lang.korean', 'lang.turkish', 'lang.hindi', 'lang.greek',
]

const PROPERTY_TYPES: TranslationKey[] = [
  'prop.boutique', 'prop.restaurants', 'prop.city', 'prop.spa', 'prop.spaResorts',
  'prop.airport', 'prop.luxury', 'prop.vacation', 'prop.bnb', 'prop.serviced',
  'prop.hostels', 'prop.conference', 'prop.eco', 'prop.golf', 'prop.design',
  'prop.heritage',
]

function MarqueeRow({ items, reverse = false }: { items: TranslationKey[]; reverse?: boolean }) {
  const { t } = useT()
  const doubled = [...items, ...items]
  return (
    <div className="marquee-track">
      <div className={`marquee-inner${reverse ? ' marquee-inner-reverse' : ''}`}>
        {doubled.map((key, i) => (
          <span key={i}>
            {i > 0 && <span className="mq-sep"> · </span>}
            {t(key)}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  const { t } = useT()
  return (
    <section className="marquee-section">
      <p className="marquee-label">{t('marquee.languages')}</p>
      <MarqueeRow items={LANGUAGES} />
      <p className="marquee-label marquee-label-2">{t('marquee.properties')}</p>
      <MarqueeRow items={PROPERTY_TYPES} reverse />
    </section>
  )
}
