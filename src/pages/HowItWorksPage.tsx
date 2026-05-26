import PageHero from '../components/page/PageHero'
import DetailSections from '../components/page/DetailSections'
import HowItWorks from '../components/HowItWorks'
import { HOW_IT_WORKS_DETAIL_BLOCKS } from '../content/pageDetails'

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        tag="How It Works"
        title="Live in under 48 hours — without disrupting your team."
        description="See exactly how SVARA connects to your phone line and PMS, what we configure before go-live, and how onboarding support continues after your first guest call."
      />
      <HowItWorks />
      <DetailSections blocks={HOW_IT_WORKS_DETAIL_BLOCKS} />
    </>
  )
}
