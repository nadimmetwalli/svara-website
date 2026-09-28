import { useT } from '../hooks/useT'
import Link from './Link'

/* Apple-style fine print: a small site map and the legal line. */
export default function Footer() {
  const { t } = useT()
  return (
    <footer>
      <div className="wrap">
        <div className="fine">
          <p>{t('footer.fine1')}</p>
          <p>{t('footer.fine2')}</p>
        </div>
        <nav className="dir" aria-label={t('footer.map')}>
          <div>
            <h3>{t('footer.product')}</h3>
            <ul>
              <li><Link href="/#ulevaade">{t('nav.overview')}</Link></li>
              <li><Link href="/#kuula">{t('hero.listen')}</Link></li>
              <li><Link href="/#svara">{t('footer.statement')}</Link></li>
            </ul>
          </div>
          <div>
            <h3>{t('footer.start')}</h3>
            <ul>
              <li><Link href="/#kuidas">{t('nav.how')}</Link></li>
              <li><Link href="/hinnad">{t('nav.pricing')}</Link></li>
              <li><Link href="/#kkk">{t('nav.faq')}</Link></li>
            </ul>
          </div>
          <div>
            <h3>{t('footer.company')}</h3>
            <ul>
              <li><Link href="/meist">{t('nav.about')}</Link></li>
              <li><Link href="/#partnerid">{t('footer.partners')}</Link></li>
              <li><Link href="/#demo">{t('footer.contact')}</Link></li>
            </ul>
          </div>
        </nav>
        <div className="foot-row">
          <span translate="no">{t('footer.legal')}</span>
          <span>{t('footer.rights')}</span>
        </div>
      </div>
    </footer>
  )
}
