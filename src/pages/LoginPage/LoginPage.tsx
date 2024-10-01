import LoginPagePhoto from '../../assets/LoginPagePhoto.svg'
import CircleLogo from '../../assets/stamp.svg'
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
        <h2 className={styles.helloText}>Hello, welcome to...</h2>
        <span className={styles.loginPageHeading}>ProductDock Library</span>
        <span className={styles.dot}>.</span>
        <p className={styles.loginPageContent}>
          Looking for the next book to read? Explore our collection and discover
          your new favorite that perfectly matches your interests.
        </p>
        <button type='button' className={styles.loginButton}>
          Sign in with Google
        </button>
      </div>
    </div>
  )
}
