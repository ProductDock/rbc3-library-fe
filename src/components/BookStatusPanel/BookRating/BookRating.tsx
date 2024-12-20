import styles from './BookRating.module.css'
import star from '../../../assets/star.svg'
import { Typography } from '@mui/material'

export const BookRating = ({ rating }: { rating: string }) => {
  return (
    <div className={styles.ratingWrapper}>
      <img src={star} alt='rating-icon' className={styles.star} />
      <Typography variant='h6' className={styles.rating}>
        {rating}
      </Typography>
    </div>
  )
}

export default BookRating
