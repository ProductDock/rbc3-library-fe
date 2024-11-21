import { BookRating } from './BookRating'
import { BookStatus } from './BookStatus'
import { Status } from './BookStatus/Status'

import styles from './BookStatusPanel.module.css'

type BookStatusPanelProps = {
  layoutDirection: 'rating-left' | 'status-left'
  status: Status
  rating?: number | null
}

export const BookStatusPanel: React.FC<BookStatusPanelProps> = ({
  layoutDirection,
  status,
  rating,
}) => {
  return (
    <div className={styles.statusPanel}>
      {layoutDirection === 'rating-left' ? (
        <>
          <BookRating rating={rating || 2.5} />
          <BookStatus status={status} />
        </>
      ) : (
        <>
          <BookStatus status={status} />
          <BookRating rating={rating || 2.5} />
        </>
      )}
    </div>
  )
}
export default BookStatusPanel
