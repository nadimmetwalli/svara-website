interface Feature {
  icon: React.ReactNode
  title: string
  desc: string
  large?: boolean
  extra?: React.ReactNode
}

const FEATURES: Feature[] = [
  {
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.22 2.38 2 2 0 012.2 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
    title: '24/7 Call Answering',
    desc: 'Never miss a single call, even during peak hours or the middle of the night. Your AI concierge picks up instantly, every time, holidays included.',
    large: true,
    extra: (
      <div className="waveform">
        {Array.from({ length: 11 }).map((_, i) => <div key={i} className="wb" />)}
      </div>
    ),
  },
  {
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x={2} y={5} width={20} height={14} rx={2} /><path d="M2 10h20" /><path d="M7 15h2M12 15h5" />
      </svg>
    ),
    title: 'PMS Integration',
    desc: 'Reservations and guest data flow directly into your property management system with full accuracy — no manual re-entry, no errors, no delays.',
  },
  {
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Smart Upselling',
    desc: 'AI suggests room upgrades, packages, and late check-outs to increase revenue per booking automatically — without being pushy.',
  },
  {
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x={3} y={4} width={18} height={18} rx={2} /><line x1={16} y1={2} x2={16} y2={6} /><line x1={8} y1={2} x2={8} y2={6} /><line x1={3} y1={10} x2={21} y2={10} />
      </svg>
    ),
    title: 'Reservations + Event Triage',
    desc: 'Instantly handles bookings, availability, and routes complex queries — freeing your team for high-touch interactions.',
  },
  {
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx={12} cy={12} r={10} /><line x1={2} y1={12} x2={22} y2={12} />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: 'Multilingual Support',
    desc: 'English, German, Finnish, Swedish and 15+ more — guests feel understood instantly, no matter where they\'re calling from.',
  },
  {
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
        <line x1={18} y1={20} x2={18} y2={10} /><line x1={12} y1={20} x2={12} y2={4} /><line x1={6} y1={20} x2={6} y2={14} />
      </svg>
    ),
    title: 'Analytics Dashboard',
    desc: 'Track calls processed, revenue recovered, peak times, and requests. Full visibility into every guest interaction with actionable insights.',
    large: true,
    extra: (
      <div className="esc-diagram">
        <div className="esc-node esc-ai"><span>AI</span></div>
        <div className="esc-arrow">
          <svg width={40} height={12} viewBox="0 0 40 12" fill="none">
            <path d="M0 6h36M30 1l6 5-6 5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="esc-node esc-staff"><span>Insights</span></div>
      </div>
    ),
  },
]

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-tag">Features</div>
        <h2 className="section-h2">Your business's most reliable employee.</h2>
        <p className="section-sub">Always on. Never tired. Perfectly trained. Never calls in sick.</p>

        <div className="features-grid">
          {FEATURES.map((f) => (
            <div key={f.title} className={`feat-card fade-up${f.large ? ' feat-large' : ''}`}>
              <div className="feat-icon-wrap">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              {f.extra}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
