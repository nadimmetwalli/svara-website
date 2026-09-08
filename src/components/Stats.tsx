import { useEffect, useRef } from 'react'
import { useT } from '../hooks/useT'
import type { TranslationKey } from '../i18n'

interface Stat {
  id: string
  value: string
  unit?: string
  labelKey: TranslationKey
  descKey: TranslationKey
  count?: number
}

const STATS: Stat[] = [
  { id: 'answer', value: '100', unit: '%', labelKey: 'stats.answer.label', descKey: 'stats.answer.desc', count: 100 },
  { id: 'response', value: '<1', unit: 's', labelKey: 'stats.response.label', descKey: 'stats.response.desc' },
  { id: 'languages', value: '20', unit: '+', labelKey: 'stats.languages.label', descKey: 'stats.languages.desc', count: 20 },
  { id: 'always', value: '24/7', labelKey: 'stats.always.label', descKey: 'stats.always.desc' },
]

function animateCounter(el: HTMLElement, target: number) {
  const duration = 1600
  const start = performance.now()
  const step = (now: number) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    el.textContent = String(Math.floor(eased * target))
    if (progress < 1) requestAnimationFrame(step)
    else el.textContent = String(target)
  }
  requestAnimationFrame(step)
}

function StatCard({ stat }: { stat: Stat }) {
  const { t } = useT()
  const valRef = useRef<HTMLSpanElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!stat.count || !cardRef.current || !valRef.current) return
    const el = valRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounter(el, stat.count!)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [stat.count])

  return (
    <div className="stat-card fade-up" ref={cardRef}>
      <div className="stat-top">
        <span className={`stat-val${!stat.count ? ' stat-static' : ''}`} ref={valRef}>
          {stat.value}
        </span>
        {stat.unit && <span className="stat-unit">{stat.unit}</span>}
      </div>
      <div className="stat-label">{t(stat.labelKey)}</div>
      <div className="stat-desc">{t(stat.descKey)}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat) => (
            // Keyed on a stable id, not the label, so switching language
            // doesn't remount the card and replay the counter animation.
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
