import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { OTHERS } from '../content/voices'
import { useT } from '../hooks/useT'
import type { TranslationKey } from '../i18n'

/* "Muu keel…": a frosted popover instead of the native <select>,
   whose option list the OS draws (white and unstyled on Windows).
   Languages are pills in two groups, Baltic/Nordic first, each with
   its greeting. It's a listbox: arrow keys move, Enter picks,
   Escape closes and returns focus to the button. On phones it opens
   as a sheet from the bottom of the screen. */

type Props = { selected: string | null; onPick: (code: string) => void }

const NEAR = OTHERS.filter((s) => s.near)
const OTHER = OTHERS.filter((s) => !s.near)
const ORDER = [...NEAR, ...OTHER] // keyboard order = visual order

export default function LanguagePicker({ selected, onPick }: Props) {
  const { t } = useT()
  const [open, setOpen] = useState(false)
  const wrap = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const opts = useRef<(HTMLButtonElement | null)[]>([])

  const groups = [
    { id: 'near', label: t('listen.groupNear'), items: NEAR },
    { id: 'other', label: t('listen.groupOther'), items: OTHER },
  ]

  // Close on a click anywhere outside.
  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => { if (!wrap.current?.contains(e.target as Node)) setOpen(false) }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [open])

  // Opening focuses the selected language (or the first one).
  useEffect(() => {
    if (!open) return
    const i = Math.max(0, ORDER.findIndex((s) => s.code === selected))
    opts.current[i]?.focus()
  }, [open, selected])

  const close = (refocus = true) => { setOpen(false); if (refocus) trigger.current?.focus() }

  const onKey = (e: KeyboardEvent, i: number) => {
    const n = ORDER.length
    const move: Record<string, number> = { ArrowDown: i + 1, ArrowRight: i + 1, ArrowUp: i - 1, ArrowLeft: i - 1, Home: 0, End: n - 1 }
    if (e.key in move) { e.preventDefault(); opts.current[(move[e.key] + n) % n]?.focus() }
    else if (e.key === 'Escape') { e.preventDefault(); close() }
    else if (e.key === 'Tab') close(false)
  }

  return (
    <div className="lp" ref={wrap}>
      <button
        ref={trigger}
        type="button"
        className={`lp-trigger${selected ? ' on' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="lp-panel"
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => { if (e.key === 'ArrowDown' && !open) { e.preventDefault(); setOpen(true) } }}
      >
        {selected ? t(`lang.${selected}` as TranslationKey) : t('listen.other')}
        <span className="lp-chev" aria-hidden="true" />
      </button>

      {open && (
        <div className="lp-panel" id="lp-panel" role="listbox" aria-label={t('listen.otherLabel')}>
          {groups.map((g) => (
            <div key={g.id} role="group" aria-labelledby={`lp-h-${g.id}`} className="lp-group">
              <p className="lp-h" id={`lp-h-${g.id}`}>{g.label}</p>
              <div className="lp-grid">
                {g.items.map((s) => {
                  const i = ORDER.indexOf(s)
                  const isSel = s.code === selected
                  return (
                    <button
                      key={s.code}
                      ref={(el) => { opts.current[i] = el }}
                      type="button"
                      role="option"
                      aria-selected={isSel}
                      tabIndex={-1}
                      className="lp-opt"
                      onClick={() => { onPick(s.code); close() }}
                      onKeyDown={(e) => onKey(e, i)}
                    >
                      <span>{t(`lang.${s.code}` as TranslationKey)}</span>
                      <small lang={s.code} dir="auto">{s.greeting}</small>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
