import cloudbeds from '../assets/logos/cloudbeds.png'
import mews from '../assets/logos/mews.png'
import opera from '../assets/logos/opera.png'
import { useT } from '../hooks/useT'
import type { TranslationKey } from '../i18n'

/* Five reasons, five tiles, three sizes, then the three numbers
   that back them up. Estonian gets the big tile; Baltic + Nordic
   fluency the second language tile. The languages strip follows. */

const CHIPS: TranslationKey[] = ['why.chip1', 'why.chip2', 'why.chip3', 'why.chip4', 'why.chip5', 'why.chip6']
const NEIGHBOURS: [string, string][] = [['lv', 'Sveiki'], ['lt', 'Labas'], ['fi', 'Hei'], ['sv', 'Hej'], ['da', 'Hej'], ['no', 'Hei']]

export default function WhySvara() {
  const { t } = useT()
  return (
    <section className="sec" id="miks" aria-labelledby="why-h">
      <div className="wide">
        <div className="sec-head center">
          <h2 className="headline" id="why-h">{t('why.title')}</h2>
          <p className="body-lg">{t('why.sub')}</p>
        </div>
        <div className="why">
          <div className="wy wy-lang">
            <small>{t('why.langK')}</small><h3>{t('why.langH')}</h3><p>{t('why.langP')}</p>
            <div className="tere big-grad" lang="et">{t('why.langBig')}</div>
          </div>
          <div className="wy wy-fast">
            <small>{t('why.fastK')}</small><h3>{t('why.fastH')}</h3>
            <div className="big big-grad">48&nbsp;h</div>
          </div>
          <div className="wy wy-hotel">
            <small>{t('why.hotelK')}</small><h3>{t('why.hotelH')}</h3><p>{t('why.hotelP')}</p>
            <div className="terms-chips">{CHIPS.map((c) => <span key={c}>{t(c)}</span>)}</div>
          </div>
          <div className="wy wy-local">
            <small>{t('why.nordicK')}</small><h3>{t('why.nordicH')}</h3><p>{t('why.nordicP')}</p>
            <div className="neighbours big-grad">{NEIGHBOURS.map(([code, word]) => <span key={code} lang={code}>{word}</span>)}</div>
          </div>
          <div className="wy wy-pms">
            <div>
              <small>{t('why.pmsK')}</small>
              <h3 style={{ margin: '10px 0' }}>{t('why.pmsH')}</h3>
              <p>{t('why.pmsP')}</p>
            </div>
            <ul className="pms">
              <li className="live"><div className="lg"><span className="wordmark" translate="no">BOUK</span></div><small>{t('why.live')}</small></li>
              <li className="live"><div className="lg"><img src={cloudbeds} alt="Cloudbeds" height={34} width={65} loading="lazy" /></div><small>{t('why.live')}</small></li>
              <li><div className="lg"><img src={mews} alt="Mews" height={22} width={173} loading="lazy" /></div><small>{t('why.onRequest')}</small></li>
              <li><div className="lg"><img src={opera} alt="Oracle Opera" height={34} width={78} loading="lazy" /></div><small>{t('why.onRequest')}</small></li>
            </ul>
          </div>
        </div>
        <div className="nums why-nums">
          <div className="num"><b>20+</b><span>{t('why.n1')}</span></div>
          <div className="num"><b>&lt;1&nbsp;s</b><span>{t('why.n2')}</span></div>
          <div className="num"><b>24/7</b><span>{t('why.n3')}</span></div>
        </div>
      </div>
    </section>
  )
}
