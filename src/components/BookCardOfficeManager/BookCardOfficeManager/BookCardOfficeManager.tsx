import styles from './BookCardOfficeManager.module.css'
import cover from '../../../assets/bookExample.svg'
import { Typography } from '@mui/material'
import { BookStatusPanel } from '../../BookStatusPanel'
import { BookManagmentIcons } from '../BookManagmentIcons'

const BookCardOfficeManager = () => {
  return (
    <div className={styles.bookCardWrapper}>
      <div className={styles.cardImageWrapper}>
        <img src={cover} alt='bookCover' className={styles.imageHolder} />
      </div>
      <div className={styles.cardDetailsWrapper}>
        <div className={styles.cardDetails}>
          <Typography variant='body2' className={styles.bookAuthor}>
            Author placeholder
          </Typography>
          <Typography variant='h6' className={styles.bookTitle}>
            Book Title placeholder
          </Typography>
          <div className={styles.bookStatusPanelAdmin}>
            <BookStatusPanel isAdmin={true} />
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
