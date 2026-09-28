/* ── Site switches and media slots ───────────────────────────
   Everything here is a decision or an asset that isn't final yet.
   Change it here; the components follow.
────────────────────────────────────────────────────────────── */

import broneeringud from '../assets/dashboard/broneeringud.webp'
import hero from '../assets/dashboard/hero.webp'
import koned from '../assets/dashboard/koned.webp'
import ulevaade from '../assets/dashboard/ulevaade.webp'

/* Dashboard screenshots (16:10 WebP, no browser chrome), in tab
   order: calls, bookings, overview. If this list is ever emptied the
   "Kõik ühes vaates" section is not rendered at all: a placeholder
   frame would look unfinished on the live site. All data shown is
   sample data from the "Näidishotell" demo account. */
export const DASHBOARD_SHOTS: string[] = [koned, broneeringud, ulevaade]

/* The product window in the hero: the Juhtimiskeskus (control centre). */
export const HERO_SHOT = hero

/* Founding-hotel offer on the pricing page. Set to false once ten
   hotels have signed, so the page never promises spots that are gone. */
export const FOUNDING_OFFER_OPEN = true

/* Where "Proovi ise" goes. Until a demo number or in-browser call
   exists, it opens the demo form. For a phone number use 'tel:+372…'. */
export const TRY_IT_HREF = '/#demo'

/* Demo form endpoint (Formspree, delivers to info@svara-ai.com). */
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrergzpp'

export const CONTACT_EMAIL = 'info@svara-ai.com'

/* Shown as written; `tel:` links use CONTACT_PHONE_TEL. */
export const CONTACT_PHONE = '(+372) 5865 1641'
export const CONTACT_PHONE_TEL = '+37258651641'
