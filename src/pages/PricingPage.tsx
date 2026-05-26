import DetailSections from '../components/page/DetailSections'
import Pricing from '../components/Pricing'
import { PRICING_DETAIL_BLOCKS } from '../content/pageDetails'

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <DetailSections blocks={PRICING_DETAIL_BLOCKS} />
    </>
  )
}
