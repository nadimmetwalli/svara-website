/* ── "Kuula ise": SVARA's voice in 23 languages ──────────────
   Every clip is SVARA answering the phone: hello, you've reached the
   hotel; I can help you book a room, tell you about the spa and the
   restaurant, or put you through to reception; how can I help?

   `text` is the exact script each clip was generated from, shown
   under the player in that language while the clip plays. `wording`
   picks the translation into the page language (listen.w.* in
   i18n.ts), since a few languages phrase it slightly differently.

   Files: /public/calls/voices/<code>.mp3. Adding a language means
   adding its file, a row below and its `lang.<code>` name in i18n.ts.
────────────────────────────────────────────────────────────── */

export type Wording = 'std' | 'baltic' | 'nordic' | 'plru' | 'hi' | 'ja'

export type Voice = {
  code: string        // BCP-47 language tag, also the file name
  name: string        // the language's own name
  greeting: string    // "hello" in that language, shown in the picker
  near: boolean       // Baltic/Nordic neighbour: listed first in the picker
  wording: Wording
  text: string
  audio: string
}

type Row = Omit<Voice, 'audio'>

const ROWS: Row[] = [
  { code: 'et', name: 'Eesti', greeting: 'Tere', near: false, wording: 'std',
    text: 'Tere, olete helistanud hotelli! Saan aidata teil tuba broneerida, rääkida spaast ja restoranist või ühendada teid vastuvõtuga. Kuidas saan aidata?' },
  { code: 'en', name: 'English', greeting: 'Hello', near: false, wording: 'std',
    text: 'Hello, you’ve reached the hotel! I can help you book a room, tell you about the spa and the restaurant, or put you through to reception. How can I help?' },
  { code: 'ru', name: 'Русский', greeting: 'Здравствуйте', near: false, wording: 'plru',
    text: 'Здравствуйте, вы позвонили в отель! Я помогу забронировать номер, расскажу о спа и ресторане или соединю вас с ресепшн. Чем могу помочь?' },
  { code: 'fi', name: 'Suomi', greeting: 'Hei', near: true, wording: 'nordic',
    text: 'Hei! Olen hotellin ääniavustaja. Voin auttaa sinua varaamaan huoneen, kertoa kylpylästä ja ravintolasta tai yhdistää sinut vastaanottoon. Miten voin auttaa?' },
  { code: 'lv', name: 'Latviešu', greeting: 'Sveiki', near: true, wording: 'baltic',
    text: 'Labdien! Jūs sazinājāties ar viesnīcas balss asistentu. Šeit varat rezervēt numuru, uzzināt par spa un restorānu vai savienoties ar reģistratūru. Kā varu palīdzēt?' },
  { code: 'lt', name: 'Lietuvių', greeting: 'Labas', near: true, wording: 'baltic',
    text: 'Laba diena! Jūs pasiekėte viešbučio balso asistentą. Čia galite užsisakyti kambarį, sužinoti apie SPA ir restoraną arba susisiekti su registratūra. Kuo galiu padėti?' },
  { code: 'sv', name: 'Svenska', greeting: 'Hej', near: true, wording: 'nordic',
    text: 'Hej! Jag är hotellets röstassistent. Jag kan hjälpa dig att boka ett rum, berätta om spat och restaurangen eller koppla dig till receptionen. Hur kan jag hjälpa dig?' },
  { code: 'da', name: 'Dansk', greeting: 'Hej', near: true, wording: 'nordic',
    text: 'Hej! Jeg er hotellets stemmeassistent. Jeg kan hjælpe dig med at booke et værelse, fortælle om spaen og restauranten eller stille dig om til receptionen. Hvordan kan jeg hjælpe?' },
  { code: 'no', name: 'Norsk', greeting: 'Hei', near: true, wording: 'nordic',
    text: 'Hei! Jeg er hotellets stemmeassistent. Jeg kan hjelpe deg med å bestille et rom, fortelle om spaet og restauranten eller sette deg over til resepsjonen. Hvordan kan jeg hjelpe?' },
  { code: 'fr', name: 'Français', greeting: 'Bonjour', near: false, wording: 'std',
    text: 'Bonjour, vous êtes bien à l’hôtel ! Je peux vous aider à réserver une chambre, vous renseigner sur le spa et le restaurant, ou vous passer la réception. Comment puis-je vous aider ?' },
  { code: 'ar', name: 'العربية', greeting: 'مرحبا', near: false, wording: 'std',
    text: 'مرحبًا، لقد اتصلت بالفندق! يمكنني مساعدتك في حجز غرفة، وإخبارك عن السبا والمطعم، أو تحويلك إلى الاستقبال. كيف يمكنني مساعدتك؟' },
  { code: 'de', name: 'Deutsch', greeting: 'Hallo', near: false, wording: 'std',
    text: 'Hallo, Sie sind mit dem Hotel verbunden! Ich kann Ihnen helfen, ein Zimmer zu buchen, Ihnen etwas über das Spa und das Restaurant erzählen oder Sie mit der Rezeption verbinden. Wie kann ich helfen?' },
  { code: 'pl', name: 'Polski', greeting: 'Dzień dobry', near: false, wording: 'plru',
    text: 'Dzień dobry, dodzwonili się Państwo do hotelu! Pomogę zarezerwować pokój, opowiem o spa i restauracji albo połączę z recepcją. W czym mogę pomóc?' },
  { code: 'es', name: 'Español', greeting: 'Hola', near: false, wording: 'std',
    text: '¡Hola, ha llamado al hotel! Puedo ayudarle a reservar una habitación, contarle sobre el spa y el restaurante, o pasarle con la recepción. ¿En qué puedo ayudarle?' },
  { code: 'it', name: 'Italiano', greeting: 'Buongiorno', near: false, wording: 'nordic',
    text: 'Buongiorno! Sono l’assistente vocale dell’hotel. Posso aiutarla a prenotare una camera, darle informazioni sulla spa e sul ristorante, oppure metterla in contatto con la reception. Come posso aiutarla?' },
  { code: 'pt', name: 'Português', greeting: 'Olá', near: false, wording: 'std',
    text: 'Olá, ligou para o hotel! Posso ajudar a reservar um quarto, falar sobre o spa e o restaurante, ou passar a chamada para a receção. Como posso ajudar?' },
  { code: 'nl', name: 'Nederlands', greeting: 'Hallo', near: false, wording: 'nordic',
    text: 'Hallo! Ik ben de spraakassistent van het hotel. Ik kan u helpen een kamer te boeken, u vertellen over de spa en het restaurant, of u doorverbinden met de receptie. Waarmee kan ik u helpen?' },
  { code: 'el', name: 'Ελληνικά', greeting: 'Γεια σας', near: false, wording: 'std',
    text: 'Γεια σας, καλέσατε το ξενοδοχείο! Μπορώ να σας βοηθήσω να κλείσετε δωμάτιο, να σας πω για το σπα και το εστιατόριο ή να σας συνδέσω με τη ρεσεψιόν. Πώς μπορώ να βοηθήσω;' },
  { code: 'tr', name: 'Türkçe', greeting: 'Merhaba', near: false, wording: 'nordic',
    text: 'Merhaba! Ben otelin sesli asistanıyım. Oda rezervasyonu yapmanıza yardımcı olabilir, spa ve restoran hakkında bilgi verebilir ya da sizi resepsiyona bağlayabilirim. Size nasıl yardımcı olabilirim?' },
  { code: 'hi', name: 'हिन्दी', greeting: 'नमस्ते', near: false, wording: 'hi',
    text: 'नमस्ते, आपने होटल को फ़ोन किया है! यहाँ आप कमरा बुक कर सकते हैं, स्पा और रेस्टोरेंट के बारे में जान सकते हैं, या रिसेप्शन से बात कर सकते हैं। बताइए, मैं आपकी क्या मदद करूँ?' },
  { code: 'zh', name: '中文', greeting: '您好', near: false, wording: 'nordic',
    text: '您好！我是酒店的语音助手。我可以帮您预订房间，介绍水疗中心和餐厅，或者为您转接前台。请问有什么可以帮您？' },
  { code: 'ja', name: '日本語', greeting: 'こんにちは', near: false, wording: 'ja',
    text: 'こんにちは！ホテルの音声アシスタントです。お部屋のご予約、スパやレストランのご案内、フロントへのおつなぎができます。ご用件をお聞かせください。' },
  { code: 'ko', name: '한국어', greeting: '안녕하세요', near: false, wording: 'nordic',
    text: '안녕하세요! 호텔 음성 비서입니다. 객실 예약을 도와드리고, 스파와 레스토랑을 안내해 드리거나, 프런트로 연결해 드릴 수 있습니다. 무엇을 도와드릴까요?' },
]

export const VOICES: Voice[] = ROWS.map((r) => ({ ...r, audio: `/calls/voices/${r.code}.mp3` }))

/* The five languages shown as buttons; the rest sit under "Muu keel…". */
export const FEATURED_CODES = ['et', 'en', 'ru', 'fi', 'lv']
export const FEATURED: Voice[] = FEATURED_CODES.map((c) => VOICES.find((v) => v.code === c)!)
export const OTHERS: Voice[] = VOICES.filter((v) => !FEATURED_CODES.includes(v.code))

export const RTL = new Set(['ar'])
