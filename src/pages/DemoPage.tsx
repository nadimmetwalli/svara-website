import PageHero from '../components/page/PageHero'
import DetailSections from '../components/page/DetailSections'
import DemoForm from '../components/DemoForm'
import { DEMO_DETAIL_BLOCKS } from '../content/pageDetails'

export default function DemoPage() {
  return (
    <>
      <PageHero
        tag="Book a Demo"
        title="See SVARA working for your property."
        description="Schedule a 30-minute session with our team. We'll walk through live calls, your integration setup, and a pricing recommendation tailored to your call volume."
      />
      <DetailSections blocks={DEMO_DETAIL_BLOCKS.slice(0, 1)} />
      <DemoForm />
      <DetailSections blocks={DEMO_DETAIL_BLOCKS.slice(1)} />
    </>
  )
}
