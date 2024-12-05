/* eslint @typescript-eslint/no-explicit-any: 0 */
import { Typography, useMediaQuery } from '@mui/material'
import { useGoogleLogin, googleLogout } from '@react-oauth/google'
import LoginPagePhoto from '../../assets/LoginPagePhoto.svg'
import CircleLogo from '../../assets/homePageStamp.svg'
import styles from './LoginPage.module.css'
import { useEffect, useState } from 'react'

export default function LoginPage() {
  const matches = useMediaQuery('(min-width:1100px)')

  const [user, setUser] = useState()
  const [profile, setProfile] = useState()

  console.log(user)

  const login = useGoogleLogin({
    onSuccess: codeResponse => setUser(codeResponse as unknown as any),
    onError: error => console.log('Login Failed:', error),
  })

  const logOut = () => {
    googleLogout()
    setProfile(undefined)
  }

  useEffect(() => {
    if (user) {
      fetch(
        'https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}',
        {
          method: 'GET',
          credentials: 'same-origin',
          headers: {
            Authorization: `Bearer ${(user as unknown as any).access_token}`,
            Accept: 'application/json',
          },
        }
      ).then(response => setProfile(response as any))
    }
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

        {profile ? (
          <div>
            <img src={(profile as any).picture} alt='user image' />
            <h3>User Logged in</h3>
            <p>Name: {(profile as any).name}</p>
            <p>Email Address: {(profile as any).email}</p>
            <br />
            <br />
            <button onClick={() => logOut()}>Log out</button>
          </div>
        ) : (
          <button className={styles.loginButton} onClick={() => login()}>
            Sign in with Google 🚀{' '}
          </button>
        )}
      </div>
    </div>
  )
}
