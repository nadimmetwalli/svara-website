import { useT } from '../hooks/useT'
import type { TranslationKey } from '../i18n'
import Link from './Link'

/* How to start. The last step is the free pilot, so it carries the
   "0 €" and the way to the pricing page. */
export function Steps() {
  const { t, lang } = useT()
  const steps: [TranslationKey, TranslationKey][] = [['steps.s1h', 'steps.s1p'], ['steps.s2h', 'steps.s2p'], ['steps.s3h', 'steps.s3p']]
  return (
    <section className="sec" id="kuidas" aria-labelledby="how-h" style={{ background: '#0e0c15' }}>
      <div className="wrap">
        <div className="sec-head center"><h2 className="headline" id="how-h">{t('steps.title')}</h2></div>
        <ol className="steps">
          {steps.map(([h, p], i) => (
            <li key={h}>
              <h3>{t(h)}</h3>
              <p>{t(p)}</p>
              {i === steps.length - 1 && (
                <div className="step-price">
                  <b className="big-grad">{lang === 'et' ? '0 €' : '€0'}</b>
                  <Link className="more" href="/hinnad">{t('steps.prices')}<span className="chev" aria-hidden="true">›</span></Link>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
