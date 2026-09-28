import { useRef, useState } from 'react'
import { TRY_IT_HREF } from '../content/site'
import { FEATURED, RTL, VOICES } from '../content/voices'
import { useT } from '../hooks/useT'
import { fill, type TranslationKey } from '../i18n'
import LanguagePicker from './LanguagePicker'
import Link from './Link'

/* "Kuula ise": pick a language and hear SVARA answer the phone in it.
   Under the player: the exact script of the clip in its own language,
   sentence by sentence as it plays, and, when the clip isn't in the
   page language, a translation in small text below it. */

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`

/** Split into sentences and give each a start time proportional to its
    length: a good-enough follow-along for a single speaker. */
function timeline(text: string, len: number) {
  // Sentence ends in Latin, CJK, Greek (;), Arabic (؟) and Hindi (।) text.
  const parts = text.match(/[^.!?。！？;;؟।]+(?:[.!?。！？;;؟।]+|$)/g)?.map((p) => p.trim()).filter(Boolean) ?? [text]
  const total = parts.reduce((n, p) => n + p.length, 0)
  let acc = 0
  return parts.map((p) => {
    const at = (acc / total) * len
    acc += p.length
    return { at, text: p }
  })
}

export default function Listen() {
  const { t, lang } = useT()
  const [code, setCode] = useState('et')
  const [playing, setPlaying] = useState(false)
  const [pos, setPos] = useState(0)
  const [len, setLen] = useState(12)
  const audioRef = useRef<HTMLAudioElement>(null)

  const voice = VOICES.find((v) => v.code === code)!
  const langName = t(`lang.${code}` as TranslationKey)
  const lines = timeline(voice.text, len)
  const nowIdx = playing || pos > 0 ? lines.reduce((acc, l, i) => (pos >= l.at ? i : acc), -1) : -1
  const featured = FEATURED.some((f) => f.code === code)

  const choose = (next: string) => {
    audioRef.current?.pause()
    setPlaying(false)
    setPos(0)
    setCode(next)
  }

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (playing) { a.pause(); return }
    if (a.ended) a.currentTime = 0
    void a.play()
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
            {FEATURED.map((f) => (
              <button
                key={f.code}
                type="button"
                role="radio"
                lang={f.code}
                aria-checked={code === f.code}
                onClick={() => choose(f.code)}
              >
                {f.name}
              </button>
            ))}
          </div>
          <LanguagePicker selected={featured ? null : code} onPick={choose} />
        </div>

        <div className="player">
          <div className="player-top">
            <button className="play" type="button" onClick={toggle} aria-label={playing ? t('listen.pause') : t('listen.play')}>
              {playing ? '❚❚' : '▶'}
            </button>
            <div className="player-meta">
              <span style={{ display: 'inline', color: 'var(--ink)', fontSize: 17, fontWeight: 600 }}>
                {fill(t('listen.clipTitle'), { lang: langName })}
              </span>
              <span>{fmt(Math.min(pos, len))} / {fmt(len)}</span>
            </div>
          </div>
          <div className="track" aria-hidden="true"><i style={{ width: `${Math.min(100, (pos / len) * 100)}%` }} /></div>
          <ol className="script clip" lang={code} dir={RTL.has(code) ? 'rtl' : 'ltr'}>
            {lines.map((l, i) => (
              <li key={i} className={i === nowIdx ? 'now' : undefined}>{l.text}</li>
            ))}
          </ol>
          {code !== lang && (
            <p className="clip-trans" lang={lang}>
              <b>{t('listen.translation')}</b> {t(`listen.w.${voice.wording}` as TranslationKey)}
            </p>
          )}
          <audio
            key={voice.audio}
            ref={audioRef}
            src={voice.audio}
            preload="metadata"
            onLoadedMetadata={(e) => setLen(e.currentTarget.duration || 12)}
            onTimeUpdate={(e) => setPos(e.currentTarget.currentTime)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => { setPlaying(false); setPos(len) }}
          />
        </div>

        <div className="try">
          <div><b>{t('listen.tryH')}</b><p>{t('listen.tryP')}</p></div>
          <Link className="pill pill-light" href={TRY_IT_HREF}>{t('listen.tryCta')}</Link>
        </div>
      </div>
    </section>
  )
}
