import { useGoogleLogin } from '@react-oauth/google'
import { useEffect } from 'react'
import styles from './LoginPage.module.css'
import { useNavigate } from 'react-router-dom'
import { Profile, User, useUserContext } from '../../context/UserContext'
import { UserDto } from '../../shared/types'
import apiService from '../../shared/api/apiService'
export const Login = () => {
  const { user, setUser, setProfile } = useUserContext()
  const navigate = useNavigate()

  const navigateToHomePage = () => {
    navigate('/')
  }

  const login = useGoogleLogin({
    onSuccess: codeResponse => setUser(codeResponse as User),
    onError: error => console.log('Login Failed:', error),
  })

  const saveProfile = (profile: Profile) => {
    setProfile(profile)
    const userDto: UserDto = {
      fullName: profile.name,
      googleID: profile.id,
      email: profile.email,
      imageUrl: profile.picture,
    }
    apiService.login(userDto)
  }

  useEffect(() => {
    if (user) {
      apiService
        .getGoogleUserInfo(user.access_token)
        .then(response => response.json())
        .then(response => saveProfile(response as Profile))
        .then(() => navigateToHomePage())
        .catch(error => console.log('Profile fetch error:', error))
    }
  }, [user, setProfile, navigateToHomePage])

  console.log(user)
  return (
    <div>
      <button className={styles.loginButton} onClick={() => login()}>
        Sign in with Google
      </button>
    </div>
  )
}
