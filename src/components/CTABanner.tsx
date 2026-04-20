export default function CTABanner() {
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
          <h2>Ready to transform your guest experience?</h2>
          <p>Join hotels already using SVARA to deliver five-star service around the clock.</p>
          <div className="cta-actions">
            <a href="#demo" className="btn-white btn-lg" onClick={handleAnchorClick}>Book a Demo</a>
            <a href="#demo" className="btn-outline-white btn-lg" onClick={handleAnchorClick}>Contact Sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
