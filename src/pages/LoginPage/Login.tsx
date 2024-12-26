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

  const navigateToAdminPage = () => {
    navigate('/admin')
  }

  const login = useGoogleLogin({
    onSuccess: codeResponse => setUser(codeResponse as unknown as User),
    onError: error => console.log('Login Failed:', error),
  })

  const saveProfile = (profile: Profile): Promise<UserDto> => {
    setProfile(profile)
    const userDto: UserDto = {
      fullName: profile.name,
      googleID: profile.id,
      email: profile.email,
      imageUrl: profile.picture,
      role: profile.role,
    }
    return apiService.login(userDto)
  }

  const handleGoogleLogin = async (user: User) => {
    try {
      const googleUser = await apiService.getGoogleUserInfo(user.access_token)
      const userRes = await apiService.getUser(googleUser.id)
      let userDto = userRes.data
      if (userRes.code === 404) {
        userDto = await saveProfile(googleUser)
      }
      const profile: Profile = {
        role: userDto.role,
        name: userDto.fullName,
        email: userDto.email,
        picture: userDto.imageUrl,
        id: userDto.googleID,
      }

      setProfile(profile)
      if (userDto.role === 'ADMIN') {
        navigateToAdminPage()
      } else {
        navigateToHomePage()
      }
    } catch (error) {
      console.error('Error fetching user data:', error)
      navigateToHomePage()
    }
  }

  useEffect(() => {
    if (user) {
      handleGoogleLogin(user)
    }
  }, [user, setProfile, navigate])

  return (
    <div>
      <button className={styles.loginButton} onClick={() => login()}>
        Sign in with Google
      </button>
    </div>
  )
}
