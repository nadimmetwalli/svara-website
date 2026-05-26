import PageHero from '../components/page/PageHero'
import DetailSections from '../components/page/DetailSections'
import FoundingHotels from '../components/FoundingHotels'
import { EARLY_ACCESS_DETAIL_BLOCKS } from '../content/pageDetails'

export default function EarlyAccessPage() {
  return (
    <>
      <PageHero
        tag="Early Access"
        title="Join a select group of founding hotels."
        description="Founding partners lock in lifetime pricing, shape the SVARA roadmap, and get white-glove onboarding — while securing a first-mover advantage in AI guest communication."
      />
      <FoundingHotels />
      <DetailSections blocks={EARLY_ACCESS_DETAIL_BLOCKS} />
    </>
  )
}
