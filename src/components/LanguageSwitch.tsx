import { LANGS } from '../i18n'
import { useT } from '../hooks/useT'

export default function LanguageSwitch() {
  const { lang, setLang, t } = useT()

  return (
    <div className="lang-switch" role="group" aria-label={t('nav.langLabel')}>
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          className={`lang-btn${code === lang ? ' is-active' : ''}`}
          aria-pressed={code === lang}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
