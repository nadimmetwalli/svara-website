const BEFORE = [
  'Misses calls during peak hours',
  'Limited to business hours only',
  'Language barriers with guests',
  'Manual, error-prone booking process',
  'No analytics or call insights',
  "High staffing costs that don't scale",
]

const AFTER = [
  'Answers every call, instantly',
  'Available 24 hours, 7 days a week',
  'Speaks 20+ languages natively',
  'Books rooms automatically during the call',
  'Full analytics on every interaction',
  'Fixed cost, scales to any volume',
]

export default function Comparison() {
  return (
    <section className="comparison-section">
      <div className="container">
        <div className="section-tag">Why SVARA</div>
        <h2 className="section-h2">The smarter way to handle guest calls</h2>
        <p className="section-sub">
          Traditional front desks miss calls, lose bookings, and struggle with language barriers. SVARA fixes all of that — permanently.
        </p>

        <div className="cmp-grid">
          <div className="cmp-col cmp-old fade-up">
            <div className="cmp-header">
              <span className="cmp-tag cmp-tag-old">Before SVARA</span>
              <h3>Traditional Reception</h3>
            </div>
            <ul className="cmp-list">
              {BEFORE.map((item) => (
                <li key={item} className="cmp-bad">
                  <span className="cmp-icon">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="cmp-col cmp-new fade-up">
            <div className="cmp-header">
              <span className="cmp-tag cmp-tag-new">With SVARA</span>
              <h3>AI Voice Concierge</h3>
            </div>
            <ul className="cmp-list">
              {AFTER.map((item) => (
                <li key={item} className="cmp-good">
                  <span className="cmp-icon">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
