import gospa from '../assets/logos/gospa.png'
import kernu from '../assets/logos/kernu.png'
import taltech from '../assets/logos/taltech.png'
import tehnopol from '../assets/logos/tehnopol.png'
import { useT } from '../hooks/useT'

/* Logos are shown in white so they sit calmly on the dark page. */
export default function Partners() {
  const { t } = useT()
  return (
    <section className="sec center" id="partnerid" aria-labelledby="partners-h" style={{ paddingTop: 56 }}>
      <div className="wrap">
        <div className="sec-head">
          <h2 className="headline" id="partners-h">{t('partners.title')}</h2>
          <p className="body-lg">{t('partners.sub')}</p>
        </div>
        <div className="partners-grid">
          <div className="partner">
            <img src={gospa} alt="GOSPA, Georg Ots Spa Hotel" width={285} height={104} loading="lazy" />
            <b>Georg Ots Spa Hotel</b>
            <span>{t('partners.gospaCity')}</span>
          </div>
          <div className="partner">
            <img src={kernu} alt="Kernu Mõis" width={162} height={104} loading="lazy" />
            <b>Kernu Mõis</b>
            <span>{t('partners.kernuCity')}</span>
          </div>
        </div>
        <div className="backers">
          <span>{t('partners.grown')}</span>
          <img src={taltech} alt="TalTech" height={40} width={69} loading="lazy" />
          <img className="tp" src={tehnopol} alt="Tehnopol" height={40} width={68} loading="lazy" />
        </div>
      </div>
    </section>
  )
}
