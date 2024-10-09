import { Typography } from '@mui/material'
import LoginPagePhoto from '../../assets/LoginPagePhoto.svg'
import CircleLogo from '../../assets/homePageStamp.svg'
import styles from './LoginPage.module.css'

export default function LoginPage() {
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
        <Typography variant='h5' className={styles.helloText}>
          Hello, welcome to...
        </Typography>
        <div className={styles.wrapper}>
          <Typography variant='h2' className={styles.loginPageHeading}>
            ProductDock Library
            <span className={styles.dot}>.</span>
          </Typography>
        </div>
        <Typography variant='h6' className={styles.loginPageContent}>
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
