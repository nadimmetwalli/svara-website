import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import HowItWorksPage from './pages/HowItWorksPage'
import EarlyAccessPage from './pages/EarlyAccessPage'
import IntegrationsPage from './pages/IntegrationsPage'
import PricingPage from './pages/PricingPage'
import FAQPage from './pages/FAQPage'
import DemoPage from './pages/DemoPage'
import { ROUTES } from './routes'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.product} element={<ProductPage />} />
          <Route path={ROUTES.howItWorks} element={<HowItWorksPage />} />
          <Route path={ROUTES.earlyAccess} element={<EarlyAccessPage />} />
          <Route path={ROUTES.integrations} element={<IntegrationsPage />} />
          <Route path={ROUTES.pricing} element={<PricingPage />} />
          <Route path={ROUTES.faq} element={<FAQPage />} />
          <Route path={ROUTES.demo} element={<DemoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
