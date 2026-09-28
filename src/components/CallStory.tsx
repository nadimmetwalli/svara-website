import { useEffect, useRef, useState } from 'react'
import { useT } from '../hooks/useT'
import type { TranslationKey } from '../i18n'

/* Apple's pinned product story: the "device" stays put while four
   moments of one call scroll past. The step nearest the middle of
   the screen is active. With reduced motion every step stays
   readable and the device shows the finished result. */

const STEPS: [TranslationKey, TranslationKey][] = [
  ['story.st1h', 'story.st1p'],
  ['story.st2h', 'story.st2p'],
  ['story.st3h', 'story.st3p'],
  ['story.st4h', 'story.st4p'],
]

export default function CallStory() {
  const { t } = useT()
  const [reduce] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [active, setActive] = useState(0)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const box = stepsRef.current
    if (!box || reduce) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.step)) })
    }, { rootMargin: '-45% 0px -45% 0px' })
    ;[...box.children].forEach((c) => io.observe(c))
    return () => io.disconnect()
  }, [reduce])

  const on = (i: number) => (!reduce && i === active ? ' on' : '')

  return (
    <section className="sec" aria-labelledby="story-h" style={{ paddingTop: 40 }}>
      <div className="wide">
        <div className="sec-head center"><h2 className="headline" id="story-h">{t('story.title')}</h2></div>
        <div className={`story${reduce ? '' : ' js'}`}>
          <div className="story-stage">
            <div className="device" aria-hidden="true">
              <div className={`layer ring${on(0)}`}>
                <div className="avatar-lg">AK</div><b>+372 5 …</b><span>{t('story.incoming')}</span>
              </div>
              <div className={`layer${on(1)}`}>
                <span className="chip">{t('story.lang')}</span>
                <div className="turn t-g" style={{ maxWidth: '90%' }}>{t('story.g')}</div>
                <div className="turn t-s" style={{ maxWidth: '90%', justifySelf: 'end' }}>{t('story.s')}</div>
              </div>
              <div className={`layer${on(2)}`}>
                <div className="ticket" style={{ maxWidth: 'none' }}>
                  <small>{t('ticket.new')}</small><b>{t('ticket.room')}</b><span className="ok">{t('ticket.pending')}</span>
                </div>
              </div>
              <div className={`layer final${on(3)}`}>
                <div className="ticket" style={{ maxWidth: 'none' }}>
                  <small>{t('story.transferred')}</small><b>{t('story.table')}</b><span className="ok">{t('story.connected')}</span>
                </div>
                <span className="sms-meta">{t('story.smsNote')}</span>
              </div>
            </div>
          </div>
          <div className="story-steps" ref={stepsRef}>
            {STEPS.map(([h, p], i) => (
              <div key={h} className={`story-step${on(i)}`} data-step={i}>
                <h3>{t(h)}</h3><p>{t(p)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
