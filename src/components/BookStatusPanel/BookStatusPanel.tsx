import { BookRating } from './BookRating'
import { BookStatus } from './BookStatus'
import { Status } from './BookStatus/Status'

import styles from './BookStatusPanel.module.css'

export const BookStatusPanel = () => {
  return (
    <div className={styles.statusPanel}>
      <BookStatus status={Status.RENTED} />
      <BookRating rating={4.5} />
    </div>
  )
}
export default BookStatusPanel
