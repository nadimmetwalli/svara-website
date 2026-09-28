import { useEffect, useState } from 'react'

/* ── A very small router ─────────────────────────────────────
   Three pages: "/", "/hinnad" and "/meist". Not worth a
   dependency. Links go through navigate(); the back button fires
   popstate; hash targets ("/#miks") scroll once the page renders.
   Netlify serves index.html for every path (see netlify.toml).
────────────────────────────────────────────────────────────── */

export type Route = '/' | '/hinnad' | '/meist'

const ROUTES: Route[] = ['/', '/hinnad', '/meist']
const NAV_EVENT = 'svara:navigate'

function current(): Route {
  const p = window.location.pathname.replace(/\/+$/, '') || '/'
  return (ROUTES as string[]).includes(p) ? (p as Route) : '/'
}

export function scrollToHash(hash: string, smooth = true) {
  if (!hash || hash === '#') return
  const el = document.getElementById(decodeURIComponent(hash.slice(1)))
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: smooth && !reduce ? 'smooth' : 'auto', block: 'start' })
}

/** Go to an internal href such as "/hinnad" or "/#miks". */
export function navigate(href: string) {
  const url = new URL(href, window.location.origin)
  const samePage = url.pathname === window.location.pathname
  if (samePage && url.hash) {
    history.pushState(null, '', url.pathname + url.search + url.hash)
    scrollToHash(url.hash)
    return
  }
  history.pushState(null, '', url.pathname + url.search + url.hash)
  window.dispatchEvent(new Event(NAV_EVENT))
  // Let the new page render, then land on the hash or the top.
  requestAnimationFrame(() => {
    if (url.hash) scrollToHash(url.hash, false)
    else window.scrollTo(0, 0)
  })
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(current)
  useEffect(() => {
    const sync = () => setRoute(current())
    // Back/forward: re-render, then land on the section the URL names.
    const onPop = () => {
      sync()
      const hash = window.location.hash
      if (hash) requestAnimationFrame(() => scrollToHash(hash, false))
    }
    window.addEventListener('popstate', onPop)
    window.addEventListener(NAV_EVENT, sync)
    return () => {
      window.removeEventListener('popstate', onPop)
      window.removeEventListener(NAV_EVENT, sync)
    }
  }, [])
  return route
}
