import { Route, Routes } from 'react-router-dom'
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
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' element={<AuthorisedLayout />}>
              <Route index element={<Homepage />} />
              <Route path='/add-books' element={<AddNewBooksForm />} />
              <Route path='/admin' element={<ManagerHomepage />} />
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
