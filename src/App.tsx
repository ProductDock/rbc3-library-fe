import { Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { Header } from './components/Header/Header'
import { LoginPage } from './pages/LoginPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
