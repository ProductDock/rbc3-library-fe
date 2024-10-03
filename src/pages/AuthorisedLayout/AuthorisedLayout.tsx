import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'

const AuthorisedLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
export default AuthorisedLayout
