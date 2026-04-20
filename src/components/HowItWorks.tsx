interface Step {
  num: string
  icon: React.ReactNode
  title: string
  desc: string
}

const STEPS: Step[] = [
  {
    num: '01',
    icon: (
      <svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.22 2.38 2 2 0 012.2 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6" />
      </svg>
    ),
    title: 'The Handoff',
    desc: "Simply set your phone line to forward to your unique SVARA number while you're away or during peak rush hours. You keep your existing number — SVARA handles it all behind the scenes.",
  },
  {
    num: '02',
    icon: (
      <svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: 'The Conversation',
    desc: 'Guests get answers instantly. SVARA navigates room availability, answers questions about amenities, handles booking requests, and manages concierge queries — naturally and professionally in any language.',
  },
  {
    num: '03',
    icon: (
      <svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <rect x={2} y={5} width={20} height={14} rx={2} /><path d="M2 10h20" />
      </svg>
    ),
    title: 'Seamless PMS Integration',
    desc: 'Bookings and guest data flow directly into your property management system (Opera, Mews, Cloudbeds, and more). Every interaction is logged and synced — no manual entry, no errors.',
  },
]

export default function HowItWorks() {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (!href) return
    const target = document.querySelector(href)
    if (!target) return
    e.preventDefault()
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
  }

  return (
    <section className="how-section" id="how-it-works">
      <div className="container">
        <div className="how-header">
          <div>
            <div className="section-tag">How It Works</div>
            <h2 className="section-h2">Get live and connected<br />in less than 48 hours</h2>
            <p className="section-sub">No new hardware. No training staff. We integrate directly into the systems you already use.</p>
          </div>
          <a href="#demo" className="btn-primary btn-lg how-cta" onClick={handleAnchorClick}>
            Start your integration →
          </a>
        </div>

        <div className="steps-row">
          {STEPS.map((step, i) => (
            <>
              <div key={step.num} className="step fade-up">
                <div className="step-num">{step.num}</div>
                <div className="step-img-wrap">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {i < STEPS.length - 1 && <div key={`line-${i}`} className="step-line" />}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
