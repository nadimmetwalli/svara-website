import mascot from '../assets/brand/mascot.webp'
import gospa from '../assets/logos/gospa.png'
import kernu from '../assets/logos/kernu.png'
import taltech from '../assets/logos/taltech.png'
import tehnopol from '../assets/logos/tehnopol.png'
import Link from '../components/Link'
import { CONTACT_EMAIL } from '../content/site'
import { useT } from '../hooks/useT'

/* /meist — who we are, from the booklet. */
export default function About() {
  const { t } = useT()
  return (
    <>
      <section className="about-hero">
        <div className="wrap">
          <img src={mascot} alt={t('about.mascotAlt')} width={220} height={217} />
          <p className="intro" style={{ marginBottom: 10 }}>{t('about.intro')}</p>
          <h1 className="display">{t('about.title')}</h1>
          <p className="body-lg" style={{ margin: '22px auto 0', maxWidth: '40ch' }}>{t('about.lead')}</p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 64 }}>
        <div className="wrap">
          <div className="about-cols">
            <div className="about-tile" style={{ background: 'linear-gradient(160deg,#2a2050,var(--tile-2) 60%)' }}>
              <h2 className="title">{t('about.whyH')}</h2>
              <p>{t('about.whyP1')}</p>
              <p>{t('about.whyP2')}</p>
            </div>
            <div className="about-tile">
              <h2 className="title">{t('about.grownH')}</h2>
              <p>{t('about.grownP')}</p>
              <div className="logo-row">
                <img src={taltech} alt="TalTech" height={44} width={76} loading="lazy" />
                <img className="tp" src={tehnopol} alt="Tehnopol" height={44} width={74} loading="lazy" />
              </div>
            </div>
            <div className="about-tile">
              <h2 className="title">{t('about.partnersH')}</h2>
              <p>{t('about.partnersP')}</p>
              <div className="logo-row">
                <img src={gospa} alt="GOSPA, Georg Ots Spa Hotel" height={44} width={120} loading="lazy" />
                <img src={kernu} alt="Kernu Mõis" height={52} width={81} loading="lazy" />
              </div>
            </div>
            <div className="about-tile">
              <h2 className="title">{t('about.teamH')}</h2>
              <div className="person" style={{ marginTop: 4 }}>
                {/* Swap for Nadim's photo (square JPG, 800 px+) when it's ready. */}
                <div className="avatar" aria-hidden="true">NM</div>
                <div><b>Nadim Metwalli</b><span>{t('close.role')}</span><span>{CONTACT_EMAIL}</span></div>
              </div>
            </div>
          </div>

          <div className="sec-head center" style={{ margin: '96px 0 28px' }}><h2 className="headline">{t('about.companyH')}</h2></div>
          <ul className="facts" style={{ maxWidth: 640, margin: '0 auto' }}>
            <li><span>{t('about.fName')}</span><span translate="no">SVARA Technologies OÜ</span></li>
            <li><span>{t('about.fReg')}</span><span>17453177</span></li>
            <li><span>{t('about.fAddr')}</span><span>Narva mnt 2-62, 10117 Tallinn</span></li>
            <li><span>{t('about.fEmail')}</span><span>{CONTACT_EMAIL}</span></li>
          </ul>
          <div className="cta-row" style={{ marginTop: 56 }}>
            <Link className="pill pill-light" href="/#demo">{t('nav.bookDemo')}</Link>
            <Link className="more" href="/">{t('price.back')}<span className="chev" aria-hidden="true">›</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
