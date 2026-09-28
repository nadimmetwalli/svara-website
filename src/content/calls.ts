/* ── Listen section: the full calls ──────────────────────────
   One entry per language with a full recorded call. Each call is
   in its own language, so transcripts live here rather than in
   i18n.ts.

   To add a real recording: put the file in /public/calls/ and set
   `audio` (e.g. '/calls/et.mp3'). Until then the player runs the
   transcript as a timed "Näidisvestlus" (sample conversation) and
   says so; once `audio` is set it plays the file, the badge
   becomes "Terve kõne" and the lines follow the real timestamps.

   The transcripts below are placeholders written for the design.
   Replace them with the transcript of the real recording.
────────────────────────────────────────────────────────────── */

export type CallLine = { at: number; who: 'svara' | 'guest'; text: string }

export type Call = {
  code: string        // BCP-47 language tag
  label: string       // the language's own name, shown on the picker
  title: string       // call title, in that language
  guest: string       // the word for "guest", in that language
  dir: 'ltr' | 'rtl'
  audio?: string
  length: number      // seconds; replaced by the real duration once audio loads
  lines: CallLine[]
}

export const CALLS: Call[] = [
  {
    code: 'et', label: 'Eesti', title: 'Broneeringukõne', guest: 'Külaline', dir: 'ltr', length: 26,
    lines: [
      { at: 2, who: 'svara', text: 'Tere, hotelli vastuvõtt, SVARA kuuleb. Kuidas saan aidata?' },
      { at: 6, who: 'guest', text: 'Tere! Kas teil oleks reedest kaks ööd vaba?' },
      { at: 11, who: 'svara', text: 'On küll, superior tuba merevaatega. Kas soovite ka hommikusööki?' },
      { at: 17, who: 'guest', text: 'Jah, palun. Kaks täiskasvanut.' },
      { at: 21, who: 'svara', text: 'Saadan teile SMS-iga turvalise makselingi. Kas see number sobib?' },
    ],
  },
  {
    code: 'en', label: 'English', title: 'Booking call', guest: 'Guest', dir: 'ltr', length: 25,
    lines: [
      { at: 2, who: 'svara', text: 'Hello, hotel reception, this is SVARA. How can I help?' },
      { at: 6, who: 'guest', text: 'Hi, do you have a room for two nights from Friday?' },
      { at: 10, who: 'svara', text: 'We do, a superior room with a sea view. Would you like breakfast included?' },
      { at: 16, who: 'guest', text: 'Yes please, two adults.' },
      { at: 20, who: 'svara', text: 'I’ll text you a secure payment link. Is this number fine?' },
    ],
  },
  {
    code: 'fr', label: 'Français', title: 'Appel de réservation', guest: 'Client', dir: 'ltr', length: 27,
    lines: [
      { at: 2, who: 'svara', text: 'Bonjour, réception de l’hôtel, ici SVARA. Comment puis-je vous aider ?' },
      { at: 7, who: 'guest', text: 'Bonjour ! Auriez-vous une chambre pour deux nuits à partir de vendredi ?' },
      { at: 12, who: 'svara', text: 'Oui, une chambre supérieure avec vue sur la mer. Souhaitez-vous le petit-déjeuner ?' },
      { at: 18, who: 'guest', text: 'Oui, s’il vous plaît. Deux adultes.' },
      { at: 22, who: 'svara', text: 'Je vous envoie un lien de paiement sécurisé par SMS. Ce numéro vous convient ?' },
    ],
  },
  {
    code: 'ru', label: 'Русский', title: 'Звонок для бронирования', guest: 'Гость', dir: 'ltr', length: 27,
    lines: [
      { at: 2, who: 'svara', text: 'Здравствуйте, ресепшн отеля, это SVARA. Чем могу помочь?' },
      { at: 6, who: 'guest', text: 'Здравствуйте! У вас есть номер на две ночи с пятницы?' },
      { at: 11, who: 'svara', text: 'Да, номер улучшенной категории с видом на море. Добавить завтрак?' },
      { at: 17, who: 'guest', text: 'Да, пожалуйста. Двое взрослых.' },
      { at: 21, who: 'svara', text: 'Я отправлю вам ссылку на оплату по SMS. Этот номер подходит?' },
    ],
  },
  {
    code: 'ar', label: 'العربية', title: 'مكالمة حجز', guest: 'الضيف', dir: 'rtl', length: 28,
    lines: [
      { at: 2, who: 'svara', text: 'مرحبًا، استقبال الفندق، معك SVARA. كيف يمكنني مساعدتك؟' },
      { at: 7, who: 'guest', text: 'مرحبًا! هل لديكم غرفة لليلتين ابتداءً من يوم الجمعة؟' },
      { at: 12, who: 'svara', text: 'نعم، غرفة سوبيريور مطلة على البحر. هل ترغب بإضافة الإفطار؟' },
      { at: 18, who: 'guest', text: 'نعم من فضلك. شخصان بالغان.' },
      { at: 22, who: 'svara', text: 'سأرسل لك رابط دفع آمنًا برسالة نصية. هل هذا الرقم مناسب؟' },
    ],
  },
]

/* ── Short samples: SVARA alone, for languages without a full call ──
   Each clip is SVARA saying the same two lines (a greeting and the
   breakfast/parking answer) in that language, made with SVARA's own
   voice. Put the file in /public/calls/samples/<code>.mp3 and set
   `audio`. The transcript shown is the translation in the page
   language (listen.sampleL1/L2). Languages come from the i18n
   `lang.*` names. */
export type Sample = { code: string; audio?: string }

export const SAMPLES: Sample[] = [
  'lv', 'lt', 'fi', 'sv', 'da', 'no', 'de', 'pl', 'es', 'it', 'pt', 'nl', 'el', 'tr', 'hi', 'zh', 'ja', 'ko',
].map((code) => ({ code }))
