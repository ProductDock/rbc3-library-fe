import styles from './BookCardOfficeManager.module.css'
import { Divider, Typography } from '@mui/material'
import { BookStatusPanel } from '../../BookStatusPanel'
import { BookManagmentIcons } from '../BookManagmentIcons'
import { Status } from '../../BookStatusPanel/BookStatus/Status'

interface BookProps {
  onClick?: () => void
  title: string
  author: string[]
  image: string
  status: Status
}

const BookCardOfficeManager: React.FC<BookProps> = ({
  onClick,
  title,
  author,
  image,
  status,
}) => {
  return (
    <div className={styles.bookCardWrapper} onClick={onClick}>
      <div className={styles.cardImageWrapper}>
        <img src={image} alt='bookCover' className={styles.imageHolder} />
      </div>
      <div className={styles.cardDetailsWrapper}>
        <div className={styles.cardDetails}>
          <Typography variant='body2' className={styles.bookAuthor}>
            {author}
          </Typography>
          <Divider />

          <Typography variant='h6' className={styles.bookTitle}>
            {title}
          </Typography>
          <div className={styles.bookStatusPanelAdmin}>
            <BookStatusPanel layoutDirection={'status-left'} status={status} />
          </div>
        </div>
        <div className={styles.bookManagmentIconsView}>
          <BookManagmentIcons />
        </div>
      </div>
    </div>
  )
}
export default BookCardOfficeManager
