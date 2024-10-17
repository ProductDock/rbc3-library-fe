import React from 'react'
import styles from './BookCard.module.css'
import { Favorite } from './Favorite'
import Divider from '@mui/material/Divider'
import { BookStatusPanel } from '../BookStatusPanel'
import { Typography } from '@mui/material'
import BookManagmentIcons from '../BookCardOfficeManager/BookManagmentIcons/BookManagmentIcons'

type BookCardProps = {
  inFavorites: boolean
  isAdmin?: boolean
}

const BookCard: React.FC<BookCardProps> = ({ inFavorites, isAdmin }) => {
  return (
    <div className={styles.bookCard}>
      {isAdmin ? (
        <Favorite inFavorites={inFavorites} isAdmin={true} />
      ) : (
        <Favorite inFavorites={inFavorites} />
      )}
      <div className={styles.cardContent}>
        <div className={isAdmin ? styles.infoAdminView : styles.info}>
          <Typography variant='body1' className={styles.author}>
            Author placeholder
          </Typography>
          <Typography variant='h5' className={styles.bookTitle}>
            Book title placeholder
          </Typography>
          {!isAdmin && <Divider className={styles.divider} />}
          <div className={styles.bookStatusPanel}>
            <div>{isAdmin && <Divider className={styles.divider} />}</div>
            <BookStatusPanel isRegularView={false} />
          </div>
          {isAdmin && (
            <div className={styles.managmentIcons}>
              <div className={styles.bookManagmentIconsView}>
                <BookManagmentIcons />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BookCard
