import Arrow from '../../assets/arrow.png'
import styles from './Footer.module.css'

const BackToTop = () => {
  const scrollToTop = () => {
    window.scroll(0, 0)
  }

  return (
    <div className={styles.backToTopButton} onClick={scrollToTop}>
      <span className={styles.backToTop}>Back to top</span>
      <img src={Arrow} alt='arrow' />
    </div>
  )
}

export default BackToTop
