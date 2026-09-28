import { useEffect, useRef, useState } from 'react'
import { CALLS, SAMPLES, type CallLine } from '../content/calls'
import { TRY_IT_HREF } from '../content/site'
import { useT } from '../hooks/useT'
import { fill, type TranslationKey } from '../i18n'
import LanguagePicker from './LanguagePicker'
import Link from './Link'

/* "Kuula ise": pick a language, hear a call.
   - Full calls (et, en, fr, ru, ar): recorded conversations. With an
     `audio` file the real recording plays and the badge says
     "Terve kõne"; without one the transcript runs on a timer and the
     badge honestly says "Näidisvestlus".
   - Every other language: a short clip of SVARA alone, with the
     translation shown in the page language.
   - "Proovi ise" covers the rest: talk to SVARA yourself. */

type Selection = { kind: 'call'; code: string } | { kind: 'sample'; code: string }

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`
const TICK = 0.25

export default function Listen() {
  const { t, lang } = useT()
  const [sel, setSel] = useState<Selection>({ kind: 'call', code: 'et' })
  const [playing, setPlaying] = useState(false)
  const [pos, setPos] = useState(0)
  const [realLen, setRealLen] = useState<number | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  const call = sel.kind === 'call' ? CALLS.find((c) => c.code === sel.code)! : null
  const sample = sel.kind === 'sample' ? SAMPLES.find((s) => s.code === sel.code)! : null
  const audio = call?.audio ?? sample?.audio
  const len = realLen ?? call?.length ?? 15
  // Short samples: greeting first, then the answer, which starts a
  // little before the middle of the clip.
  const lines: CallLine[] = call?.lines ?? [
    { at: 0, who: 'svara', text: t('listen.sampleL1') },
    { at: Math.round(len * 0.42), who: 'svara', text: t('listen.sampleL2') },
  ]
  const nowIdx = playing || pos > 0 ? lines.reduce((acc, l, i) => (pos >= l.at ? i : acc), -1) : -1

  const title = call ? call.title : fill(t('listen.shortTitle'), { lang: t(`lang.${sel.code}` as TranslationKey) })
  const badge = sample ? 'listen.short' : audio ? 'listen.full' : 'listen.demo'

  // Timed transcript when there's no recording yet.
  const posRef = useRef(0)
  useEffect(() => {
    if (!playing || audio) return
    const id = window.setInterval(() => {
      const next = Math.min(len, posRef.current + TICK)
      posRef.current = next
      setPos(next)
      if (next >= len) setPlaying(false)
    }, TICK * 1000)
    return () => window.clearInterval(id)
  }, [playing, audio, len])

  const choose = (next: Selection) => {
    audioRef.current?.pause()
    setPlaying(false)
    posRef.current = 0
    setPos(0)
    setRealLen(null)
    setSel(next)
  }

  const toggle = () => {
    const a = audioRef.current
    if (playing) { a?.pause(); setPlaying(false); return }
    if (pos >= len) { posRef.current = 0; setPos(0) }
    if (a) { if (a.ended) a.currentTime = 0; void a.play() }
    setPlaying(true)
  }

  return (
    <section className="sec center" id="kuula" aria-labelledby="listen-h" style={{ background: '#0e0c15' }}>
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 32 }}>
          <h2 className="headline" id="listen-h">{t('listen.title')}</h2>
          <p className="body-lg">{t('listen.sub')}</p>
        </div>

        <div className="lang-pick">
          <div role="radiogroup" aria-label={t('listen.pick')} className="lang-radios">
            {CALLS.map((c) => (
              <button
                key={c.code}
                type="button"
                role="radio"
                lang={c.code}
                aria-checked={sel.kind === 'call' && sel.code === c.code}
                onClick={() => choose({ kind: 'call', code: c.code })}
              >
                {c.label}
              </button>
            ))}
          </div>
          <LanguagePicker
            selected={sel.kind === 'sample' ? sel.code : null}
            onPick={(code) => choose({ kind: 'sample', code })}
          />
        </div>

        <div className="player">
          <div className="player-top">
            <button className="play" type="button" onClick={toggle} aria-label={playing ? t('listen.pause') : t('listen.play')}>
              {playing ? '❚❚' : '▶'}
            </button>
            <div className="player-meta">
              <span lang={call ? call.code : lang} style={{ display: 'inline', color: 'var(--ink)', fontSize: 17, fontWeight: 600 }}>{title}</span>
              <span className={`kind${badge === 'listen.full' ? ' full' : ''}`}>{t(badge)}</span>
              <span>{fmt(Math.min(pos, len))} / {fmt(len)}</span>
            </div>
          </div>
          <div className="track" aria-hidden="true"><i style={{ width: `${Math.min(100, (pos / len) * 100)}%` }} /></div>
          <ol className="script" dir={call?.dir ?? 'ltr'} lang={call ? call.code : lang}>
            {lines.map((l, i) => (
              <li key={i} className={i === nowIdx ? 'now' : undefined}>
                <time>{fmt(l.at)}</time>
                <div><small>{l.who === 'svara' ? 'SVARA' : call?.guest}</small>{l.text}</div>
              </li>
            ))}
          </ol>
          {sample && <p className="sample-note">{t('listen.shortNote')}</p>}
          {audio && (
            <audio
              key={audio}
              ref={audioRef}
              src={audio}
              preload="metadata"
              onLoadedMetadata={(e) => setRealLen(e.currentTarget.duration)}
              onTimeUpdate={(e) => setPos(e.currentTarget.currentTime)}
              onEnded={() => setPlaying(false)}
            />
          )}
        </div>

        <div className="try">
          <div><b>{t('listen.tryH')}</b><p>{t('listen.tryP')}</p></div>
          <Link className="pill pill-light" href={TRY_IT_HREF}>{t('listen.tryCta')}</Link>
        </div>
      </div>
    </section>
  )
}
