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
        <div className='libraryTextWrap'>
          <span className='libraryText'>ProductDock Library</span>
          <span className='dot'>.</span>
        </div>
        <p className='longText'>
          Looking for the next book to read? Explore our collection and discover
          your new favorite that perfectly matches your interests.
        </p>
        <button type='button' className='loginButton'>
          Sign in with Google
        </button>
      </div>
    </div>
  )
}
