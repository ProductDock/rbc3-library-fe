import { Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}

export default App
