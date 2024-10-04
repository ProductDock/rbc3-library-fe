import React from 'react'
import styles from './BookCard.module.css'
import Favorite from './Favorite/Favorite'
import Divider from '@mui/material/Divider'

type BookCardProps = {
  inFavorites: boolean
}

const BookCard: React.FC<BookCardProps> = ({ inFavorites }) => {
  return (
    <div className={styles.bookCard}>
      <Favorite inFavorites={inFavorites} />
      <div className={styles.cardContent}>
        <div className={styles.info}>
          <div className={styles.author}>
            <p className={styles.authorName}>Author placeholder</p>
          </div>
          <div className={styles.bookTitle}>
            <h2 className={styles.title}>Book title placeholder</h2>
          </div>
          <Divider className={styles.divider} />
          {/* <div className={styles.line}></div> */}
        </div>
      </div>
    </div>
  )
}

export default BookCard
