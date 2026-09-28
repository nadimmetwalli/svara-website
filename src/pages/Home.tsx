import CallStory from '../components/CallStory'
import Close from '../components/Close'
import Dashboard from '../components/Dashboard'
import FAQ from '../components/FAQ'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Languages from '../components/Languages'
import Listen from '../components/Listen'
import Partners from '../components/Partners'
import { Steps } from '../components/Sections'
import Statement from '../components/Statement'
import WhySvara from '../components/WhySvara'

/* Section order follows a hotel manager's questions, in order:
   what is it, is it real, does it sound good, why does it matter,
   what does it do, show me one call, why SVARA, what will I see,
   how do I start, what else should I know, let's talk. */
export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Listen />
      <Statement />
      <Highlights />
      <CallStory />
      <WhySvara />
      <Languages />
      <Dashboard />
      <Steps />
      <FAQ />
      <Close />
    </>
  )
}
