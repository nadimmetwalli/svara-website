import { Link } from 'react-router-dom'
import { ROUTES } from '../routes'

interface Card {
  icon: React.ReactNode
  title: string
  desc: string
}

const CARDS: Card[] = [
  {
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x={3} y={11} width={18} height={11} rx={2} /><path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: 'Lifetime price lock',
    desc: 'Your rate is fixed at launch pricing, forever. As SVARA scales and pricing increases, your cost never changes.',
  },
  {
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: '24-hour onboarding',
    desc: 'Go live in under 24 hours with dedicated setup support from our founding team — not a help centre ticket.',
  },
  {
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx={12} cy={12} r={10} /><line x1={12} y1={8} x2={12} y2={12} /><line x1={12} y1={16} x2={12.01} y2={16} />
      </svg>
    ),
    title: 'Shape the roadmap',
    desc: 'Direct access to our team. Your operational needs and feedback drive the features we build next.',
  },
  {
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx={12} cy={12} r={10} /><line x1={2} y1={12} x2={22} y2={12} />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: 'First-mover advantage',
    desc: 'Stand out before AI voice concierge becomes standard. Guests notice — and remember — the hotels that led.',
  },
]

export default function FoundingHotels() {
  return (
    <section className="founding-section" id="testimonials">
      <div className="container">
        <div className="founding-inner fade-up">
          <div className="founding-eyebrow">
            <span className="founding-badge">Limited Programme</span>
            <span className="founding-spots-label">
              <span className="founding-count">12</span> founding spots remaining
            </span>
          </div>
          <h2 className="section-h2 founding-h2">Become a founding hotel</h2>
          <p className="section-sub founding-sub">
            We're partnering with a select group of forward-thinking hotels to shape the future of AI-powered guest services. Founding partners get lifetime pricing, direct product input, and a competitive edge that only comes from being first.
          </p>

          <div className="founding-grid">
            {CARDS.map((card) => (
              <div key={card.title} className="founding-card">
                <div className="founding-icon-wrap">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="founding-cta">
            <Link to={ROUTES.demo} className="btn-primary btn-lg">
              Apply for early access →
            </Link>
            <p className="founding-note">No commitment required · We respond within one business day</p>
          </div>
        </div>
      </div>
    </section>
  )
}
