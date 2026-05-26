import PageHero from '../components/page/PageHero'
import DetailSections from '../components/page/DetailSections'
import Integrations from '../components/Integrations'
import { INTEGRATIONS_DETAIL_BLOCKS } from '../content/pageDetails'

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        tag="Integrations"
        title="Plug into the systems your hotel already runs."
        description="SVARA connects to your PMS, telephony stack, and revenue tools — so guest data flows in automatically and your team never re-enters a booking by hand."
      />
      <Integrations />
      <DetailSections blocks={INTEGRATIONS_DETAIL_BLOCKS} />
    </>
  )
}
