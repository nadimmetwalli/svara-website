/* ── "Kuula ise": SVARA's voice in 23 languages ──────────────
   Every clip is SVARA answering the phone with the same greeting:
   "Hello, you've reached the hotel! I can help you book a room, tell
   you about the spa and the restaurant, or put you through to
   reception. How can I help?"

   The wording differs slightly in some languages, so each clip names
   its `wording`; the translation shown under the player (listen.w.*
   in i18n.ts) matches what that clip actually says.

   Files: /public/calls/voices/<code>.mp3. Adding a language means
   adding its file, a row below and its `lang.<code>` name in i18n.ts.
────────────────────────────────────────────────────────────── */

export type Wording = 'std' | 'baltic' | 'nordic' | 'plru' | 'hi' | 'ja'

export type Voice = {
  code: string        // BCP-47 language tag, also the file name
  greeting: string    // "hello" in that language, shown in the picker
  near: boolean       // Baltic/Nordic neighbour: listed first in the picker
  wording: Wording
  audio: string
}

// [code, greeting, near, wording]
const ROWS: [string, string, boolean, Wording][] = [
  ['et', 'Tere', false, 'std'],
  ['en', 'Hello', false, 'std'],
  ['fr', 'Bonjour', false, 'std'],
  ['ru', 'Здравствуйте', false, 'plru'],
  ['ar', 'مرحبا', false, 'std'],
  ['lv', 'Sveiki', true, 'baltic'],
  ['lt', 'Labas', true, 'baltic'],
  ['fi', 'Hei', true, 'nordic'],
  ['sv', 'Hej', true, 'nordic'],
  ['da', 'Hej', true, 'nordic'],
  ['no', 'Hei', true, 'nordic'],
  ['de', 'Guten Tag', false, 'std'],
  ['pl', 'Dzień dobry', false, 'plru'],
  ['es', 'Hola', false, 'std'],
  ['it', 'Ciao', false, 'nordic'],
  ['pt', 'Olá', false, 'std'],
  ['nl', 'Hallo', false, 'nordic'],
  ['el', 'Γεια σας', false, 'std'],
  ['tr', 'Merhaba', false, 'std'],
  ['hi', 'नमस्ते', false, 'hi'],
  ['zh', '你好', false, 'std'],
  ['ja', 'こんにちは', false, 'ja'],
  ['ko', '안녕하세요', false, 'std'],
]

export const VOICES: Voice[] = ROWS.map(([code, greeting, near, wording]) => ({
  code, greeting, near, wording, audio: `/calls/voices/${code}.mp3`,
}))

/* The five languages shown as buttons; the rest sit under "Muu keel…".
   Labels are each language's own name. */
export const FEATURED: { code: string; label: string }[] = [
  { code: 'et', label: 'Eesti' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'ru', label: 'Русский' },
  { code: 'ar', label: 'العربية' },
]

export const OTHERS: Voice[] = VOICES.filter((v) => !FEATURED.some((f) => f.code === v.code))
