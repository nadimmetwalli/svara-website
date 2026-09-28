import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { navigate } from '../router'

/** An <a> that routes internal paths ("/hinnad", "/#miks") without a
    reload. Modified clicks (new tab, etc.) and external links behave
    like normal anchors. */
export default function Link({ href = '/', onClick, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (e.defaultPrevented) return
    if (!href.startsWith('/') || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    navigate(href)
  }
  return <a href={href} onClick={handle} {...rest} />
}
