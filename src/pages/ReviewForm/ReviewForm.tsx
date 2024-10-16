import { Typography } from '@mui/material'
import styles from './ReviewForm.module.css'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'

export const ReviewForm = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.headerAndRatingContainer}>
        <div className={styles.headerContainer}>
          <Typography variant='subtitle2'>Write a review</Typography>
        </div>
        <div className={styles.ratingContainer}>
          <Typography variant='h6' className={styles.rateText}>
            Rate
            <span className={styles.star}>*</span>
          </Typography>
          <div className={styles.starContainer}>
            <StarBorderOutlinedIcon />
            <StarBorderOutlinedIcon />
            <StarBorderOutlinedIcon />
            <StarBorderOutlinedIcon />
            <StarBorderOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewForm
