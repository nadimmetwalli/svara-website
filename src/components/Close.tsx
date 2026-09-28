import { useState, type FormEvent } from 'react'
import { CONTACT_EMAIL, FORMSPREE_ENDPOINT } from '../content/site'
import { useT } from '../hooks/useT'
import type { TranslationKey } from '../i18n'

/* Closing section: the offer in three lines, a named person, and
   the demo form. The form posts to Formspree, which emails
   info@svara-ai.com. Room values stay canonical so the inbox reads
   the same whichever language the lead used. */

const ROOMS: { value: string; key: TranslationKey }[] = [
  { value: '<30', key: 'form.rooms1' },
  { value: '30-120', key: 'form.rooms2' },
  { value: '120+', key: 'form.rooms3' },
  { value: 'group', key: 'form.rooms4' },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Close() {
  const { t, lang } = useT()
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle')
  const [error, setError] = useState('')

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    if (!name) { setError(t('form.errName')); form.querySelector<HTMLInputElement>('#f-name')?.focus(); return }
    if (!EMAIL_RE.test(email)) { setError(t('form.errEmail')); form.querySelector<HTMLInputElement>('#f-email')?.focus(); return }
    setError('')
    setState('sending')
    data.set('language', lang)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      if (!res.ok) throw new Error(`Formspree responded with ${res.status}`)
      setState('done')
    } catch (err) {
      console.error('[SVARA] Demo form submission failed:', err)
      setState('idle')
      setError(t('form.error'))
    }
  }

  const terms: TranslationKey[] = ['close.t1', 'close.t2', 'close.t3']

  return (
    <section className="sec close center" id="demo" aria-labelledby="close-h" style={{ background: '#0e0c15' }}>
      <div className="wrap">
        <h2 className="headline" id="close-h">{t('close.title')}</h2>
        <p className="body-lg" style={{ marginTop: 16, maxWidth: '36ch', marginInline: 'auto' }}>{t('close.sub')}</p>
        <div className="close-grid">
          <div>
            <ul className="terms">{terms.map((k) => <li key={k}>{t(k)}</li>)}</ul>
            <div className="person">
              {/* Swap for Nadim's photo (square JPG, 800 px+) when it's ready. */}
              <div className="avatar" aria-hidden="true">NM</div>
              <div>
                <b>Nadim Metwalli</b>
                <span>{t('close.role')}</span>
                <span>{CONTACT_EMAIL}</span>
              </div>
            </div>
          </div>

          <div className="form" aria-live="polite">
            {state === 'done' ? (
              <div className="form-done">
                <h3>{t('form.doneTitle')}</h3>
                <p>{t('form.doneText')}</p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate style={{ display: 'grid', gap: 14 }}>
                <h3>{t('form.title')}</h3>
                <div className="row">
                  <div className="field">
                    <label htmlFor="f-name">{t('form.name')}</label>
                    <input id="f-name" name="name" autoComplete="name" placeholder={t('form.namePh')} required />
                  </div>
                  <div className="field">
                    <label htmlFor="f-email">{t('form.email')}</label>
                    <input id="f-email" name="email" type="email" inputMode="email" autoComplete="email" spellCheck={false} placeholder={t('form.emailPh')} required />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="f-hotel">{t('form.hotel')}</label>
                  <input id="f-hotel" name="hotel" autoComplete="organization" placeholder={t('form.hotelPh')} />
                </div>
                <div className="field">
                  <label htmlFor="f-rooms">{t('form.rooms')}</label>
                  <select id="f-rooms" name="rooms" defaultValue="30-120">
                    {ROOMS.map((r) => <option key={r.value} value={r.value}>{t(r.key)}</option>)}
                  </select>
                </div>
                <button className="pill pill-ink" type="submit" disabled={state === 'sending'}>
                  {state === 'sending' ? t('form.sending') : t('form.submit')}
                </button>
                <p className="form-err" role="alert">{error}</p>
                <small>{t('form.note')}</small>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
