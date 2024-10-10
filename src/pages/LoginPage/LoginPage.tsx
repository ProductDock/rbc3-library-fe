import { Typography } from '@mui/material'
import LoginPagePhoto from '../../assets/LoginPagePhoto.svg'
import CircleLogo from '../../assets/homePageStamp.svg'
import styles from './LoginPage.module.css'
import { useEffect, useState } from 'react'

export default function LoginPage() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1100)
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 1100)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginPageImageHolder}>
        <img
          src={CircleLogo}
          alt='product-dock-logo'
          className={styles.imageLogo}
        />
        <img
          src={LoginPagePhoto}
          alt='login-screen-image'
          className={styles.loginScreenImage}
        />
      </div>
      <div className={styles.loginContentHolder}>
        <Typography
          variant={isSmallScreen ? 'h6' : 'h5'}
          className={styles.helloText}
        >
          Hello, welcome to...
        </Typography>
        <div className={styles.wrapper}>
          <Typography
            variant={isSmallScreen ? 'subtitle1' : 'h2'}
            className={styles.loginPageHeading}
          >
            ProductDock Library
            <span className={styles.dot}>.</span>
          </Typography>
        </div>
        <Typography
          variant={isSmallScreen ? 'body1' : 'h6'}
          className={styles.loginPageContent}
        >
          Looking for the next book to read? Explore our collection and discover
          your new favorite that perfectly matches your interests.
        </Typography>
        <button type='button' className={styles.loginButton}>
          Sign in with Google
        </button>
      </div>
    </div>
  )
}
