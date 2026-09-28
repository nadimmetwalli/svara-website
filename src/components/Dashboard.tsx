import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { DASHBOARD_SHOTS } from '../content/site'
import { useT } from '../hooks/useT'
import type { TranslationKey } from '../i18n'

/* "Kõik ühes vaates": the Frame.io move. One big screenshot on a
   paper mount, switched with an Apple segmented control. Renders
   nothing if DASHBOARD_SHOTS (src/content/site.ts) is empty. */

const TABS: [TranslationKey, TranslationKey][] = [
  ['dash.tab1', 'dash.cap1'],
  ['dash.tab2', 'dash.cap2'],
  ['dash.tab3', 'dash.cap3'],
]

export default function Dashboard() {
  const { t } = useT()
  const [tab, setTab] = useState(0)
  const [knob, setKnob] = useState({ x: 0, w: 0 })
  const btns = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const place = () => {
      const b = btns.current[tab]
      if (b) setKnob({ x: b.offsetLeft - 3, w: b.offsetWidth })
    }
    place()
    window.addEventListener('resize', place)
    return () => window.removeEventListener('resize', place)
  }, [tab, t])

  if (DASHBOARD_SHOTS.length === 0) return null
  const tabs = TABS.slice(0, DASHBOARD_SHOTS.length)

  const onKey = (e: KeyboardEvent, i: number) => {
    const n = tabs.length
    const next = e.key === 'ArrowRight' ? (i + 1) % n : e.key === 'ArrowLeft' ? (i + n - 1) % n : -1
    if (next < 0) return
    e.preventDefault()
    setTab(next)
    btns.current[next]?.focus()
  }

  return (
    <section className="sec center" aria-labelledby="dash-h">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 32 }}>
          <h2 className="headline" id="dash-h">{t('dash.title')}</h2>
          <p className="body-lg">{t('dash.sub')}</p>
        </div>
        <div className="seg" role="tablist" aria-label={t('dash.aria')}>
          <span className="knob" aria-hidden="true" style={{ width: knob.w, transform: `translateX(${knob.x}px)` }} />
          {tabs.map(([label], i) => (
            <button
              key={label}
              ref={(el) => { btns.current[i] = el }}
              role="tab"
              id={`dash-tab-${i}`}
              aria-controls="dash-panel"
              aria-selected={tab === i}
              tabIndex={tab === i ? 0 : -1}
              onPointerDown={() => setTab(i)}
              onClick={() => setTab(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              {t(label)}
            </button>
          ))}
        </div>
      </div>
      <div className="wide" style={{ maxWidth: 1120 }}>
        <div className="mount">
          <div className="screen shot" role="tabpanel" id="dash-panel" aria-labelledby={`dash-tab-${tab}`}>
            <img src={DASHBOARD_SHOTS[tab]} alt={t(tabs[tab][1])} width={2400} height={1500} loading="lazy" decoding="async" />
          </div>
        </div>
        <p className="cap" aria-live="polite">{t(tabs[tab][1])}</p>
      </div>
    </section>
  )
}
