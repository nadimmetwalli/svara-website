import { useT } from '../hooks/useT'
import type { TranslationKey } from '../i18n'

/* The page's one marquee: greetings looping slowly in two rows.
   Estonian is the white pill, Baltic and Nordic neighbours are
   lifted, everything else follows. Each row is rendered twice for a
   seamless loop; the copy is hidden from screen readers. Reduced
   motion shows a single static, wrapped list. */

type G = [greeting: string, code: string, tier?: 'home' | 'near']

const ROW1: G[] = [
  ['Tere', 'et', 'home'], ['Sveiki', 'lv', 'near'], ['Labas', 'lt', 'near'], ['Hei', 'fi', 'near'],
  ['Hej', 'sv', 'near'], ['Hej', 'da', 'near'], ['Hei', 'no', 'near'], ['Hello', 'en'],
  ['Здравствуйте', 'ru'], ['Guten Tag', 'de'], ['Dzień dobry', 'pl'],
]
const ROW2: G[] = [
  ['Bonjour', 'fr'], ['Hola', 'es'], ['Ciao', 'it'], ['Olá', 'pt'], ['Hallo', 'nl'], ['Γεια σας', 'el'],
  ['Merhaba', 'tr'], ['مرحبا', 'ar'], ['नमस्ते', 'hi'], ['你好', 'zh'], ['こんにちは', 'ja'], ['안녕하세요', 'ko'],
]

function Row({ items, rev }: { items: G[]; rev?: boolean }) {
  const { t } = useT()
  const list = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined}>
      {items.map(([g, code, tier]) => (
        <li key={code} className={tier}>
          <b lang={code} dir="auto">{g}</b><span>{t(`lang.${code}` as TranslationKey)}</span>
        </li>
      ))}
    </ul>
  )
  return <div className={`mq-row${rev ? ' rev' : ''}`}>{list(false)}{list(true)}</div>
}

export default function Languages() {
  const { t } = useT()
  return (
    <section className="langs-sec" id="keeled" aria-labelledby="lang-h" style={{ background: '#0e0c15' }}>
      <div className="wide langs-head">
        <h2 id="lang-h">{t('langs.title')}</h2>
        <p>{t('langs.sub')}</p>
      </div>
      <div className="mq" role="region" aria-label={t('langs.aria')}>
        <Row items={ROW1} />
        <Row items={ROW2} rev />
      </div>
    </section>
  )
}
