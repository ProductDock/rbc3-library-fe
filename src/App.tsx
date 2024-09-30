import { Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { Box } from '@mui/material'
import { Header } from './components/Header/Header'
import { LetsStartExploring } from './pages/Homepage/LetsStartExploring'

function App() {
  return (
    <>
      <Header />
      <LetsStartExploring />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App
