import { Divider, Typography } from '@mui/material'
import styles from './ReviewForm.module.css'
import { StarRating } from './StarRating'
import { RecomendationCheckBox } from './RecomendationCheckBox'

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
          <div>
            <StarRating />
          </div>
        </div>
      </div>
      <Divider />
      <div className={styles.recomendationContainer}>
        <div className={styles.recomendationContainerHeader}>
          <Typography variant='h6' className={styles.recomentationHeaderText}>
            Who would benefit from this book?
          </Typography>
        </div>
        <div>
          <RecomendationCheckBox />
        </div>
      </div>
      <Divider />
    </div>
  )
}

export default ReviewForm
