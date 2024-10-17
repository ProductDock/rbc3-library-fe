import { BookRating } from './BookRating'
import { BookStatus } from './BookStatus'
import { Status } from './BookStatus/Status'

import styles from './BookStatusPanel.module.css'

type BookStatusPanelProps = {
  isRegularView: boolean
  isAdmin?: boolean
}

// <div className={isAdmin ? styles.statusPanelAdmin : styles.statusPanel}>

// TODO merge styles properly

export const BookStatusPanel: React.FC<BookStatusPanelProps> = ({
  isRegularView,
  isAdmin,
}) => {
  return (
    <div
      className={`${styles.statusPanel} ${
        isRegularView ? styles.regularView : styles.bookDetailsView
      }`}
    >
      <BookStatus status={Status.APPROVED} />
      <BookRating rating={4.5} />
    </div>
  )
}
export default BookStatusPanel
