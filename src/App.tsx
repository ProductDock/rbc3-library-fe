import { Navigate, Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { LoginPage } from './pages/LoginPage'
import { AuthorisedLayout } from './pages/AuthorisedLayout'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme'
import { CssBaseline } from '@mui/material'
import { ManagerHomepage } from './pages/ManagerHomepage'
import { TestingPage } from './pages/TestingPage'
import { BookDetailsPage } from './pages/BookDetailsPage'
import { AddNewBooksForm } from './pages/AddNewBooksForm'
import { Profile, UserProvider } from './context/UserContext'

function App() {
  const isAdmin = () => {
    const localStorageProfile = localStorage.getItem('Profile')
    if (localStorageProfile) {
      const profile: Profile = JSON.parse(localStorageProfile)
      return profile.role === 'ADMIN'
    }
  }
  const isLoggedIn = () => {
    const localStorageProfile = localStorage.getItem('Profile')
    return localStorageProfile ? true : false
  }

  return (
    <>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route
              path='/'
              element={
                isLoggedIn() ? <AuthorisedLayout /> : <Navigate to='/login' />
              }
            >
              <Route
                index
                element={isLoggedIn() ? <Homepage /> : <Navigate to='/login' />}
              />
              <Route
                path='/add-books'
                element={isAdmin() ? <AddNewBooksForm /> : <Navigate to='/' />}
              />
              <Route
                path='/admin'
                element={isAdmin() ? <ManagerHomepage /> : <Navigate to='/' />}
              />
              <Route path='/book/:id' element={<BookDetailsPage />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/testing' element={<TestingPage />} />
          </Routes>
        </ThemeProvider>
      </UserProvider>
    </>
  )
}
export default App
