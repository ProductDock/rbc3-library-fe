import { Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { LoginPage } from './pages/LoginPage'
import { AuthorisedLayout } from './pages/AuthorisedLayout'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AuthorisedLayout />}>
          <Route index element={<Homepage />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}
export default App
