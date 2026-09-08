import { useState } from 'react'
import { useT } from '../hooks/useT'
import type { TranslationKey } from '../i18n'

const FAQS: { q: TranslationKey; a: TranslationKey }[] = [
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q3', a: 'faq.a3' },
  { q: 'faq.q4', a: 'faq.a4' },
  { q: 'faq.q5', a: 'faq.a5' },
  { q: 'faq.q6', a: 'faq.a6' },
]

export default function FAQ() {
  const { t } = useT()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (!href) return
    const target = document.querySelector(href)
    if (!target) return
    e.preventDefault()
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
  }

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-left">
            <div className="section-tag">{t('faq.tag')}</div>
            <h2 className="section-h2">{t('faq.title')}</h2>
            <p className="section-sub">{t('faq.sub')}</p>
            <div className="faq-still">
              <p><strong>{t('faq.stillQ')}</strong></p>
              <p>{t('faq.stillA')}</p>
              <a href="#demo" className="btn-primary" style={{ marginTop: 16 }} onClick={handleAnchorClick}>
                {t('faq.stillCta')}
              </a>
            </div>
          </div>

          <div className="faq-right">
            {FAQS.map((item, i) => (
              <div key={item.q} className={`faq-item${openIndex === i ? ' open' : ''}`}>
                <button
                  className="faq-q"
                  aria-expanded={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {t(item.q)}
                  <span className="faq-arrow">↓</span>
                </button>
                <div className="faq-a">{t(item.a)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
