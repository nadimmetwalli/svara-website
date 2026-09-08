/* ── SVARA · Language dictionary ────────────────────────────
   Estonian is the site default. index.html ships Estonian meta
   under lang="et"; the provider re-applies the active language
   on mount and swaps <title>, description and the social tags.

   `en` is typed as Record<TranslationKey, string>, so a key added
   to `et` without an English counterpart fails `tsc -b` — and
   therefore fails the Netlify build — rather than silently
   rendering a raw key in production.

   Adding a string: add it to `et`, then to `en`, then use it as
   t('your.key') in a component.
────────────────────────────────────────────────────────────── */

export type Lang = 'et' | 'en'

export const LANGS: Lang[] = ['et', 'en']
export const DEFAULT_LANG: Lang = 'et'
export const STORAGE_KEY = 'svara-lang'

const et = {
  'meta.title': 'SVARA — AI häälkonsjerž hotellidele',
  'meta.description':
    'SVARA on hotellidele loodud AI häälkonsjerž. Vasta igale külalise kõnele, võta broneeringud vastu automaatselt ja paku viietärniteenindust 24/7 igas keeles.',
  'meta.ogDescription':
    'Esimene mitmekeelne AI häälagent, mis kõlab nagu sinu parim töötaja — vastab igale kõnele, igas keeles, ööpäev läbi.',
  'meta.ogLocale': 'et_EE',

  /* ── Navigation ── */
  'nav.product': 'Toode',
  'nav.how': 'Kuidas see töötab',
  'nav.earlyAccess': 'Varajane ligipääs',
  'nav.integrations': 'Integratsioonid',
  'nav.faq': 'KKK',
  'nav.contactSales': 'Võta ühendust',
  'nav.bookDemo': 'Broneeri demo',
  'nav.menu': 'Menüü',
  'nav.langLabel': 'Keelevalik',

  /* ── Hero ── */
  'hero.eyebrow': 'Tehisintellektil põhinev hääletehnoloogia kaasaegsele majutussektorile',
  'hero.title1': 'Hääl, mida sinu',
  'hero.title2': 'külalised mäletavad,',
  'hero.title3': 'igas keeles.',
  'hero.desc':
    'Esimene mitmekeelne AI häälagent, mis kõlab nagu sinu parim töötaja — vastab igale kõnele, igas keeles, ööpäev läbi.',
  'hero.listen': 'Kuula järele',

  /* ── Marquee ── */
  'marquee.languages': 'Räägib sinu külaliste emakeelt',
  'marquee.properties': 'Loodud igat tüüpi majutusasutusele',

  'lang.english': 'Inglise',
  'lang.finnish': 'Soome',
  'lang.estonian': 'Eesti',
  'lang.swedish': 'Rootsi',
  'lang.norwegian': 'Norra',
  'lang.german': 'Saksa',
  'lang.french': 'Prantsuse',
  'lang.spanish': 'Hispaania',
  'lang.portuguese': 'Portugali',
  'lang.italian': 'Itaalia',
  'lang.dutch': 'Hollandi',
  'lang.polish': 'Poola',
  'lang.russian': 'Vene',
  'lang.japanese': 'Jaapani',
  'lang.mandarin': 'Hiina',
  'lang.arabic': 'Araabia',
  'lang.korean': 'Korea',
  'lang.turkish': 'Türgi',
  'lang.hindi': 'Hindi',
  'lang.greek': 'Kreeka',

  'prop.boutique': 'Butiikhotellid',
  'prop.restaurants': 'Restoranid',
  'prop.city': 'Linnahotellid',
  'prop.spa': 'Spaa ja heaolu',
  'prop.spaResorts': 'Spaakuurordid',
  'prop.airport': 'Lennujaamahotellid',
  'prop.luxury': 'Luksuskuurordid',
  'prop.vacation': 'Puhkemajad',
  'prop.bnb': 'Hommikusöögiga külalistemajad',
  'prop.serviced': 'Teenindusega apartemendid',
  'prop.hostels': 'Hostelid',
  'prop.conference': 'Konverentsihotellid',
  'prop.eco': 'Ökomajutus',
  'prop.golf': 'Golfikuurordid',
  'prop.design': 'Disainhotellid',
  'prop.heritage': 'Ajaloolised majutuskohad',

  /* ── Stats ── */
  'stats.answer.label': 'Kõnedele vastamise määr',
  'stats.answer.desc': 'Ükski kõne ei jää vastamata',
  'stats.response.label': 'Reaktsiooniaeg',
  'stats.response.desc': 'Kohene vastus, iga kord',
  'stats.languages.label': 'Toetatud keelt',
  'stats.languages.desc': 'Teeninda iga külalist tema keeles',
  'stats.always.label': 'Alati avatud',
  'stats.always.desc': 'Ei pause ega pühi',

  /* ── Comparison ── */
  'cmp.tag': 'Miks SVARA',
  'cmp.title': 'Nutikam viis külaliste kõnede haldamiseks',
  'cmp.sub':
    'Traditsiooniline vastuvõtt jätab kõnesid vastamata, kaotab broneeringuid ja komistab keelebarjääri otsa. SVARA lahendab selle kõik — lõplikult.',
  'cmp.before': 'Enne SVARAt',
  'cmp.oldTitle': 'Traditsiooniline vastuvõtt',
  'cmp.old1': 'Jätab tipptundidel kõnesid vastamata',
  'cmp.old2': 'Töötab ainult tööajal',
  'cmp.old3': 'Keelebarjäär külalistega',
  'cmp.old4': 'Käsitsi tehtav, vigadele avatud broneerimine',
  'cmp.old5': 'Puudub analüütika ja ülevaade kõnedest',
  'cmp.old6': 'Kõrged tööjõukulud, mis ei skaleeru',
  'cmp.with': 'SVARAga',
  'cmp.newTitle': 'AI häälkonsjerž',
  'cmp.new1': 'Vastab igale kõnele koheselt',
  'cmp.new2': 'Saadaval 24 tundi, 7 päeva nädalas',
  'cmp.new3': 'Räägib emakeelena 20+ keelt',
  'cmp.new4': 'Broneerib toad automaatselt juba kõne ajal',
  'cmp.new5': 'Täielik analüütika iga suhtluse kohta',
  'cmp.new6': 'Fikseeritud hind, skaleerub igale mahule',

  /* ── Live demo ── */
  'live.tag': 'Otsedemo',
  'live.title':
    'Kuula, kui loomulikult meie AI võtab vastu broneeringuid, vastab küsimustele ja pakub lisateenuseid — täpselt nagu koolitatud töötaja.',
  'live.f1.title': '24/7 kõnede haldus',
  'live.f1.desc': 'Ükski kõne ei jää enam vastamata',
  'live.f2.title': 'Mitmekeelne',
  'live.f2.desc': 'Räägib sinu klientide keelt',
  'live.f3.title': 'Kiire seadistus',
  'live.f3.desc': 'Töös vähem kui 48 tunniga',
  'live.f4.title': 'Taastatud tulu',
  'live.f4.desc': 'Muuda vastamata kõned otsebroneeringuteks',
  'live.playerHeader': 'Kuula SVARAt töös',
  'live.playerLabel': 'Päris kõnesalvestis · SVARA AI konsjerž',
  'live.playAria': 'Esita salvestis',
  'live.pauseAria': 'Peata salvestis',
  'live.progressAria': 'Esituse edenemine',

  /* ── Features ── */
  'feat.tag': 'Võimalused',
  'feat.title': 'Sinu ettevõtte kõige usaldusväärsem töötaja.',
  'feat.sub': 'Alati kohal. Ei väsi kunagi. Laitmatult koolitatud. Ei jää kunagi haigeks.',
  'feat.f1.title': '24/7 kõnedele vastamine',
  'feat.f1.desc':
    'Ükski kõne ei jää vastamata, ka tipptundidel või keset ööd. Sinu AI konsjerž vastab koheselt, iga kord, ka pühade ajal.',
  'feat.f2.title': 'PMS-integratsioon',
  'feat.f2.desc':
    'Broneeringud ja külaliste andmed liiguvad otse sinu majutuse haldussüsteemi täieliku täpsusega — ilma käsitsi sisestamise, vigade ja viivitusteta.',
  'feat.f3.title': 'Nutikas lisamüük',
  'feat.f3.desc':
    'AI pakub toauuendusi, pakette ja hilisemat väljaregistreerimist, tõstes tulu broneeringu kohta automaatselt — ilma pealetükkivuseta.',
  'feat.f4.title': 'Broneeringud ja päringute suunamine',
  'feat.f4.desc':
    'Haldab koheselt broneeringuid ja tubade saadavust ning suunab keerukamad päringud edasi — vabastades meeskonna isiklikuks teeninduseks.',
  'feat.f5.title': 'Mitmekeelne tugi',
  'feat.f5.desc':
    'Inglise, saksa, soome, rootsi ja 15+ muud keelt — külaline tunneb end kohe mõistetuna, olenemata sellest, kust ta helistab.',
  'feat.f6.title': 'Analüütika töölaud',
  'feat.f6.desc':
    'Jälgi töödeldud kõnesid, taastatud tulu, tipptunde ja päringuid. Täielik ülevaade igast külalissuhtlusest koos rakendatavate järeldustega.',
  'feat.insights': 'Ülevaade',

  /* ── How it works ── */
  'how.tag': 'Kuidas see töötab',
  'how.title1': 'Käivitu ja ühenda',
  'how.title2': 'vähem kui 48 tunniga',
  'how.sub':
    'Uut riistvara pole vaja. Personali koolitama ei pea. Integreerume otse süsteemidega, mida sa juba kasutad.',
  'how.cta': 'Alusta integratsiooni →',
  'how.s1.title': 'Üleandmine',
  'how.s1.desc':
    'Suuna oma telefoniliin SVARA numbrile, kui oled eemal või tipptunni ajal. Sinu senine number jääb alles — SVARA hoolitseb ülejäänu eest taustal.',
  'how.s2.title': 'Vestlus',
  'how.s2.desc':
    'Külalised saavad vastused kohe. SVARA leiab vabad toad, vastab küsimustele mugavuste kohta, võtab vastu broneeringuid ja lahendab konsjeržipäringuid — loomulikult ja professionaalselt igas keeles.',
  'how.s3.title': 'Sujuv PMS-integratsioon',
  'how.s3.desc':
    'Broneeringud ja külaliste andmed liiguvad otse sinu majutuse haldussüsteemi (Opera, Mews, Cloudbeds jt). Iga suhtlus salvestatakse ja sünkroonitakse — ilma käsitsi sisestamise ja vigadeta.',

  /* ── Founding hotels ── */
  'found.badge': 'Piiratud programm',
  'found.spots': 'asutajakohta veel vaba',
  'found.title': 'Saa asutajahotelliks',
  'found.sub':
    'Teeme koostööd valitud grupi edumeelsete hotellidega, et kujundada AI-põhise külalisteeninduse tulevikku. Asutajapartnerid saavad eluaegse hinna, otsese sõnaõiguse toote arendamisel ja edumaa, mis tuleb ainult esimesena olemisest.',
  'found.c1.title': 'Eluaegne hinnalukk',
  'found.c1.desc':
    'Sinu hind on fikseeritud käivitushinnaga, igaveseks. Kui SVARA kasvab ja hinnad tõusevad, sinu kulu ei muutu.',
  'found.c2.title': 'Kasutuselevõtt 24 tunniga',
  'found.c2.desc':
    'Käivitud vähem kui 24 tunniga koos pühendunud toega meie asutajatiimilt — mitte abikeskuse piletiga.',
  'found.c3.title': 'Kujunda tootekaarti',
  'found.c3.desc':
    'Otsene ligipääs meie tiimile. Sinu igapäevased vajadused ja tagasiside määravad, mida me järgmisena ehitame.',
  'found.c4.title': 'Esimese eelis',
  'found.c4.desc':
    'Paista silma enne, kui AI häälkonsjerž muutub standardiks. Külalised märkavad — ja mäletavad — hotelle, kes olid esimesed.',
  'found.cta': 'Kandideeri varajasele ligipääsule →',
  'found.note': 'Kohustusi ei kaasne · Vastame ühe tööpäeva jooksul',

  /* ── Integrations ── */
  'int.tag': 'Integratsioonid',
  'int.title': 'Ühildub sinu olemasolevate süsteemidega',
  'int.sub':
    'SVARA töötab tööriistadega, mida sinu hotell juba kasutab — midagi ei pea välja vahetama.',

  /* ── Demo form ── */
  'demo.tag': 'Alusta',
  'demo.title': 'Näe SVARAt töös',
  'demo.desc':
    'Broneeri 30-minutiline demo ja vaata täpselt, kuidas SVARA sinu hotellis töötaks. Ei mingeid kohustusi ega survet — ainult tulemused.',
  'demo.b1': 'Otsedemo AI konsjeržist',
  'demo.b2': 'Sinu majutusasutuse tüübile kohandatud seadistus',
  'demo.b3': 'Sinu kõnemahule vastav hinnastus',
  'demo.b4': 'Käivitu vähem kui 24 tunniga',
  'demo.firstName': 'Eesnimi',
  'demo.firstNamePh': 'Marek',
  'demo.lastName': 'Perekonnanimi',
  'demo.lastNamePh': 'Tamm',
  'demo.email': 'Töö e-post',
  'demo.emailPh': 'marek@kaldamaehotell.ee',
  'demo.hotel': 'Hotelli / majutusasutuse nimi',
  'demo.hotelPh': 'Kaldamäe Hotell Tallinn',
  'demo.rooms': 'Tubade arv',
  'demo.roomsPlaceholder': 'Vali vahemik',
  'demo.rooms1': 'Alla 50 toa',
  'demo.rooms2': '50–150 tuba',
  'demo.rooms3': '150–300 tuba',
  'demo.rooms4': '300+ tuba',
  'demo.submit': 'Broneeri demo',
  'demo.sending': 'Saadan…',
  'demo.note': 'Vastame ühe tööpäeva jooksul.',
  'demo.successTitle': 'Broneeritud!',
  'demo.successDesc':
    'Saadame kinnituse peagi sinu e-postile. Ootame põnevusega võimalust SVARAt näidata.',
  'demo.error':
    'Midagi läks valesti. Kirjuta meile otse aadressil info@svara-ai.com ja vastame ühe päeva jooksul.',

  /* ── FAQ ── */
  'faq.tag': 'KKK',
  'faq.title': 'Korduma kippuvad küsimused',
  'faq.sub':
    'Kas jäi veel küsimusi? Vastasime allpool kõige sagedasematele, et saaksid teha teadliku otsuse.',
  'faq.stillQ': 'Kas jäi veel küsimusi?',
  'faq.stillA': 'Võta kohe ühendust ja aitame sind kõigi küsimustega.',
  'faq.stillCta': 'Broneeri demo →',
  'faq.q1': 'Kuidas SVARA AI minu olemasoleva broneerimissüsteemiga liidestub?',
  'faq.a1':
    'SVARA ühendub API kaudu kõigi suuremate PMS-platvormidega, sealhulgas Opera, Mews ja Cloudbeds. Seadistus võtab alla 48 tunni ja riistvara muuta ei ole vaja.',
  'faq.q2': 'Kas AI kõlab robotlikult või ajab välismaised külalised endast välja?',
  'faq.a2':
    'Ei. SVARA kasutab kaasaegset neurovõrgul põhinevat häälesünteesi, mis kõlab loomulikult ja soojalt. Paljud külalised ei saagi aru, et räägivad AI-ga — ja see on taotluslik.',
  'faq.q3': 'Kas SVARA asendab minu vastuvõtumeeskonna?',
  'faq.a3':
    'SVARA võtab enda peale rutiinsed kõned, et sinu meeskond saaks keskenduda väärtuslikule vahetule teenindusele. See on jõu võimendaja, mitte asendaja.',
  'faq.q4': 'Kuidas tagate meie külaliste isikuandmete turvalisuse?',
  'faq.a4':
    'Kõik andmed on krüpteeritud nii edastamisel kui ka salvestatuna. Järgime GDPR-i nõudeid ega müü ega jaga külaliste andmeid kunagi. Kõik vestlussalvestised jäävad täielikult sinu omandisse.',
  'faq.q5': 'Kas SVARA saab hakkama mitme keelega?',
  'faq.a5':
    'Jah — SVARA toetab 20+ keelt ja tuvastab helistaja keele automaatselt, vastates samas keeles ilma igasuguse käsitsi seadistamiseta.',
  'faq.q6': 'Kas ma näen aruannet selle kohta, kuidas SVARA AI-l läheb?',
  'faq.a6':
    'Kindlasti. Sinu reaalajas töölaud näitab kõiki kõnesid, broneeringuid, meeleoluskoore, teenitud tulu ja tipptundide analüütikat — uuendatuna reaalajas.',

  /* ── CTA banner ── */
  'cta.title': 'Valmis külaliskogemust muutma?',
  'cta.desc':
    'Liitu hotellidega, kes juba kasutavad SVARAt, et pakkuda viietärniteenindust ööpäev läbi.',

  /* ── Footer ── */
  'footer.tagline': 'AI häälkonsjerž, mis on loodud majutussektorile.',
  'footer.product': 'Toode',
  'footer.features': 'Võimalused',
  'footer.early': 'Varajane ligipääs',
  'footer.founding': 'Asutajahotellid',
  'footer.company': 'Ettevõte',
  'footer.contact': 'Kontakt',
  'footer.legal':
    'SVARA TECHNOLOGIES OÜ · Registrikood: 17453177 · Harju maakond, Tallinn, Kesklinna linnaosa, Narva mnt 2-62, 10117, Eesti',
  'footer.rights': '© 2026 SVARA TECHNOLOGIES OÜ. Kõik õigused kaitstud.',
  'footer.builtFor': 'Loodud majutussektorile. Töötab tehisintellektil.',
} as const

export type TranslationKey = keyof typeof et

const en: Record<TranslationKey, string> = {
  'meta.title': 'SVARA — AI Voice Concierge for Hotels',
  'meta.description':
    'SVARA is the AI voice concierge built for hotels. Answer every guest call, handle bookings automatically, and deliver five-star service 24/7 in any language.',
  'meta.ogDescription':
    'The first multilingual AI voice agent that sounds like your best employee — answering every call, in any language, 24/7.',
  'meta.ogLocale': 'en_US',

  /* ── Navigation ── */
  'nav.product': 'Product',
  'nav.how': 'How It Works',
  'nav.earlyAccess': 'Early Access',
  'nav.integrations': 'Integrations',
  'nav.faq': 'FAQ',
  'nav.contactSales': 'Contact Sales',
  'nav.bookDemo': 'Book a Demo',
  'nav.menu': 'Menu',
  'nav.langLabel': 'Language',

  /* ── Hero ── */
  'hero.eyebrow': 'AI powered voice intelligence for modern hospitality operations',
  'hero.title1': 'The voice your',
  'hero.title2': 'guests remember,',
  'hero.title3': 'in every language.',
  'hero.desc':
    'The first multilingual AI voice agent that sounds like your best employee — answering every call, in any language, 24/7.',
  'hero.listen': 'Hear It Live',

  /* ── Marquee ── */
  'marquee.languages': 'Speaks your guests’ language natively',
  'marquee.properties': 'Built for every property type',

  'lang.english': 'English',
  'lang.finnish': 'Finnish',
  'lang.estonian': 'Estonian',
  'lang.swedish': 'Swedish',
  'lang.norwegian': 'Norwegian',
  'lang.german': 'German',
  'lang.french': 'French',
  'lang.spanish': 'Spanish',
  'lang.portuguese': 'Portuguese',
  'lang.italian': 'Italian',
  'lang.dutch': 'Dutch',
  'lang.polish': 'Polish',
  'lang.russian': 'Russian',
  'lang.japanese': 'Japanese',
  'lang.mandarin': 'Mandarin',
  'lang.arabic': 'Arabic',
  'lang.korean': 'Korean',
  'lang.turkish': 'Turkish',
  'lang.hindi': 'Hindi',
  'lang.greek': 'Greek',

  'prop.boutique': 'Boutique Hotels',
  'prop.restaurants': 'Restaurants',
  'prop.city': 'City Hotels',
  'prop.spa': 'Spa & Wellness',
  'prop.spaResorts': 'Spa Resorts',
  'prop.airport': 'Airport Hotels',
  'prop.luxury': 'Luxury Resorts',
  'prop.vacation': 'Vacation Rentals',
  'prop.bnb': 'Bed & Breakfasts',
  'prop.serviced': 'Serviced Apartments',
  'prop.hostels': 'Hostels',
  'prop.conference': 'Conference Hotels',
  'prop.eco': 'Eco Lodges',
  'prop.golf': 'Golf Resorts',
  'prop.design': 'Design Hotels',
  'prop.heritage': 'Heritage Properties',

  /* ── Stats ── */
  'stats.answer.label': 'Call Answer Rate',
  'stats.answer.desc': 'Zero missed calls, ever',
  'stats.response.label': 'Response Time',
  'stats.response.desc': 'Instant, every single time',
  'stats.languages.label': 'Languages Supported',
  'stats.languages.desc': 'Serve every guest natively',
  'stats.always.label': 'Always On',
  'stats.always.desc': 'No breaks, no holidays',

  /* ── Comparison ── */
  'cmp.tag': 'Why SVARA',
  'cmp.title': 'The smarter way to handle guest calls',
  'cmp.sub':
    'Traditional front desks miss calls, lose bookings, and struggle with language barriers. SVARA fixes all of that — permanently.',
  'cmp.before': 'Before SVARA',
  'cmp.oldTitle': 'Traditional Reception',
  'cmp.old1': 'Misses calls during peak hours',
  'cmp.old2': 'Limited to business hours only',
  'cmp.old3': 'Language barriers with guests',
  'cmp.old4': 'Manual, error-prone booking process',
  'cmp.old5': 'No analytics or call insights',
  'cmp.old6': 'High staffing costs that don’t scale',
  'cmp.with': 'With SVARA',
  'cmp.newTitle': 'AI Voice Concierge',
  'cmp.new1': 'Answers every call, instantly',
  'cmp.new2': 'Available 24 hours, 7 days a week',
  'cmp.new3': 'Speaks 20+ languages natively',
  'cmp.new4': 'Books rooms automatically during the call',
  'cmp.new5': 'Full analytics on every interaction',
  'cmp.new6': 'Fixed cost, scales to any volume',

  /* ── Live demo ── */
  'live.tag': 'Live Demo',
  'live.title':
    'Experience how naturally our AI handles bookings, answers questions, and upsells — exactly like a trained staff member would.',
  'live.f1.title': '24/7 call handling',
  'live.f1.desc': 'Never miss a call again',
  'live.f2.title': 'Multilingual',
  'live.f2.desc': 'Speaks your customers’ language',
  'live.f3.title': 'Instant setup',
  'live.f3.desc': 'Live in under 48 hours',
  'live.f4.title': 'Revenue recovery',
  'live.f4.desc': 'Turn missed calls into direct bookings',
  'live.playerHeader': 'Hear SVARA in Action',
  'live.playerLabel': 'Real call recording · SVARA AI concierge',
  'live.playAria': 'Play recording',
  'live.pauseAria': 'Pause recording',
  'live.progressAria': 'Playback progress',

  /* ── Features ── */
  'feat.tag': 'Features',
  'feat.title': 'Your business’s most reliable employee.',
  'feat.sub': 'Always on. Never tired. Perfectly trained. Never calls in sick.',
  'feat.f1.title': '24/7 Call Answering',
  'feat.f1.desc':
    'Never miss a single call, even during peak hours or the middle of the night. Your AI concierge picks up instantly, every time, holidays included.',
  'feat.f2.title': 'PMS Integration',
  'feat.f2.desc':
    'Reservations and guest data flow directly into your property management system with full accuracy — no manual re-entry, no errors, no delays.',
  'feat.f3.title': 'Smart Upselling',
  'feat.f3.desc':
    'AI suggests room upgrades, packages, and late check-outs to increase revenue per booking automatically — without being pushy.',
  'feat.f4.title': 'Reservations + Event Triage',
  'feat.f4.desc':
    'Instantly handles bookings, availability, and routes complex queries — freeing your team for high-touch interactions.',
  'feat.f5.title': 'Multilingual Support',
  'feat.f5.desc':
    'English, German, Finnish, Swedish and 15+ more — guests feel understood instantly, no matter where they’re calling from.',
  'feat.f6.title': 'Analytics Dashboard',
  'feat.f6.desc':
    'Track calls processed, revenue recovered, peak times, and requests. Full visibility into every guest interaction with actionable insights.',
  'feat.insights': 'Insights',

  /* ── How it works ── */
  'how.tag': 'How It Works',
  'how.title1': 'Get live and connected',
  'how.title2': 'in less than 48 hours',
  'how.sub':
    'No new hardware. No training staff. We integrate directly into the systems you already use.',
  'how.cta': 'Start your integration →',
  'how.s1.title': 'The Handoff',
  'how.s1.desc':
    'Simply set your phone line to forward to your unique SVARA number while you’re away or during peak rush hours. You keep your existing number — SVARA handles it all behind the scenes.',
  'how.s2.title': 'The Conversation',
  'how.s2.desc':
    'Guests get answers instantly. SVARA navigates room availability, answers questions about amenities, handles booking requests, and manages concierge queries — naturally and professionally in any language.',
  'how.s3.title': 'Seamless PMS Integration',
  'how.s3.desc':
    'Bookings and guest data flow directly into your property management system (Opera, Mews, Cloudbeds, and more). Every interaction is logged and synced — no manual entry, no errors.',

  /* ── Founding hotels ── */
  'found.badge': 'Limited Programme',
  'found.spots': 'founding spots remaining',
  'found.title': 'Become a founding hotel',
  'found.sub':
    'We’re partnering with a select group of forward-thinking hotels to shape the future of AI-powered guest services. Founding partners get lifetime pricing, direct product input, and a competitive edge that only comes from being first.',
  'found.c1.title': 'Lifetime price lock',
  'found.c1.desc':
    'Your rate is fixed at launch pricing, forever. As SVARA scales and pricing increases, your cost never changes.',
  'found.c2.title': '24-hour onboarding',
  'found.c2.desc':
    'Go live in under 24 hours with dedicated setup support from our founding team — not a help centre ticket.',
  'found.c3.title': 'Shape the roadmap',
  'found.c3.desc':
    'Direct access to our team. Your operational needs and feedback drive the features we build next.',
  'found.c4.title': 'First-mover advantage',
  'found.c4.desc':
    'Stand out before AI voice concierge becomes standard. Guests notice — and remember — the hotels that led.',
  'found.cta': 'Apply for early access →',
  'found.note': 'No commitment required · We respond within one business day',

  /* ── Integrations ── */
  'int.tag': 'Integrations',
  'int.title': 'Connects with your existing stack',
  'int.sub': 'SVARA works with the tools your hotel already uses — no rip-and-replace required.',

  /* ── Demo form ── */
  'demo.tag': 'Get Started',
  'demo.title': 'See SVARA in action',
  'demo.desc':
    'Book a 30-minute demo and see exactly how SVARA would work for your hotel. No commitment, no pressure — just results.',
  'demo.b1': 'Live demo of the AI concierge',
  'demo.b2': 'Setup tailored to your property type',
  'demo.b3': 'Pricing aligned to your call volume',
  'demo.b4': 'Go live in under 24 hours',
  'demo.firstName': 'First Name',
  'demo.firstNamePh': 'Marco',
  'demo.lastName': 'Last Name',
  'demo.lastNamePh': 'Rodriguez',
  'demo.email': 'Work Email',
  'demo.emailPh': 'marco@hotelpalacio.com',
  'demo.hotel': 'Hotel / Property Name',
  'demo.hotelPh': 'Hotel Palacio Barcelona',
  'demo.rooms': 'Number of Rooms',
  'demo.roomsPlaceholder': 'Select range',
  'demo.rooms1': 'Under 50 rooms',
  'demo.rooms2': '50–150 rooms',
  'demo.rooms3': '150–300 rooms',
  'demo.rooms4': '300+ rooms',
  'demo.submit': 'Book My Demo',
  'demo.sending': 'Sending…',
  'demo.note': 'We’ll respond within one business day.',
  'demo.successTitle': 'You’re booked!',
  'demo.successDesc':
    'We’ll send a confirmation to your email shortly. Looking forward to showing you SVARA.',
  'demo.error':
    'Something went wrong. Please email us directly at info@svara-ai.com and we’ll get back to you within a day.',

  /* ── FAQ ── */
  'faq.tag': 'FAQ',
  'faq.title': 'Frequently Asked Questions',
  'faq.sub':
    'Still have questions? We’ve answered some of the most common queries below to help you make an informed decision.',
  'faq.stillQ': 'Still have questions?',
  'faq.stillA': 'Get in touch now and we can help you with all your queries right away.',
  'faq.stillCta': 'Book a Demo →',
  'faq.q1': 'How does SVARA AI integrate with my existing booking system?',
  'faq.a1':
    'SVARA connects via API to all major PMS platforms including Opera, Mews, Cloudbeds, and more. Setup takes under 48 hours with no hardware changes required.',
  'faq.q2': 'Will the AI sound ‘robotic’ or frustrate my international guests?',
  'faq.a2':
    'No. SVARA uses advanced neural voice synthesis that sounds natural and warm. Many guests don’t realise they’re speaking to an AI — and that’s intentional.',
  'faq.q3': 'Does SVARA replace my front-desk team?',
  'faq.a3':
    'SVARA handles routine calls so your team can focus on high-value, in-person guest experiences. It’s a force multiplier, not a replacement.',
  'faq.q4': 'How do you ensure the security of our guests’ private data?',
  'faq.a4':
    'All data is encrypted in transit and at rest. We are GDPR compliant and never sell or share guest data. You retain full ownership of all conversation records.',
  'faq.q5': 'Can SVARA handle multiple languages?',
  'faq.a5':
    'Yes — SVARA supports 20+ languages and detects the caller’s language automatically, responding in kind without any manual configuration.',
  'faq.q6': 'Will I be able to see a report of how SVARA AI is doing?',
  'faq.a6':
    'Absolutely. Your live dashboard shows all calls, bookings, sentiment scores, revenue attributed, and peak-time analytics — updated in real time.',

  /* ── CTA banner ── */
  'cta.title': 'Ready to transform your guest experience?',
  'cta.desc': 'Join hotels already using SVARA to deliver five-star service around the clock.',

  /* ── Footer ── */
  'footer.tagline': 'The AI voice concierge built for hospitality.',
  'footer.product': 'Product',
  'footer.features': 'Features',
  'footer.early': 'Early Access',
  'footer.founding': 'Founding Hotels',
  'footer.company': 'Company',
  'footer.contact': 'Contact',
  'footer.legal':
    'SVARA TECHNOLOGIES OÜ · Registry code: 17453177 · Harju maakond, Tallinn, Kesklinna linnaosa, Narva mnt 2-62, 10117, Estonia',
  'footer.rights': '© 2026 SVARA TECHNOLOGIES OÜ. All rights reserved.',
  'footer.builtFor': 'Built for hospitality. Powered by AI.',
}

export const I18N: Record<Lang, Record<TranslationKey, string>> = { et, en }

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as string[]).includes(value)
}

/* Estonian is the default for everyone. A visitor's own choice
   wins, and ?lang= overrides both so an English link can be
   shared directly (outbound email, LinkedIn) without changing
   what the next visitor sees. Browser language is not sniffed. */
export function resolveLang(): Lang {
  if (typeof window === 'undefined') return DEFAULT_LANG

  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLang(fromUrl)) return fromUrl

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isLang(stored)) return stored
  } catch {
    /* private mode / blocked storage — fall through to the default */
  }

  return DEFAULT_LANG
}
