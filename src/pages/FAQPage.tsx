import PageHero from '../components/page/PageHero'
import DetailSections from '../components/page/DetailSections'
import FAQ from '../components/FAQ'
import { FAQ_DETAIL_BLOCKS } from '../content/pageDetails'

export default function FAQPage() {
  return (
    <>
      <PageHero
        tag="FAQ"
        title="Answers to the questions hotel teams ask most."
        description="From PMS integrations and languages to security and reporting — here's the detail behind how SVARA works in a real property environment."
      />
      <DetailSections blocks={FAQ_DETAIL_BLOCKS.slice(0, 1)} />
      <FAQ />
      <DetailSections blocks={FAQ_DETAIL_BLOCKS.slice(1)} />
    </>
  )
}
