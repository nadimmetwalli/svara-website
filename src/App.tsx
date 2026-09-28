import { useEffect } from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { LanguageProvider } from './contexts/LanguageProvider'
import { useT } from './hooks/useT'
import About from './pages/About'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import { scrollToHash, useRoute } from './router'

function Shell() {
  const route = useRoute()
  const { t, lang } = useT()

  // Page title follows both the page and the language.
  useEffect(() => {
    document.title = route === '/hinnad' ? t('meta.pricingTitle') : route === '/meist' ? t('meta.aboutTitle') : t('meta.title')
  }, [route, lang, t])

  // Landing on a deep link like /#miks: scroll once the page exists.
  useEffect(() => {
    if (window.location.hash) scrollToHash(window.location.hash, false)
  }, [])

  return (
    <>
      <a className="skip" href="#main">{t('nav.skip')}</a>
      <Nav />
      <main id="main" tabIndex={-1}>
        {route === '/hinnad' ? <Pricing /> : route === '/meist' ? <About /> : <Home />}
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Shell />
    </LanguageProvider>
  )
}
