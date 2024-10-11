import { Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { LoginPage } from './pages/LoginPage'
import { AuthorisedLayout } from './pages/AuthorisedLayout'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme'
import { CssBaseline } from '@mui/material'
import { ManagerHomepage } from './pages/ManagerHomepage'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<AuthorisedLayout />}>
            <Route index element={<Homepage />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/admin' element={<ManagerHomepage />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}
export default App
