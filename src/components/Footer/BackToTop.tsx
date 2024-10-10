import { Typography, useMediaQuery } from '@mui/material'
import Arrow from '../../assets/arrow.svg'
import styles from './Footer.module.css'

const BackToTop = () => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  const matches = useMediaQuery('(min-width:950px)')

  return (
    <div className={styles.backToTopButton} onClick={scrollToTop}>
      <Typography
        variant={matches ? 'h6' : 'body1'}
        className={styles.backToTop}
      >
        Back to top
        <img src={Arrow} alt='arrow' className={styles.arrow} />
      </Typography>
    </div>
  )
}

export default BackToTop
