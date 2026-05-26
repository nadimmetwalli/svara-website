import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes'

interface FAQItem {
  q: string
  a: string
}

const FAQS: FAQItem[] = [
  {
    q: 'How does SVARA AI integrate with my existing booking system?',
    a: 'SVARA connects via API to all major PMS platforms including Opera, Mews, Cloudbeds, and more. Setup takes under 48 hours with no hardware changes required.',
  },
  {
    q: "Will the AI sound 'robotic' or frustrate my international guests?",
    a: "No. SVARA uses advanced neural voice synthesis that sounds natural and warm. Many guests don't realise they're speaking to an AI — and that's intentional.",
  },
  {
    q: 'Does SVARA replace my front-desk team?',
    a: 'SVARA handles routine calls so your team can focus on high-value, in-person guest experiences. It\'s a force multiplier, not a replacement.',
  },
  {
    q: "How do you ensure the security of our guests' private data?",
    a: 'All data is encrypted in transit and at rest. We are GDPR compliant and never sell or share guest data. You retain full ownership of all conversation records.',
  },
  {
    q: 'Can SVARA handle multiple languages?',
    a: 'Yes — SVARA supports 20+ languages and detects the caller\'s language automatically, responding in kind without any manual configuration.',
  },
  {
    q: 'Will I be able to see a report of how SVARA AI is doing?',
    a: 'Absolutely. Your live dashboard shows all calls, bookings, sentiment scores, revenue attributed, and peak-time analytics — updated in real time.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-left">
            <div className="section-tag">FAQ</div>
            <h2 className="section-h2">Frequently Asked Questions</h2>
            <p className="section-sub">Still have questions? We've answered some of the most common queries below to help you make an informed decision.</p>
            <div className="faq-still">
              <p><strong>Still have questions?</strong></p>
              <p>Get in touch now and we can help you with all your queries right away.</p>
              <Link to={ROUTES.demo} className="btn-primary" style={{ marginTop: 16 }}>
                Book a Demo →
              </Link>
            </div>
          </div>

          <div className="faq-right">
            {FAQS.map((item, i) => (
              <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
                <button
                  className="faq-q"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {item.q}
                  <span className="faq-arrow">↓</span>
                </button>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
