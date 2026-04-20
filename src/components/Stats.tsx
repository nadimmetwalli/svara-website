import { useEffect, useRef } from 'react'

interface Stat {
  value: string
  unit?: string
  label: string
  desc: string
  count?: number
}

const STATS: Stat[] = [
  { value: '100', unit: '%', label: 'Call Answer Rate', desc: 'Zero missed calls, ever', count: 100 },
  { value: '<1', unit: 's', label: 'Response Time', desc: 'Instant, every single time' },
  { value: '20', unit: '+', label: 'Languages Supported', desc: 'Serve every guest natively', count: 20 },
  { value: '24/7', label: 'Always On', desc: 'No breaks, no holidays' },
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
      <div className="stat-label">{stat.label}</div>
      <div className="stat-desc">{stat.desc}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
