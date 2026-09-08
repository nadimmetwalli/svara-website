import { useT } from '../hooks/useT'
import type { TranslationKey } from '../i18n'

const BEFORE: TranslationKey[] = ['cmp.old1', 'cmp.old2', 'cmp.old3', 'cmp.old4', 'cmp.old5', 'cmp.old6']
const AFTER: TranslationKey[] = ['cmp.new1', 'cmp.new2', 'cmp.new3', 'cmp.new4', 'cmp.new5', 'cmp.new6']

export default function Comparison() {
  const { t } = useT()

  return (
    <section className="comparison-section">
      <div className="container">
        <div className="section-tag">{t('cmp.tag')}</div>
        <h2 className="section-h2">{t('cmp.title')}</h2>
        <p className="section-sub">{t('cmp.sub')}</p>

        <div className="cmp-grid">
          <div className="cmp-col cmp-old fade-up">
            <div className="cmp-header">
              <span className="cmp-tag cmp-tag-old">{t('cmp.before')}</span>
              <h3>{t('cmp.oldTitle')}</h3>
            </div>
            <ul className="cmp-list">
              {BEFORE.map((key) => (
                <li key={key} className="cmp-bad">
                  <span className="cmp-icon">✕</span>
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>

          <div className="cmp-col cmp-new fade-up">
            <div className="cmp-header">
              <span className="cmp-tag cmp-tag-new">{t('cmp.with')}</span>
              <h3>{t('cmp.newTitle')}</h3>
            </div>
            <ul className="cmp-list">
              {AFTER.map((key) => (
                <li key={key} className="cmp-good">
                  <span className="cmp-icon">✓</span>
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
