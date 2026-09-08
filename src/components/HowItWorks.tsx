import { Fragment } from 'react'
import { useT } from '../hooks/useT'
import type { TranslationKey } from '../i18n'

interface Step {
  num: string
  icon: React.ReactNode
  titleKey: TranslationKey
  descKey: TranslationKey
}

const STEPS: Step[] = [
  {
    num: '01',
    icon: (
      <svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.22 2.38 2 2 0 012.2 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6" />
      </svg>
    ),
    titleKey: 'how.s1.title',
    descKey: 'how.s1.desc',
  },
  {
    num: '02',
    icon: (
      <svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    titleKey: 'how.s2.title',
    descKey: 'how.s2.desc',
  },
  {
    num: '03',
    icon: (
      <svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <rect x={2} y={5} width={20} height={14} rx={2} /><path d="M2 10h20" />
      </svg>
    ),
    titleKey: 'how.s3.title',
    descKey: 'how.s3.desc',
  },
]

export default function HowItWorks() {
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
    <section className="how-section" id="how-it-works">
      <div className="container">
        <div className="how-header">
          <div>
            <div className="section-tag">{t('how.tag')}</div>
            <h2 className="section-h2">{t('how.title1')}<br />{t('how.title2')}</h2>
            <p className="section-sub">{t('how.sub')}</p>
          </div>
          <a href="#demo" className="btn-primary btn-lg how-cta" onClick={handleAnchorClick}>
            {t('how.cta')}
          </a>
        </div>

        <div className="steps-row">
          {STEPS.map((step, i) => (
            // Fragment carries the key — the step and its connector line
            // are siblings in the same list.
            <Fragment key={step.num}>
              <div className="step fade-up">
                <div className="step-num">{step.num}</div>
                <div className="step-img-wrap">{step.icon}</div>
                <h3>{t(step.titleKey)}</h3>
                <p>{t(step.descKey)}</p>
              </div>
              {i < STEPS.length - 1 && <div className="step-line" />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
