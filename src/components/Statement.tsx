import { useEffect, useRef, useState } from 'react'
import { useT } from '../hooks/useT'

/* One paragraph that lights up word by word as you scroll through
   it (Apple's AirPods-page device). The section is 200vh tall with
   the text pinned in the middle; progress comes from an
   IntersectionObserver with fine thresholds, not a scroll listener.
   With reduced motion the text is simply white and static. */

const THRESHOLDS = Array.from({ length: 101 }, (_, i) => i / 100)

export default function Statement() {
  const { t } = useT()
  const ref = useRef<HTMLElement>(null)
  const [reduce] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [lit, setLit] = useState(0)
  const words = t('statement.text').split(' ')

  useEffect(() => {
    const el = ref.current
    if (!el || reduce) return
    const io = new IntersectionObserver(() => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const prog = Math.min(1, Math.max(0, (vh * 0.55 - r.top) / (r.height - vh * 0.6)))
      setLit(Math.round(prog * words.length))
    }, { threshold: THRESHOLDS })
    io.observe(el)
    return () => io.disconnect()
  }, [reduce, words.length])

  return (
    <section ref={ref} className={`statement${reduce ? '' : ' js'}`} id="svara" aria-label={t('statement.label')}>
      <div className="inner wrap">
        {reduce ? (
          <p>{t('statement.text')}</p>
        ) : (
          <p aria-label={t('statement.text')}>
            {words.map((w, i) => (
              <span key={i} aria-hidden="true" className={`w${i < lit ? ' lit' : ''}`}>{w} </span>
            ))}
          </p>
        )}
      </div>
    </section>
  )
}
