import styles from './Footer.module.css'
import stamp from '../../assets/stamp.svg'
import BackToTop from './BackToTop'
import { Typography, useMediaQuery } from '@mui/material'

export const Footer = () => {
  const matches = useMediaQuery('(min-width:950px)')

  return (
    <div className={styles.footerContent}>
      <div className={styles.content}>
        <Typography
          variant={matches ? 'h6' : 'body1'}
          className={styles.author}
        >
          Paulo Freire
        </Typography>
        <div className={styles.wrapper}>
          <div className={styles.quote}>
            <Typography
              variant={matches ? 'h2' : 'subtitle2'}
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
