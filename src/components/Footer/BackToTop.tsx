import { Typography } from '@mui/material'
import Arrow from '../../assets/arrow.svg'
import styles from './Footer.module.css'
import { useEffect, useState } from 'react'

const BackToTop = () => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 950)
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 950)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div className={styles.backToTopButton} onClick={scrollToTop}>
      <Typography
        variant={isSmallScreen ? 'body1' : 'h6'}
        className={styles.backToTop}
      >
        Back to top
        <img src={Arrow} alt='arrow' className={styles.arrow} />
      </Typography>
    </div>
  )
}

export default BackToTop
