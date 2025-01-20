import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
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

const isAdmin = () => {
  const localStorageProfile = localStorage.getItem('Profile')
  if (localStorageProfile) {
    const profile: Profile = JSON.parse(localStorageProfile)
    return profile.role === 'ADMIN'
  }
}
const isLoggedIn = () => {
  const localStorageProfile = localStorage.getItem('Profile')
  if (localStorageProfile) {
    const profile: Profile = JSON.parse(localStorageProfile)
    return profile.role == 'EMPLOYEE' || profile.role == 'ADMIN'
  }
  return false
}
const protectedUserLoader = () => {
  if (!isLoggedIn()) {
    return redirect('/login')
  }
  return null
}

const protectedAdminLoader = () => {
  if (!isLoggedIn) return redirect('/login')
  if (!isAdmin()) {
    return redirect('/')
  }
  return null
}
function App() {
  const router = createBrowserRouter([
    { Component: LoginPage, path: 'login' },
    {
      Component: AuthorisedLayout,
      children: [
        {
          path: '/',
          Component: Homepage,
          loader: protectedUserLoader,
          index: true,
        },
        {
          path: 'add-books',
          Component: AddNewBooksForm,
          loader: protectedAdminLoader,
        },

        {
          path: 'admin',
          Component: ManagerHomepage,
          loader: protectedAdminLoader,
        },
        {
          path: 'book/:id',
          Component: BookDetailsPage,
          loader: protectedUserLoader,
        },
        {
          path: 'testing',
          Component: TestingPage,
        },
      ],
    },
  ])
  return (
    <>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </UserProvider>
    </>
  )
}
export default App
