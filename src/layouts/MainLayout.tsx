import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useFadeUp } from '../hooks/useFadeUp'
import { ROUTES } from '../routes'

export default function MainLayout() {
  useFadeUp()
  const { pathname } = useLocation()
  const isHome = pathname === ROUTES.home

  return (
    <>
      <Navbar />
      <main className={isHome ? undefined : 'page-main'}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
