import React from 'react'
import { Favorite } from './Favorite'
import Divider from '@mui/material/Divider'
import { BookStatusPanel } from '../BookStatusPanel'
import { Typography } from '@mui/material'
import BookManagmentIcons from '../BookCardOfficeManager/BookManagmentIcons/BookManagmentIcons'

import styles from './BookCard.module.css'

type BookCardProps = {
  inFavorites: boolean
  isAdmin?: boolean
  title?: string
  author?: string[]
}

const BookCard: React.FC<BookCardProps> = ({
  inFavorites,
  isAdmin,
  title,
  author,
}) => {
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
            {author || 'Author placeholder'}
          </Typography>
          <Typography variant='h5' className={styles.bookTitle}>
            {title || 'Book title placeholder'}
          </Typography>
          {!isAdmin && <Divider className={styles.divider} />}
          <div className={styles.bookStatusPanel}>
            <div className={styles.statusPanel}>
              <BookStatusPanel layoutDirection={'rating-left'} />
            </div>
            <div>{isAdmin && <Divider className={styles.adminDivider} />}</div>
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
