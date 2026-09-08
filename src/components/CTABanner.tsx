import { useT } from '../hooks/useT'

export default function CTABanner() {
  const { t } = useT()

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (!href) return
    const target = document.querySelector(href)
    if (!target) return
    e.preventDefault()
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
  }

  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-inner fade-up">
          <h2>{t('cta.title')}</h2>
          <p>{t('cta.desc')}</p>
          <div className="cta-actions">
            <a href="#demo" className="btn-white btn-lg" onClick={handleAnchorClick}>{t('nav.bookDemo')}</a>
            <a href="#demo" className="btn-outline-white btn-lg" onClick={handleAnchorClick}>{t('nav.contactSales')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
