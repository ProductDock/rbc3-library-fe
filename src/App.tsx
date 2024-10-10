import { Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { LoginPage } from './pages/LoginPage'
import { AuthorisedLayout } from './pages/AuthorisedLayout'
import theme from './theme/theme'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

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
        </Routes>
      </ThemeProvider>
    </>
  )
}
export default App
