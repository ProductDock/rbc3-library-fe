import { BookRating } from './BookRating'
import { BookStatus } from './BookStatus'
import { Status } from './BookStatus/Status'

import styles from './BookStatusPanel.module.css'

type BookStatusPanelProps = {
  layoutDirection: 'rating-left' | 'status-left'
  status: Status
  rating?: string
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
          <BookRating rating={rating || '0.0'} />
          <BookStatus status={status || Status.AVAILABLE} />
        </>
      ) : (
        <>
          <BookStatus status={status || Status.AVAILABLE} />
          <BookRating rating={rating || '0.0'} />
        </>
      )}
    </div>
  )
}
export default BookStatusPanel
