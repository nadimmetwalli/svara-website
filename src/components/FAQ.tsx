import { useT } from '../hooks/useT'
import type { TranslationKey } from '../i18n'

const QA: [TranslationKey, TranslationKey][] = [
  ['faq.q1', 'faq.a1'],
  ['faq.q2', 'faq.a2'],
  ['faq.q3', 'faq.a3'],
  ['faq.q4', 'faq.a4'],
  ['faq.q5', 'faq.a5'],
  ['faq.q6', 'faq.a6'],
  ['faq.q7', 'faq.a7'],
]

/* Native <details>: keyboard and screen-reader support for free. */
export default function FAQ() {
  const { t } = useT()
  return (
    <section className="sec" id="kkk" aria-labelledby="faq-h">
      <div className="wrap">
        <div className="sec-head center"><h2 className="headline" id="faq-h">{t('faq.title')}</h2></div>
        <div className="faq">
          {QA.map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary>{t(q)}</summary>
              <p>{t(a)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
