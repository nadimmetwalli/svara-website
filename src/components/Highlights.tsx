import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { useT } from '../hooks/useT'
import type { TranslationKey } from '../i18n'

/* Apple's "Get the highlights": large swipeable slides on native
   scroll-snap. Autoplays every 6 s while on screen, with the active
   dot filling as a progress bar. Any interaction pauses it; so does
   prefers-reduced-motion (then it never starts). */

const SLIDE_MS = 6000

function useReducedMotion() {
  const [reduce] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  return reduce
}

export default function Highlights() {
  const { t } = useT()
  const reduce = useReducedMotion()
  const track = useRef<HTMLDivElement>(null)
  const [idx, setIdx] = useState(0)
  const [playing, setPlaying] = useState(!reduce)
  const [inView, setInView] = useState(false)

  const questions: TranslationKey[] = ['hl.q1', 'hl.q2', 'hl.q3', 'hl.q4', 'hl.q5', 'hl.q6', 'hl.q7']

  const slides: { cls?: string; lead: ReactNode; rest: string; vis: ReactNode }[] = [
    {
      cls: 'hl-1', lead: t('hl.s1a'), rest: t('hl.s1b'),
      vis: <><div className="clock">24/7</div><div className="clock-sub">{t('hl.s1sub')}</div></>,
    },
    {
      lead: t('hl.s2a'), rest: t('hl.s2b'),
      vis: <div className="lang-cloud">{questions.map((q, i) => <span key={q} className={i === 0 ? 'on' : undefined}>{t(q)}</span>)}</div>,
    },
    {
      lead: t('hl.s4a'), rest: t('hl.s4b'),
      vis: <div className="ticket"><small>{t('ticket.new')}</small><b>{t('ticket.room')}</b><span className="ok">{t('ticket.link')}</span></div>,
    },
    {
      lead: t('hl.s5a'), rest: t('hl.s5b'),
      vis: (
        <ol className="flow">
          <li>{t('hl.t1')}<small translate="no">SVARA</small></li>
          <li className="hot">{t('hl.t2')}<small>{t('hl.t2s')}</small></li>
          <li>{t('hl.t3')}<small>{t('hl.t3s')}</small></li>
        </ol>
      ),
    },
    {
      cls: 'hl-4', lead: <span translate="no">SVARA Automate.</span>, rest: t('hl.s6b'),
      vis: (
        <ol className="flow">
          <li>{t('hl.a1')}<small>{t('hl.a1s')}</small></li>
          <li className="hot"><span translate="no">SVARA Automate</span><small>{t('hl.a2s')}</small></li>
          <li>{t('hl.a3')}<small>{t('hl.a3s')}</small></li>
        </ol>
      ),
    },
  ]
  const last = slides.length - 1

  const go = useCallback((i: number) => {
    const el = track.current
    if (!el) return
    const items = el.children as HTMLCollectionOf<HTMLElement>
    const target = items[Math.max(0, Math.min(items.length - 1, i))]
    el.scrollTo({ left: target.offsetLeft - items[0].offsetLeft, behavior: reduce ? 'auto' : 'smooth' })
  }, [reduce])

  // Which slide is showing (scroll-snap decides; we just observe).
  useEffect(() => {
    const el = track.current
    if (!el) return
    const items = [...el.children]
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting && e.intersectionRatio > 0.6) setIdx(items.indexOf(e.target)) })
    }, { root: el, threshold: [0.6] })
    items.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  // Only autoplay while the carousel is on screen.
  useEffect(() => {
    const el = track.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!playing || !inView) return
    const timer = window.setTimeout(() => go(idx === last ? 0 : idx + 1), SLIDE_MS)
    return () => window.clearTimeout(timer)
  }, [idx, playing, inView, last, go])

  return (
    <section className="sec" id="ulevaade" aria-labelledby="hl-h" style={{ paddingTop: 40 }}>
      <div className="wide sec-head"><h2 className="headline" id="hl-h">{t('hl.title')}</h2></div>
      <div className="hl-track" ref={track} tabIndex={0} aria-label={t('hl.aria')} onPointerDown={() => setPlaying(false)}>
        {slides.map((s, i) => (
          <article key={i} className={`hl${s.cls ? ' ' + s.cls : ''}`} aria-roledescription={t('hl.slide')} aria-label={`${i + 1} / ${slides.length}`}>
            <p>{s.lead} <span>{s.rest}</span></p>
            <div className="hl-vis">{s.vis}</div>
          </article>
        ))}
      </div>
      <div className={`hl-ctrl${playing && inView ? ' auto' : ''}`}>
        <button className="arrow" type="button" aria-label={t('hl.prev')} disabled={idx === 0} onClick={() => { setPlaying(false); go(idx - 1) }}>‹</button>
        <div className="dots" role="group" aria-label={t('hl.pick')}>
          {slides.map((_, i) => (
            <button
              key={i === idx ? `on-${idx}-${playing && inView}` : i}
              type="button"
              aria-label={`${t('hl.slide')} ${i + 1}`}
              aria-current={i === idx}
              onClick={() => { setPlaying(false); go(i) }}
            />
          ))}
        </div>
        <button className="arrow" type="button" aria-label={t('hl.next')} disabled={idx === last} onClick={() => { setPlaying(false); go(idx + 1) }}>›</button>
        {!reduce && (
          <button className="arrow pp" type="button" aria-label={playing ? t('hl.pause') : t('hl.play')} onClick={() => setPlaying((p) => !p)}>
            {playing ? '❚❚' : '▶'}
          </button>
        )}
      </div>
    </section>
  )
}
