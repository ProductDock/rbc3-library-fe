import Arrow from '../../assets/arrow.svg'
import styles from './Footer.module.css'

const BackToTop = () => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles.backToTopButton} onClick={scrollToTop}>
      <span className={styles.backToTop}>Back to top</span>
      <img src={Arrow} alt='arrow' />
    </div>
  )
}

export default BackToTop
