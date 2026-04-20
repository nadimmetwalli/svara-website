import logoSvg from '../assets/logo.svg'
import twilioImg from '../assets/twlio.png'
import operaImg from '../assets/oracle-opera-pms-logo.png'
import openaiImg from '../assets/open-ai-logo-png_seeklogo-428036.png'
import mewsImg from '../assets/Mews (1).webp'
import cloudbedsImg from '../assets/Cloudbeds-500x500.png'
import salesforceImg from '../assets/Salesforce.com_logo.svg.png'

interface LogoCard {
  src?: string
  alt: string
  label: string
}

const LEFT_LOGOS: LogoCard[] = [
  { src: twilioImg, alt: 'Twilio', label: 'Twilio' },
  { src: operaImg, alt: 'Opera PMS', label: 'Opera PMS' },
  { src: openaiImg, alt: 'OpenAI', label: 'OpenAI' },
  { src: mewsImg, alt: 'Mews', label: 'Mews' },
  { src: 'https://cdn.simpleicons.org/stripe/635BFF', alt: 'Stripe', label: 'Stripe' },
]

const RIGHT_LOGOS: LogoCard[] = [
  { src: cloudbedsImg, alt: 'Cloudbeds', label: 'Cloudbeds' },
  { src: 'https://cdn.simpleicons.org/whatsapp/25D366', alt: 'WhatsApp', label: 'WhatsApp' },
  { src: salesforceImg, alt: 'Salesforce', label: 'Salesforce' },
  { alt: 'Booking.com', label: 'Booking.com' },
  { alt: 'Expedia', label: 'Expedia' },
]

function LogoStrip({ logos, className }: { logos: LogoCard[]; className: string }) {
  const doubled = [...logos, ...logos]
  return (
    <div className={`int-logos ${className}`}>
      {doubled.map((logo, i) => (
        <div key={i} className="int-logo-card">
          {logo.src && <img className="int-logo-img" src={logo.src} alt={logo.alt} />}
          <span>{logo.label}</span>
        </div>
      ))}
    </div>
  )
}

export default function Integrations() {
  return (
    <section className="integrations-section" id="integrations">
      <div className="container">
        <div className="section-tag">Integrations</div>
        <h2 className="section-h2">Connects with your existing stack</h2>
        <p className="section-sub">SVARA works with the tools your hotel already uses — no rip-and-replace required.</p>
      </div>

      <div className="int-orbit-wrap">
        <div className="int-svara-center">
          <img src={logoSvg} alt="SVARA" width={26} height={26} />
          <span>SVARA</span>
        </div>

        <div className="int-single-row">
          <div className="int-half int-half-left">
            <LogoStrip logos={LEFT_LOGOS} className="int-scroll-left" />
          </div>
          <div className="int-half int-half-right">
            <LogoStrip logos={RIGHT_LOGOS} className="int-scroll-left" />
          </div>
        </div>
      </div>
    </section>
  )
}
