import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '@mui/material'

const AuthorisedLayout = () => {
  const location = useLocation()

  const [showBackButton, setShowBackButton] = useState(false)

  const isMobile = useMediaQuery('(max-width: 450px)')

  useEffect(() => {
    if (location.pathname === '/book' && isMobile) {
      setShowBackButton(true)
    } else {
      setShowBackButton(false)
    }
  }, [location, isMobile])

  return (
    <div>
      <Header showBackButton={showBackButton} />
      <Outlet />
      <Footer />
    </div>
  )
}
export default AuthorisedLayout
