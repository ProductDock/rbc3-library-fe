import { Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
