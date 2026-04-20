import { useEffect, useRef, useState } from 'react'

const WAVEFORM_HEIGHTS = [35, 60, 80, 50, 90, 45, 70, 55, 85, 40, 75, 60, 95, 50, 70, 40, 65, 80, 45, 55]

function formatTime(seconds: number): string {
  if (!isFinite(seconds)) return '–:––'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressWrapRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onMeta = () => setDuration(audio.duration)
    const onTime = () => {
      setCurrentTime(audio.currentTime)
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0)
    }
    const onEnded = () => {
      setPlaying(false)
      setProgress(0)
      setCurrentTime(0)
    }

    audio.addEventListener('loadedmetadata', onMeta)
    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('ended', onEnded)
    return () => {
      audio.removeEventListener('loadedmetadata', onMeta)
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('ended', onEnded)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play()
      setPlaying(true)
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    if (!audio || !progressWrapRef.current) return
    const rect = progressWrapRef.current.getBoundingClientRect()
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration
  }

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (!href) return
    const target = document.querySelector(href)
    if (!target) return
    e.preventDefault()
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
  }

  return (
    <div className="player-card">
      <audio ref={audioRef} src="/demo-call-recording.mp3" preload="metadata" />
      <div className="player-header">Hear SVARA in Action</div>
      <div className="player-track">
        <div className="player-label">Real call recording · SVARA AI concierge</div>
        <div className="player-main">
          <button className="player-play-btn" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
            {playing ? (
              <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            )}
          </button>
          <div className="player-right">
            <div className={`player-waveform${playing ? ' playing' : ''}`}>
              {WAVEFORM_HEIGHTS.map((h, i) => (
                <div key={i} className="pw-bar" style={{ '--h': `${h}%` } as React.CSSProperties} />
              ))}
            </div>
            <div
              className="player-progress-wrap"
              ref={progressWrapRef}
              onClick={handleProgressClick}
              role="progressbar"
              aria-label="Playback progress"
            >
              <div className="player-progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="player-times">
              <span>{formatTime(currentTime)}</span>
              <span>{duration ? formatTime(duration) : '–:––'}</span>
            </div>
          </div>
        </div>
      </div>
      <a href="#demo" className="btn-primary btn-full" style={{ marginTop: 20 }} onClick={handleAnchorClick}>
        Book a demo
      </a>
    </div>
  )
}

export default function LiveDemo() {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (!href) return
    const target = document.querySelector(href)
    if (!target) return
    e.preventDefault()
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
  }

  return (
    <section className="live-demo-section" id="live-demo">
      <div className="container">
        <div className="live-demo-grid">
          <div className="live-demo-copy fade-up">
            <div className="section-tag">Live Demo</div>
            <h2 className="section-h2">
              Experience how naturally our AI handles bookings, answers questions, and upsells — exactly like a trained staff member would.
            </h2>
            <ul className="live-demo-list">
              <li>
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.22 2.38 2 2 0 012.2 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6" />
                </svg>
                <div><strong>24/7 call handling</strong><span>Never miss a call again</span></div>
              </li>
              <li>
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx={12} cy={12} r={10} /><line x1={2} y1={12} x2={22} y2={12} />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
                <div><strong>Multilingual</strong><span>Speaks your customers' language</span></div>
              </li>
              <li>
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                  <circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" />
                </svg>
                <div><strong>Instant setup</strong><span>Live in under 48 hours</span></div>
              </li>
              <li>
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
                </svg>
                <div><strong>Revenue recovery</strong><span>Turn missed calls into direct bookings</span></div>
              </li>
            </ul>
            <a href="#demo" className="btn-primary btn-lg" style={{ marginTop: 8 }} onClick={handleAnchorClick}>
              Book a Demo
            </a>
          </div>
          <div className="live-demo-player fade-up">
            <AudioPlayer />
          </div>
        </div>
      </div>
    </section>
  )
}
