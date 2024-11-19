import { Status } from './Status'
import styles from './BookStatus.module.css'
import cx from 'classnames'
import { Typography } from '@mui/material'

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

  const statusFromSnakeCase = (status: string): string => {
    return status
      .replace(/_/g, ' ')
      .toLowerCase()
      .replace(/^\w/, match => match.toUpperCase())
  }

  return (
    <div className={statusClass}>
      <Typography variant='h6' className={styles.statusText}>
        {statusFromSnakeCase(status)}
      </Typography>
    </div>
  )
}

export default BookStatus
