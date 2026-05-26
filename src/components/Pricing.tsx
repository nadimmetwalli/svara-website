import { useEffect, useRef, useState, type FormEvent } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrergzpp'

interface Plan {
  id: string
  name: string
  callsIncluded: string
  setupFee: number | null
  monthlyPrice: number | null
  description: string
}

const PLANS: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    callsIncluded: '500',
    setupFee: 1000,
    monthlyPrice: 699,
    description: 'Ideal for smaller properties getting started with AI call handling and a predictable monthly call allowance.',
  },
  {
    id: 'pro',
    name: 'Pro',
    callsIncluded: '1,500',
    setupFee: 2000,
    monthlyPrice: 1799,
    description: 'Built for busy hotels that need higher call volume, multilingual support, and deeper PMS integrations.',
  },
  {
    id: 'premium',
    name: 'Premium',
    callsIncluded: '4,000',
    setupFee: 3000,
    monthlyPrice: 4399,
    description: 'For high-volume properties and groups that need maximum included calls at the lowest overage rate.',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    callsIncluded: 'Individual',
    setupFee: null,
    monthlyPrice: null,
    description: 'Custom packages for large groups and chains with bespoke call volumes, setup, and support requirements.',
  },
]

const COUNTRIES = [
  'Estonia', 'Latvia', 'Lithuania', 'Finland', 'Sweden', 'Norway', 'Denmark',
  'Germany', 'Poland', 'France', 'Netherlands', 'Belgium', 'Spain', 'Italy',
  'United Kingdom', 'Ireland', 'Austria', 'Switzerland', 'Czech Republic',
  'Portugal', 'United States', 'Other',
]

const REFERRAL_SOURCES = [
  'Google search',
  'Social media',
  'Referral from colleague',
  'Industry event or conference',
  'Hotel association or partner',
  'Email or newsletter',
  'SVARA sales representative',
  'Other',
]

function formatPrice(amount: number) {
  return amount.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function planFeatures(plan: Plan) {
  return [
    `${plan.callsIncluded} calls included per month`,
    plan.setupFee !== null ? `€${formatPrice(plan.setupFee)} one-time setup` : 'Individual one-time setup',
  ]
}

export default function Pricing() {
  const [selectedPlanId, setSelectedPlanId] = useState(PLANS[0].id)
  const [showForm, setShowForm] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  const selectedPlan = PLANS.find((plan) => plan.id === selectedPlanId) ?? PLANS[0]
  const isEnterprise = selectedPlan.monthlyPrice === null

  useEffect(() => {
    if ((showForm || submitted) && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [showForm, submitted])

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
      console.error('[SVARA] Pricing form submission failed:', err)
      setSubmitting(false)
      alert("Something went wrong. Please email us directly at info@svara-ai.com and we'll get back to you within a day.")
    }
  }

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="pricing-header fade-up">
          <div className="section-tag">Pricing</div>
          <h2 className="section-h2">Plans built for your property</h2>
          <p className="section-sub pricing-sub">
            Transparent packages with included call volumes and one-time setup fees.
          </p>
        </div>

        <div className="pricing-plans fade-up">
          {PLANS.map((plan) => {
            const isSelected = plan.id === selectedPlanId

            return (
              <button
                key={plan.id}
                type="button"
                className={`pricing-plan${isSelected ? ' selected' : ''}`}
                onClick={() => setSelectedPlanId(plan.id)}
                aria-pressed={isSelected}
              >
                {isSelected && (
                  <span className="pricing-plan-check" aria-hidden="true">
                    <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}

                <h3 className="pricing-plan-name">{plan.name}</h3>
                <p className="pricing-plan-audience">
                  <span className="pricing-plan-dot" aria-hidden="true" />
                  {plan.callsIncluded === 'Individual'
                    ? 'Custom call volume'
                    : `${plan.callsIncluded} calls/month included`}
                </p>
                <p className={`pricing-plan-price${plan.monthlyPrice === null ? ' pricing-plan-price-custom' : ''}`}>
                  {plan.monthlyPrice !== null ? (
                    <>
                      <span>€{formatPrice(plan.monthlyPrice)}</span>
                      <small>/month</small>
                    </>
                  ) : (
                    <span>Individual</span>
                  )}
                </p>
                <p className="pricing-plan-desc">{plan.description}</p>
                <ul className="pricing-plan-features">
                  {planFeatures(plan).map((feature) => (
                    <li key={feature}>
                      <span className="pricing-feature-check" aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </button>
            )
          })}
        </div>

        <div className="pricing-summary fade-up">
          {isEnterprise ? (
            <>
              <p className="pricing-total pricing-total-custom">Individual pricing</p>
              <p className="pricing-billing-note">
                Enterprise packages are tailored to your call volume, setup requirements, and support needs. Contact us for a custom quote.
              </p>
            </>
          ) : (
            <>
              <p className="pricing-total">
                €{formatPrice(selectedPlan.monthlyPrice!)} <span>/month</span>
              </p>
              <p className="pricing-billing-note">
                Plus €{formatPrice(selectedPlan.setupFee!)} one-time setup.
              </p>
            </>
          )}

          {!showForm && !submitted && (
            <button
              type="button"
              className="btn-primary btn-lg pricing-order-btn"
              onClick={() => setShowForm(true)}
            >
              {isEnterprise ? 'Request Enterprise quote' : `Get started with ${selectedPlan.name}`}
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </button>
          )}
        </div>

        {(showForm || submitted) && (
          <div ref={formRef} className="pricing-form-wrap">
            {submitted ? (
              <div className="form-success show">
                <div className="success-icon">✓</div>
                <h3>Request received!</h3>
                <p>
                  Thanks for your interest in {selectedPlan.name}.
                  We'll send a confirmation to your email shortly with next steps.
                </p>
              </div>
            ) : (
              <form className="pricing-form demo-form" onSubmit={handleSubmit}>
              <input type="hidden" name="form_type" value="pricing_order" />
              <input type="hidden" name="selected_plan" value={selectedPlan.name} />
              <input
                type="hidden"
                name="pricing_summary"
                value={
                  isEnterprise
                    ? 'Individual — custom quote requested'
                    : `€${formatPrice(selectedPlan.monthlyPrice!)}/month + €${formatPrice(selectedPlan.setupFee!)} setup`
                }
              />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="pFirstName">First Name</label>
                  <input type="text" id="pFirstName" name="first_name" placeholder="Marco" required />
                </div>
                <div className="form-group">
                  <label htmlFor="pLastName">Last Name</label>
                  <input type="text" id="pLastName" name="last_name" placeholder="Rodriguez" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="pEmail">Work Email</label>
                  <input type="email" id="pEmail" name="email" placeholder="marco@hotelpalacio.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="pPhone">Phone</label>
                  <input type="tel" id="pPhone" name="phone" placeholder="+34 600 000 000" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="pHotel">Hotel / Property Name</label>
                <input type="text" id="pHotel" name="hotel" placeholder="Hotel Palacio Barcelona" required />
              </div>

              <div className="form-group">
                <label htmlFor="pWebsite">Website Link</label>
                <input type="url" id="pWebsite" name="website" placeholder="https://hotelpalacio.com" required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="pCountry">Property Country</label>
                  <select id="pCountry" name="country" required defaultValue="">
                    <option value="" disabled>Select country</option>
                    {COUNTRIES.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="pRooms">Number of Rooms</label>
                  <input type="number" id="pRooms" name="rooms" placeholder="120" min={1} required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="pReferral">How did you hear about SVARA?</label>
                <select id="pReferral" name="referral_source" defaultValue="">
                  <option value="">Select an option</option>
                  {REFERRAL_SOURCES.map((source) => (
                    <option key={source} value={source}>{source}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn-primary btn-full" disabled={submitting}>
                {submitting ? 'Sending…' : isEnterprise ? 'Submit quote request' : 'Submit order request'}
                {!submitting && (
                  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                )}
              </button>
              <p className="form-note">We'll confirm your plan and onboarding details within one business day.</p>
            </form>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
