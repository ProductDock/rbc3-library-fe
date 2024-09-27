import LoginPagePhoto from '../../assets/LoginPagePhoto.svg'
import CircleLogo from '../../assets/stamp.svg'
import './LoginPage.css'

export default function LoginPage() {
  return (
    <div className='wrap'>
      <div className='img-holder'>
        <img src={CircleLogo} className='img-logo' />
        <div className='img-container'>
          <img src={LoginPagePhoto} alt='photo' className='image' />
        </div>
      </div>
      <div className='content-holder'>
        <h2>Hello, welcome to...</h2>
        <h1>ProductDock Library.</h1>
        <p>
          Looking for the next book to read? Explore our collection and discover
          your new favorite that perfectly matches your interests.
        </p>
      </div>
    </div>
  )
}
