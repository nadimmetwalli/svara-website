import { useState, type FormEvent } from 'react'
import { useT } from '../hooks/useT'
import type { TranslationKey } from '../i18n'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrergzpp'

const BENEFITS: TranslationKey[] = ['demo.b1', 'demo.b2', 'demo.b3', 'demo.b4']

// The `value` is what Formspree emails to info@svara-ai.com. Keeping it a
// canonical range rather than the translated label means the inbox reads
// the same whether the lead filled the form in Estonian or English.
const ROOM_OPTIONS: { value: string; key: TranslationKey }[] = [
  { value: '<50', key: 'demo.rooms1' },
  { value: '50-150', key: 'demo.rooms2' },
  { value: '150-300', key: 'demo.rooms3' },
  { value: '300+', key: 'demo.rooms4' },
]

export default function DemoForm() {
  const { t } = useT()
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
      alert(t('demo.error'))
    }
  }

  return (
    <section className="demo-section" id="demo">
      <div className="container">
        <div className="demo-grid">
          <div className="demo-copy fade-up">
            <div className="section-tag">{t('demo.tag')}</div>
            <h2>{t('demo.title')}</h2>
            <p>{t('demo.desc')}</p>
            <ul className="demo-benefits">
              {BENEFITS.map((key) => (
                <li key={key}>
                  <span className="benefit-check">✓</span>
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>

          <div className="demo-form-wrap fade-up">
            {submitted ? (
              <div className="form-success show">
                <div className="success-icon">✓</div>
                <h3>{t('demo.successTitle')}</h3>
                <p>{t('demo.successDesc')}</p>
              </div>
            ) : (
              <form className="demo-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fName">{t('demo.firstName')}</label>
                    <input type="text" id="fName" name="first_name" placeholder={t('demo.firstNamePh')} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lName">{t('demo.lastName')}</label>
                    <input type="text" id="lName" name="last_name" placeholder={t('demo.lastNamePh')} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="fEmail">{t('demo.email')}</label>
                  <input type="email" id="fEmail" name="email" placeholder={t('demo.emailPh')} required />
                </div>
                <div className="form-group">
                  <label htmlFor="fHotel">{t('demo.hotel')}</label>
                  <input type="text" id="fHotel" name="hotel" placeholder={t('demo.hotelPh')} required />
                </div>
                <div className="form-group">
                  <label htmlFor="fSize">{t('demo.rooms')}</label>
                  <select id="fSize" name="rooms" required defaultValue="">
                    <option value="" disabled>{t('demo.roomsPlaceholder')}</option>
                    {ROOM_OPTIONS.map(({ value, key }) => (
                      <option key={value} value={value}>{t(key)}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn-primary btn-full" disabled={submitting}>
                  {submitting ? t('demo.sending') : t('demo.submit')}
                  {!submitting && (
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  )}
                </button>
                <p className="form-note">{t('demo.note')}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
