import styles from './BookCardOfficeManager.module.css'
import cover from '../../assets/bookDesignForMotion.svg'
import favorite from '../../assets/favoriteBookManagment.svg'
import edit from '../../assets/edit.svg'
import remove from '../../assets/delete.svg'
import { Typography } from '@mui/material'
import { BookStatusPanel } from '../BookStatusPanel'

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
          <BookStatusPanel />
        </div>
        <div className={styles.bookManagmentIconsWrapper}>
          <div className={styles.iconContainer}>
            <img
              src={favorite}
              alt='favoriteIcon'
              className={styles.favoriteIcon}
            />
          </div>
          <div className={styles.iconContainer}>
            <img src={remove} alt='removeIcon' className={styles.removeIcon} />
          </div>
          <div className={styles.iconContainer}>
            <img src={edit} alt='editIcon' className={styles.editIcon} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default BookCardOfficeManager
