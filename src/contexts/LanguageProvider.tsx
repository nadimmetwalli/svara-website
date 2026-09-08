import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { I18N, STORAGE_KEY, resolveLang, type Lang, type TranslationKey } from '../i18n'
import { LanguageContext } from './language-context'

function setMeta(selector: string, content: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Lazy initialiser: the correct language is chosen before the first
  // render, so a visitor who picked English never sees Estonian flash.
  const [lang, setLangState] = useState<Lang>(resolveLang)

  // index.html ships Estonian meta; keep <head> in step with the choice.
  useEffect(() => {
    const dict = I18N[lang]
    document.documentElement.lang = lang
    document.title = dict['meta.title']
    setMeta('meta[name="description"]', dict['meta.description'])
    setMeta('meta[property="og:title"]', dict['meta.title'])
    setMeta('meta[property="og:description"]', dict['meta.ogDescription'])
    setMeta('meta[property="og:locale"]', dict['meta.ogLocale'])
    setMeta('meta[name="twitter:title"]', dict['meta.title'])
    setMeta('meta[name="twitter:description"]', dict['meta.ogDescription'])
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* private mode / blocked storage — the choice just won't persist */
    }
  }, [])

  const t = useCallback((key: TranslationKey) => I18N[lang][key], [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return <LanguageContext value={value}>{children}</LanguageContext>
}
