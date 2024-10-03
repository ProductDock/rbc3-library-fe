import styles from './Footer.module.css'
import stamp from '../../assets/stamp.png'
import BackToTop from './BackToTop'

export const Footer = () => {
  return (
    <div className={styles.footerContent}>
      <div className={styles.content}>
        <div className={styles.author}>Paulo Freire</div>
        <div className={styles.wrapper}>
          <div className={styles.quote}>
            <span className={styles.quoteText}>
              The world belongs to those who read
            </span>
            <span className={styles.dot}>.</span>
          </div>
          <div className={styles.stampBox}>
            <img src={stamp} alt='stamp' />
          </div>
        </div>
        <BackToTop />
      </div>
    </div>
  )
}
