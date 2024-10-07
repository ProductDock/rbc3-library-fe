import { Status } from './Status'
import styles from './BookStatus.module.css'
import cx from 'classnames'

interface BookProps {
  status: Status
}

const BookStatusRecord: Record<Status, string> = {
  [Status.AVAILABLE]: cx(styles.status, styles.green),
  [Status.RESERVED]: cx(styles.status, styles.yellow),
  [Status.RESERVED_BY_ME]: cx(styles.status, styles.yellow),
  [Status.RESERVED_BY]: cx(styles.status, styles.yellow),
  [Status.RENTED]: cx(styles.status, styles.red),
  [Status.RENTED_BY_ME]: cx(styles.status, styles.red),
  [Status.RENTED_BY]: cx(styles.status, styles.red),
  [Status.ON_WAIT_LIST]: cx(styles.status, styles.grey),
  [Status.PENDING]: cx(styles.status, styles.grey),
  [Status.APPROVED]: cx(styles.status, styles.green),
  [Status.DENIED]: cx(styles.status, styles.red),
  [Status.ORDERED]: cx(styles.status, styles.yellow),
  [Status.IN_LIBRARY]: cx(styles.status, styles.green),
}

const BookStatus = ({ status }: BookProps) => {
  const statusClass = BookStatusRecord[status]

  return (
    <div className={statusClass}>
      <p>{status}</p>
    </div>
  )
}

export default BookStatus
