import PageHero from '../components/page/PageHero'
import DetailSections from '../components/page/DetailSections'
import Features from '../components/Features'
import Comparison from '../components/Comparison'
import LiveDemo from '../components/LiveDemo'
import { PRODUCT_DETAIL_BLOCKS } from '../content/pageDetails'

export default function ProductPage() {
  return (
    <>
      <PageHero
        tag="Product"
        title="The AI voice concierge built for hotels."
        description="Go deeper on how SVARA handles reservations, concierge requests, upselling, and multilingual guest calls — with the reliability of your best front desk employee, around the clock."
      />
      <Features />
      <DetailSections blocks={PRODUCT_DETAIL_BLOCKS.slice(0, 1)} />
      <Comparison />
      <LiveDemo />
      <DetailSections blocks={PRODUCT_DETAIL_BLOCKS.slice(1)} />
    </>
  )
}
