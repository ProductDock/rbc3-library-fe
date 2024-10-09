import { Typography } from '@mui/material'
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
      <Typography variant='h6' className={styles.backToTop}>
        Back to top
        <img src={Arrow} alt='arrow' className={styles.arrow} />
      </Typography>
    </div>
  )
}

export default BackToTop
