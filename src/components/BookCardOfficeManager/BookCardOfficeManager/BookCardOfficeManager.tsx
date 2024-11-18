import styles from './BookCardOfficeManager.module.css'
import cover from '../../../assets/bookExample.svg'
import { Divider, Typography } from '@mui/material'
import { BookStatusPanel } from '../../BookStatusPanel'
import { BookManagmentIcons } from '../BookManagmentIcons'

interface BookProps {
  title: string
  author: string[]
}

const BookCardOfficeManager: React.FC<BookProps> = ({ title, author }) => {
  return (
    <div className={styles.bookCardWrapper}>
      <div className={styles.cardImageWrapper}>
        <img src={cover} alt='bookCover' className={styles.imageHolder} />
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
            <BookStatusPanel layoutDirection={'status-left'} />
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
