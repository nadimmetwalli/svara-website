import { createContext } from 'react'
import type { Lang, TranslationKey } from '../i18n'

export interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: TranslationKey) => string
}

/* Lives in its own module so LanguageProvider.tsx exports only a
   component — keeps react-refresh able to hot-reload the provider. */
export const LanguageContext = createContext<LanguageContextValue | null>(null)
