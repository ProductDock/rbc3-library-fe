import { Typography } from '@mui/material'
import styles from './LetsStartExploring.module.css'

export const LetsStartExploring = () => {
  return (
    <div className={styles.wrapper}>
      <Typography variant='h1'>
        Let's start exploring
        <span className={styles.dot}>.</span>
      </Typography>
    </div>
  )
}
