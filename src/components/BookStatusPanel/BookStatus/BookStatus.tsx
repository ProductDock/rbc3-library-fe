import { Status } from './Status'
import styles from './BookStatus.module.css'

interface BookProps {
  status: Status
}

const BookStatusRecord: Record<Status, string> = {
  [Status.AVAILABLE]: styles.green,
  [Status.RESERVED]: styles.yellow,
  [Status.RESERVED_BY_ME]: styles.yellow,
  [Status.RESERVED_BY]: styles.yellow,
  [Status.RENTED]: styles.red,
  [Status.RENTED_BY_ME]: styles.red,
  [Status.RENTED_BY]: styles.red,
  [Status.ON_WAIT_LIST]: styles.grey,
  [Status.PENDING]: styles.grey,
  [Status.APPROVED]: styles.green,
  [Status.DENIED]: styles.red,
  [Status.ORDERED]: styles.yellow,
  [Status.IN_LIBRARY]: styles.green,
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
