import { useState } from 'react'
import { FOUNDING_OFFER_OPEN } from '../content/site'
import Link from '../components/Link'
import { useT } from '../hooks/useT'
import { fill, type TranslationKey } from '../i18n'

/* /hinnad — two free weeks first, then four plans. Plans differ
   only in minutes and SMS allowance; everything else is included.
   Prices exclude VAT. Yearly = 10 × monthly (2 months free). */

type Plan = { name: string; rooms: TranslationKey; month: number; minutes: string; extra: string; sms: string; mid?: boolean }

const PLANS: Plan[] = [
  { name: 'Alus', rooms: 'price.aRooms', month: 149, minutes: '300', extra: '0,45', sms: '50' },
  { name: 'Standard', rooms: 'price.sRooms', month: 299, minutes: '800', extra: '0,35', sms: '150', mid: true },
  { name: 'Premium', rooms: 'price.pRooms', month: 549, minutes: '1 800', extra: '0,28', sms: '400' },
]

export default function Pricing() {
  const { t, lang } = useT()
  const [yearly, setYearly] = useState(false)
  const nf = (n: number) => new Intl.NumberFormat(lang === 'et' ? 'et-EE' : 'en-GB').format(n)
  const eur = (v: string) => (lang === 'et' ? `${v} €` : `€${v.replace(',', '.')}`)

  const incl: [TranslationKey, TranslationKey][] = [
    ['price.i1h', 'price.i1p'], ['price.i2h', 'price.i2p'], ['price.i3h', 'price.i3p'], ['price.i4h', 'price.i4p'], ['price.i5h', 'price.i5p'],
  ]
  const flow: [TranslationKey, TranslationKey][] = [
    ['price.b1h', 'price.b1p'], ['price.b2h', 'price.b2p'], ['price.b3h', 'price.b3p'], ['price.b4h', 'price.b4p'],
  ]
  const feats: [TranslationKey, TranslationKey][] = [
    ['price.x1h', 'price.x1p'], ['price.x2h', 'price.x2p'], ['price.x3h', 'price.x3p'], ['price.x4h', 'price.x4p'],
  ]
  const rules: [TranslationKey, TranslationKey][] = [
    ['price.r1h', 'price.r1p'], ['price.r2h', 'price.r2p'], ['price.r3h', 'price.r3p'], ['price.r4h', 'price.r4p'], ['price.r5h', 'price.r5p'],
  ]

  return (
    <>
      <section className="price-hero">
        <div className="wrap">
          <p className="intro" style={{ marginBottom: 10 }}>{t('price.intro')}</p>
          <h1 className="display">{t('price.title')}</h1>
          <p className="body-lg" style={{ margin: '22px auto 0', maxWidth: '40ch' }}>{t('price.lead')}</p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 48 }} aria-labelledby="trial-h">
        <div className="wide" style={{ maxWidth: 1180 }}>
          <div className="trial">
            <div className="big">{lang === 'et' ? '0 €' : '€0'}</div>
            <div><h2 id="trial-h">{t('price.trialH')}</h2><p>{t('price.trialP')}</p></div>
            <Link className="pill pill-ink" href="/#demo">{t('price.start')}</Link>
          </div>

          <p className="then">{t('price.after')}</p>

          <div className="bill">
            <div className="bill-seg" role="group" aria-label={t('price.billing')}>
              <button type="button" aria-pressed={!yearly} onClick={() => setYearly(false)}>{t('price.monthly')}</button>
              <button type="button" aria-pressed={yearly} onClick={() => setYearly(true)}>{t('price.yearly')} <em>{t('price.twoFree')}</em></button>
            </div>
          </div>

          <div className="pk-grid">
            {PLANS.map((p) => {
              const amount = yearly ? p.month * 10 : p.month
              return (
                <article key={p.name} className={`pk${p.mid ? ' mid' : ''}`}>
                  <h3>{p.name}</h3>
                  <p className="for">{t(p.rooms)}</p>
                  <div className="amt">
                    <b>{lang === 'et' ? `${nf(amount)} €` : `€${nf(amount)}`}</b>
                    <span>{yearly ? t('price.perYear') : t('price.perMonth')}</span>
                  </div>
                  <p className="sub-amt">{yearly ? fill(t('price.approx'), { n: nf(Math.round(amount / 12)) }) : ''}</p>
                  <ul>
                    <li><span>{t('price.minutes')}</span><b>{p.minutes}</b></li>
                    <li><span>{t('price.extraMin')}</span><b>{eur(p.extra)}</b></li>
                    <li><span>{t('price.bookings')}</span><b className="yes" aria-label={t('price.yes')}>✓</b></li>
                    <li><span>{t('price.sms')}</span><b>{p.sms}</b></li>
                  </ul>
                  <Link className={`pill ${p.mid ? 'pill-light' : 'pill-glass'}`} href="/#demo">{t('price.start')}</Link>
                </article>
              )
            })}
            <article className="pk">
              <h3>{t('price.cName')}</h3>
              <p className="for">{t('price.cRooms')}</p>
              <div className="amt"><b style={{ fontSize: 34 }}>{t('price.cFrom')}</b></div>
              <p className="sub-amt">{t('price.cQuote')}</p>
              <ul>
                <li><span>{t('price.minutes')}</span><b>{t('price.agreed')}</b></li>
                <li><span>{t('price.extraMin')}</span><b>{t('price.agreed')}</b></li>
                <li><span>{t('price.bookings')}</span><b className="yes" aria-label={t('price.yes')}>✓</b></li>
                <li><span>{t('price.sms')}</span><b>{t('price.agreed')}</b></li>
              </ul>
              <Link className="pill pill-glass" href="/#demo">{t('price.cCta')}</Link>
            </article>
          </div>
          <p className="vat">{t('price.vat')}</p>

          {FOUNDING_OFFER_OPEN && (
            <div className="founding">
              <div><b>{t('price.foundH')}</b><p>{t('price.foundP')}</p></div>
              <Link className="pill pill-light" href="/#demo">{t('price.foundCta')}</Link>
            </div>
          )}
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 40 }} aria-labelledby="incl-h">
        <div className="wide" style={{ maxWidth: 1180 }}>
          <div className="sec-head center" style={{ marginBottom: 36 }}>
            <h2 className="headline" id="incl-h">{t('price.inclTitle')}</h2>
            <p className="body-lg">{t('price.inclSub')}</p>
          </div>
          <div className="incl">{incl.map(([h, p]) => <div key={h}><b>{t(h)}</b><span>{t(p)}</span></div>)}</div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 40 }} aria-labelledby="book-h">
        <div className="wide" style={{ maxWidth: 1180 }}>
          <div className="sec-head center" style={{ marginBottom: 36 }}>
            <h2 className="headline" id="book-h">{t('price.bookTitle')}</h2>
            <p className="body-lg">{t('price.bookSub')}</p>
          </div>
          <ol className="bflow">{flow.map(([h, p]) => <li key={h}><b>{t(h)}</b><span>{t(p)}</span></li>)}</ol>
          <div className="bfeat">{feats.map(([h, p]) => <div key={h}><b>{t(h)}</b><p>{t(p)}</p></div>)}</div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 40, background: '#0e0c15' }} aria-labelledby="rules-h">
        <div className="wrap">
          <div className="sec-head center" style={{ marginBottom: 28 }}><h2 className="headline" id="rules-h">{t('price.rulesTitle')}</h2></div>
          <div className="rules">{rules.map(([h, p]) => <div key={h}><b>{t(h)}</b><p>{t(p)}</p></div>)}</div>
          <div className="cta-row" style={{ marginTop: 56 }}>
            <Link className="pill pill-light" href="/#demo">{t('nav.bookDemo')}</Link>
            <Link className="more" href="/">{t('price.back')}<span className="chev" aria-hidden="true">›</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
