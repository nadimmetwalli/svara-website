import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Stats from '../components/Stats'
import Comparison from '../components/Comparison'
import LiveDemo from '../components/LiveDemo'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import FoundingHotels from '../components/FoundingHotels'
import Integrations from '../components/Integrations'
import Pricing from '../components/Pricing'
import DemoForm from '../components/DemoForm'
import FAQ from '../components/FAQ'
import CTABanner from '../components/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <Comparison />
      <LiveDemo />
      <Features />
      <HowItWorks />
      <FoundingHotels />
      <Integrations />
      <Pricing />
      <DemoForm />
      <FAQ />
      <CTABanner />
    </>
  )
}
