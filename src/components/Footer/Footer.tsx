import styles from './Footer.module.css'
import stamp from '../../assets/stamp.svg'
import BackToTop from './BackToTop'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 950)
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 950)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div className={styles.footerContent}>
      <div className={styles.content}>
        <Typography
          variant={isSmallScreen ? 'body1' : 'h6'}
          className={styles.author}
        >
          Paulo Freire
        </Typography>
        <div className={styles.wrapper}>
          <div className={styles.quote}>
            <Typography
              variant={isSmallScreen ? 'subtitle2' : 'h2'}
              className={styles.quoteText}
            >
              The world belongs to those who read
              <span className={styles.dot}>.</span>
            </Typography>
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
