import { useState, type FormEvent } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrergzpp'

const BENEFITS = [
  'Live demo of the AI concierge',
  'Setup tailored to your property type',
  'Pricing aligned to your call volume',
  'Go live in under 24 hours',
]

const ROOM_OPTIONS = ['Under 50 rooms', '50–150 rooms', '150–300 rooms', '300+ rooms']

export default function DemoForm() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        throw new Error(`Server responded with ${res.status}`)
      }
    } catch (err) {
      console.error('[SVARA] Demo form submission failed:', err)
      setSubmitting(false)
      alert("Something went wrong. Please email us directly at info@svara-ai.com and we'll get back to you within a day.")
    }
  }

  return (
    <section className="demo-section" id="demo">
      <div className="container">
        <div className="demo-grid">
          <div className="demo-copy fade-up">
            <div className="section-tag">Get Started</div>
            <h2>See SVARA in action</h2>
            <p>Book a 30-minute demo and see exactly how SVARA would work for your hotel. No commitment, no pressure — just results.</p>
            <ul className="demo-benefits">
              {BENEFITS.map((b) => (
                <li key={b}>
                  <span className="benefit-check">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="demo-form-wrap fade-up">
            {submitted ? (
              <div className="form-success show">
                <div className="success-icon">✓</div>
                <h3>You're booked!</h3>
                <p>We'll send a confirmation to your email shortly. Looking forward to showing you SVARA.</p>
              </div>
            ) : (
              <form className="demo-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fName">First Name</label>
                    <input type="text" id="fName" name="first_name" placeholder="Marco" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lName">Last Name</label>
                    <input type="text" id="lName" name="last_name" placeholder="Rodriguez" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="fEmail">Work Email</label>
                  <input type="email" id="fEmail" name="email" placeholder="marco@hotelpalacio.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="fHotel">Hotel / Property Name</label>
                  <input type="text" id="fHotel" name="hotel" placeholder="Hotel Palacio Barcelona" required />
                </div>
                <div className="form-group">
                  <label htmlFor="fSize">Number of Rooms</label>
                  <select id="fSize" name="rooms" required defaultValue="">
                    <option value="" disabled>Select range</option>
                    {ROOM_OPTIONS.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn-primary btn-full" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Book My Demo'}
                  {!submitting && (
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  )}
                </button>
                <p className="form-note">We'll respond within one business day.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
