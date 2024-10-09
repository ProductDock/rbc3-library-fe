import React from 'react'
import favorite from '../../../assets/favorite.svg'
import favoriteFilled from '../../../assets/favoriteFilled.svg'
import book from '../../../assets/bookExample.svg'
import styles from '../Favorite/Favorite.module.css'

type FavoriteProps = {
  inFavorites: boolean
}

const Favorite: React.FC<FavoriteProps> = ({ inFavorites }) => {
  return (
    <div className={styles.cardVisual}>
      <div className={styles.bookImage}>
        <img className={styles.image} src={book} alt='book' />
      </div>
      <div className={styles.favorite}>
        <img
          className={styles.favoriteButton}
          src={inFavorites ? favoriteFilled : favorite}
          alt={inFavorites ? 'In favorites' : 'Not in favorites'}
        />
      </div>
    </div>
  )
}

export default Favorite
