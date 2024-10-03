import React from 'react'
import styles from './BookCard.module.css'
import favorite from '../../assets/favorite.svg'
import book from '../../assets/bookExample.svg'

const BookCard = () => {
  return (
    <div className={styles.bookCard}>
      <div className={styles.cardVisual}>
        <div className={styles.bookImage}>
          <img className={styles.image} src={book} alt='book' />
        </div>
        <div className={styles.favorite}>
          <img src={favorite} className={styles.favoriteButton} />
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.info}>
          <div className={styles.author}>
            <p className={styles.authorName}>Author placeholder</p>
          </div>
          <div className={styles.bookTitle}>
            <h2 className={styles.title}>Book title placeholder</h2>
          </div>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
  )
}

export default BookCard
