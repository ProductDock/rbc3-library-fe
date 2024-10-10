import React from 'react'
import styles from './BookCard.module.css'
import { Favorite } from './Favorite'
import Divider from '@mui/material/Divider'
import { BookStatusPanel } from '../BookStatusPanel'
import { Typography } from '@mui/material'

type BookCardProps = {
  inFavorites: boolean
}

const BookCard: React.FC<BookCardProps> = ({ inFavorites }) => {
  return (
    <div className={styles.bookCard}>
      <Favorite inFavorites={inFavorites} />
      <div className={styles.cardContent}>
        <div className={styles.info}>
          <Typography variant='body1' className={styles.author}>
            Author placeholder
          </Typography>
          <Typography variant='h5' className={styles.bookTitle}>
            Book title placeholder
          </Typography>
          <Divider className={styles.divider} />
          <div className={styles.bookStatusPanel}>
            <BookStatusPanel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookCard
