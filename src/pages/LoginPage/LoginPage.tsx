import LoginPagePhoto from '../../assets/LoginPagePhoto.svg'
import CircleLogo from '../../assets/stamp.svg'
import './LoginPage.css'

export default function LoginPage() {
  return (
    <div className='wrap'>
      <div className='imgHolder'>
        <img src={CircleLogo} className='imgLogo' />
        <img src={LoginPagePhoto} alt='photo' className='img' />
      </div>
      <div className='contentHolder'>
        <h2 className='helloText'>Hello, welcome to...</h2>
        <h1 className='libraryText'>ProductDock Library.</h1>
        <p className='longText'>
          Looking for the next book to read? Explore our collection and discover
          your new favorite that perfectly matches your interests.
        </p>
      </div>
    </div>
  )
}
