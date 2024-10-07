import styles from './BookRating.module.css'
import star from '../../../assets/star.svg'

export const BookRating = ({ rating }: { rating: number }) => {
  return (
    <div className={styles.ratingWrapper}>
      <img src={star} alt='rating-icon' className={styles.star} />
      <span className={styles.rating}>{rating.toString()}</span>
    </div>
  )
}

export default BookRating
