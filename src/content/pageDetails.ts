import type { DetailBlock } from '../components/page/DetailSections'

export const PRODUCT_DETAIL_BLOCKS: DetailBlock[] = [
  {
    type: 'cards',
    id: 'call-types',
    tag: 'Use Cases',
    title: 'Built for every guest call your front desk handles.',
    description: 'SVARA is trained on hospitality workflows — not generic call centre scripts — so it resolves real hotel enquiries end to end.',
    cards: [
      {
        title: 'Reservations & availability',
        description: 'Checks room types, rates, and restrictions in your PMS, then completes bookings or holds while the guest is still on the line.',
      },
      {
        title: 'Concierge & amenities',
        description: 'Answers questions about parking, breakfast, spa hours, airport transfers, and local recommendations in a natural, brand-aligned tone.',
      },
      {
        title: 'Group & event enquiries',
        description: 'Captures event requirements, room blocks, and special requests, then routes complex leads to your sales team with full context.',
      },
      {
        title: 'In-stay support',
        description: 'Handles late check-out requests, housekeeping follow-ups, and billing questions without tying up your front desk during peak hours.',
      },
    ],
  },
  {
    type: 'split',
    id: 'property-context',
    tone: 'muted',
    tag: 'Property Intelligence',
    title: 'SVARA learns how your property actually operates.',
    description: 'Before go-live, we configure SVARA with your policies, room categories, upsell rules, and brand voice so every answer sounds like your team.',
    bullets: [
      'Custom knowledge base from your website, fact sheets, and SOPs',
      'Rate plans, packages, and seasonal offers synced from your PMS',
      'House rules, check-in windows, and parking policies baked in',
      'Escalation paths for VIP guests, complaints, and urgent issues',
      'Continuous tuning from call transcripts and your team feedback',
    ],
  },
  {
    type: 'split',
    id: 'security',
    tag: 'Security & Compliance',
    title: 'Enterprise-grade protection for guest conversations.',
    bullets: [
      'GDPR-compliant data handling with encryption in transit and at rest',
      'Role-based dashboard access for managers and operations teams',
      'Full call logs and transcripts retained for audit and QA review',
      'No guest data sold or shared with third parties',
      'Configurable data retention aligned to your property policies',
    ],
  },
]

export const HOW_IT_WORKS_DETAIL_BLOCKS: DetailBlock[] = [
  {
    type: 'steps',
    id: 'onboarding-timeline',
    tag: 'Onboarding',
    title: 'From kickoff to live calls in under 48 hours.',
    description: 'Our team handles the heavy lifting so your staff can stay focused on guests already in-house.',
    steps: [
      {
        title: 'Discovery call',
        description: 'We map your call flows, PMS setup, languages, and escalation rules in a 30-minute session with your operations lead.',
      },
      {
        title: 'Configuration & training',
        description: 'SVARA is configured with your property knowledge, voice preferences, and integration credentials by our onboarding team.',
      },
      {
        title: 'Test calls & QA',
        description: 'You review sample conversations, approve phrasing, and run test bookings before any live traffic is routed.',
      },
      {
        title: 'Go live',
        description: 'Forward your line or enable overflow routing. SVARA starts answering immediately with real-time monitoring on day one.',
      },
    ],
  },
  {
    type: 'split',
    id: 'what-we-need',
    tone: 'muted',
    tag: 'Getting Started',
    title: 'What we need from your team.',
    bullets: [
      'PMS credentials or API access for your property management system',
      'Current rate plans, packages, and availability rules',
      'Brand voice guidelines or sample scripts from your front desk',
      'List of languages required and peak call hours to plan capacity',
      'Escalation contacts for maintenance, management, and night audit',
    ],
  },
  {
    type: 'cards',
    id: 'post-launch',
    tag: 'After Launch',
    title: 'Support that continues after go-live.',
    cards: [
      {
        title: 'Dedicated onboarding contact',
        description: 'A named SVARA specialist stays with you through the first two weeks to tune responses and fix edge cases quickly.',
      },
      {
        title: 'Weekly performance reviews',
        description: 'Review call volume, booking conversion, missed-call recovery, and guest sentiment in your dashboard.',
      },
      {
        title: 'Ongoing model updates',
        description: 'Seasonal offers, new amenities, and policy changes are reflected in SVARA without retraining your staff.',
      },
    ],
  },
]

export const EARLY_ACCESS_DETAIL_BLOCKS: DetailBlock[] = [
  {
    type: 'cards',
    id: 'founding-benefits',
    tag: 'Founding Benefits',
    title: 'What founding hotels receive beyond standard pricing.',
    description: 'Founding partners help shape SVARA while securing advantages that disappear once the programme closes.',
    cards: [
      {
        title: 'Lifetime price lock',
        description: 'Your monthly rate is fixed at founding pricing for as long as you remain a customer — even as SVARA adds features and raises public rates.',
      },
      {
        title: 'Priority feature requests',
        description: 'Direct input into the product roadmap. Founding hotels get first access to new integrations, languages, and dashboard tools.',
      },
      {
        title: 'White-glove onboarding',
        description: 'Dedicated setup with our founding team, including custom voice tuning and property-specific conversation design.',
      },
      {
        title: 'Co-marketing opportunities',
        description: 'Optional case study features, launch announcements, and hospitality event visibility for early adopters.',
      },
    ],
  },
  {
    type: 'split',
    id: 'selection-criteria',
    tone: 'muted',
    tag: 'Who It\'s For',
    title: 'We\'re looking for properties ready to lead.',
    bullets: [
      'Independent hotels, boutique groups, or forward-thinking chains',
      'Properties with meaningful inbound call volume or missed-call pain',
      'Teams willing to share feedback during the first 90 days',
      'Operational leaders who can join a short onboarding sprint',
      'Hotels using a supported PMS or open to a guided integration',
    ],
  },
  {
    type: 'steps',
    id: 'application-process',
    tag: 'Application Process',
    title: 'How to join the founding programme.',
    steps: [
      {
        title: 'Apply online',
        description: 'Submit the early access form with your property details, room count, and current call handling setup.',
      },
      {
        title: 'Fit review',
        description: 'Our team reviews your application within one business day and schedules a short discovery call.',
      },
      {
        title: 'Founding agreement',
        description: 'Approved hotels receive founding terms, pricing lock confirmation, and a dedicated onboarding timeline.',
      },
    ],
  },
]

export const INTEGRATIONS_DETAIL_BLOCKS: DetailBlock[] = [
  {
    type: 'cards',
    id: 'pms-platforms',
    tag: 'PMS',
    title: 'Property management systems we connect to.',
    description: 'SVARA reads availability, creates reservations, and logs guest details directly in the systems your team already uses.',
    cards: [
      {
        title: 'Opera PMS',
        description: 'Real-time availability, rate codes, and reservation creation for Oracle Hospitality Opera properties.',
      },
      {
        title: 'Mews',
        description: 'Two-way sync for bookings, guest profiles, and service requests across Mews-powered hotels.',
      },
      {
        title: 'Cloudbeds',
        description: 'Automated reservation handling and rate management for independent hotels on Cloudbeds.',
      },
      {
        title: 'Custom PMS',
        description: 'Enterprise properties can connect via API for bespoke workflows and multi-property routing.',
      },
    ],
  },
  {
    type: 'split',
    id: 'telephony-stack',
    tone: 'muted',
    tag: 'Telephony',
    title: 'Works with your existing phone setup.',
    bullets: [
      'Call forwarding from your current hotel number — no number change required',
      'Twilio and major SIP trunk compatibility for overflow routing',
      'Simultaneous ring or after-hours-only modes depending on your policy',
      'Call recording and transcription stored in your SVARA dashboard',
      'WhatsApp and messaging channel expansion available on request',
    ],
  },
  {
    type: 'cards',
    id: 'crm-revenue',
    tag: 'Revenue & CRM',
    title: 'Connect guest conversations to your revenue stack.',
    cards: [
      {
        title: 'Salesforce',
        description: 'Log high-value leads and group enquiries directly into your CRM pipeline with full call context.',
      },
      {
        title: 'Stripe & payment links',
        description: 'Send secure payment links for deposits or upsells when your policy allows phone-based payments.',
      },
      {
        title: 'Booking channels',
        description: 'Route OTA-related enquiries and direct booking questions without conflicting with channel manager rules.',
      },
    ],
  },
]

export const PRICING_DETAIL_BLOCKS: DetailBlock[] = [
  {
    type: 'split',
    id: 'included-every-plan',
    tone: 'muted',
    tag: 'Included',
    title: 'Every plan includes the essentials.',
    bullets: [
      '24/7 AI call answering with natural, multilingual voice',
      'Dashboard access with call logs, transcripts, and analytics',
      'PMS integration setup and ongoing sync monitoring',
      'Standard onboarding and configuration support',
      'Email support with one-business-day response SLA',
    ],
  },
  {
    type: 'steps',
    id: 'setup-process',
    tag: 'Setup Fees',
    title: 'What your one-time setup covers.',
    description: 'Setup fees reflect the complexity of your property, integrations, and conversation design — not a generic template install.',
    steps: [
      {
        title: 'Property discovery',
        description: 'We document your room types, policies, upsell strategy, and escalation paths before configuring SVARA.',
      },
      {
        title: 'Integration & testing',
        description: 'PMS connection, test bookings, and QA calls are completed and signed off by your team.',
      },
      {
        title: 'Voice & brand tuning',
        description: 'Greeting scripts, tone of voice, and language settings are calibrated to match your property brand.',
      },
    ],
  },
  {
    type: 'cards',
    id: 'plan-selection',
    tag: 'Choosing a Plan',
    title: 'Not sure which plan fits?',
    cards: [
      {
        title: 'Estimate your call volume',
        description: 'Review your last 3 months of inbound calls. Include overflow, after-hours, and seasonal peaks when comparing included minutes.',
      },
      {
        title: 'Factor in growth',
        description: 'Properties launching new languages, marketing campaigns, or additional lines should plan headroom above current averages.',
      },
      {
        title: 'Talk to our team',
        description: 'We can recommend a plan based on your room count, PMS, and call patterns — no obligation to commit on the first call.',
      },
    ],
  },
]

export const FAQ_DETAIL_BLOCKS: DetailBlock[] = [
  {
    type: 'cards',
    id: 'technical-requirements',
    tag: 'Technical',
    title: 'What you need to run SVARA.',
    cards: [
      {
        title: 'Phone routing',
        description: 'Ability to forward calls or configure overflow routing to a SVARA number. No new hardware required.',
      },
      {
        title: 'PMS access',
        description: 'Admin or API credentials for your property management system so SVARA can read availability and write bookings.',
      },
      {
        title: 'Internet connectivity',
        description: 'SVARA runs in the cloud. Your team only needs dashboard access via browser — no on-premise servers.',
      },
    ],
  },
  {
    type: 'split',
    id: 'implementation-checklist',
    tone: 'muted',
    tag: 'Implementation',
    title: 'Pre-launch checklist for your team.',
    bullets: [
      'Confirm languages and greeting scripts with your front office manager',
      'Provide rate plans, packages, and blackout dates for the next 90 days',
      'Define escalation contacts for complaints, maintenance, and VIP guests',
      'Schedule a 30-minute staff briefing so the team knows when SVARA handles calls',
      'Run test calls together before switching live traffic',
    ],
  },
]

export const DEMO_DETAIL_BLOCKS: DetailBlock[] = [
  {
    type: 'cards',
    id: 'demo-agenda',
    tag: 'Your Demo',
    title: 'What happens in a 30-minute demo.',
    cards: [
      {
        title: 'Live call walkthrough',
        description: 'Hear SVARA handle a realistic reservation, amenity question, and upsell — using scenarios relevant to your property type.',
      },
      {
        title: 'Dashboard tour',
        description: 'See call logs, transcripts, booking outcomes, and analytics the way your operations team would use them daily.',
      },
      {
        title: 'Integration overview',
        description: 'Review how SVARA connects to your PMS and phone setup, including estimated go-live timeline for your property.',
      },
      {
        title: 'Pricing & next steps',
        description: 'Get a plan recommendation based on your call volume and walk away with clear action items if you want to proceed.',
      },
    ],
  },
  {
    type: 'split',
    id: 'who-should-join',
    tone: 'muted',
    tag: 'Who to Invite',
    title: 'Bring the people who own guest communication.',
    bullets: [
      'General manager or front office manager',
      'Revenue or reservations lead if they handle booking calls',
      'IT or systems admin if PMS integration is part of the evaluation',
      'Owner or group operations contact for multi-property decisions',
    ],
  },
]
