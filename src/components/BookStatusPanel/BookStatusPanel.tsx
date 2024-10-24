import { BookRating } from './BookRating'
import { BookStatus } from './BookStatus'
import { Status } from './BookStatus/Status'

import styles from './BookStatusPanel.module.css'

type BookStatusPanelProps = {
  layoutDirection: 'rating-left' | 'status-left'
}

export const BookStatusPanel: React.FC<BookStatusPanelProps> = ({
  layoutDirection,
}) => {
  return (
    <div className={styles.statusPanel}>
      {layoutDirection === 'rating-left' ? (
        <>
          <BookRating rating={4.5} />
          <BookStatus status={Status.APPROVED} />
        </>
      ) : (
        <>
          <BookStatus status={Status.APPROVED} />
          <BookRating rating={4.5} />
        </>
      )}
    </div>
  )
}
export default BookStatusPanel
