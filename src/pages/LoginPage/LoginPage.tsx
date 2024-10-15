import { Typography, useMediaQuery } from '@mui/material'
import LoginPagePhoto from '../../assets/LoginPagePhoto.svg'
import CircleLogo from '../../assets/homePageStamp.svg'
import styles from './LoginPage.module.css'

export default function LoginPage() {
  const matches = useMediaQuery('(min-width:1100px)')

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
          variant={matches ? 'h5' : 'h6'}
          className={styles.helloText}
        >
          Hello, welcome to...
        </Typography>
        <div className={styles.wrapper}>
          <Typography
            variant={matches ? 'h2' : 'subtitle1'}
            className={styles.loginPageHeading}
          >
            ProductDock Library
            <span className={styles.dot}>.</span>
          </Typography>
        </div>
        <Typography
          variant={matches ? 'h6' : 'body1'}
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
