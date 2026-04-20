import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import Comparison from './components/Comparison'
import LiveDemo from './components/LiveDemo'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import FoundingHotels from './components/FoundingHotels'
import Integrations from './components/Integrations'
import DemoForm from './components/DemoForm'
import FAQ from './components/FAQ'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <Comparison />
      <LiveDemo />
      <Features />
      <HowItWorks />
      <FoundingHotels />
      <Integrations />
      <DemoForm />
      <FAQ />
      <CTABanner />
      <Footer />
    </>
  )
}
