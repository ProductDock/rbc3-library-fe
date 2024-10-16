import { BookRating } from './BookRating'
import { BookStatus } from './BookStatus'
import { Status } from './BookStatus/Status'

import styles from './BookStatusPanel.module.css'

type BookStatusPanelProps = {
  isAdmin?: boolean
}

export const BookStatusPanel: React.FC<BookStatusPanelProps> = ({
  isAdmin,
}) => {
  return (
    <>
      {!isAdmin && (
        <div className={styles.statusPanel}>
          <BookStatus status={Status.RENTED} />
          <BookRating rating={4.5} />
        </div>
      )}
      {isAdmin && (
        <div className={styles.statusPanelAdmin}>
          <BookStatus status={Status.RENTED} />
          <BookRating rating={4.5} />
        </div>
      )}
    </>
  )
}
export default BookStatusPanel
