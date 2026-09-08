import { useContext } from 'react'
import { LanguageContext } from '../contexts/language-context'

/** Access the active language, the setter, and the `t` lookup. */
export function useT() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useT must be used inside <LanguageProvider>')
  return ctx
}
