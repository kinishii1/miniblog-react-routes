import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import HeroBanner from '../HeroBanner'

function DefaultPage() {
  return (
    <main>
      <HeroBanner />
      <Outlet />
      <Footer/>
    </main>
  )
}

export default DefaultPage