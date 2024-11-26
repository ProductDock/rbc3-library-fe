import React from 'react'
import favorite from '../../../assets/favorite.svg'
import favoriteFilled from '../../../assets/favoriteFilled.svg'
import styles from '../Favorite/Favorite.module.css'

type FavoriteProps = {
  inFavorites: boolean
  isAdmin?: boolean
  image: string
}

const Favorite: React.FC<FavoriteProps> = ({ inFavorites, isAdmin, image }) => {
  return (
    <div className={styles.cardVisual}>
      <div className={styles.bookImage}>
        <img className={styles.image} src={image} alt='book' />
      </div>
      {!isAdmin && (
        <div className={styles.favorite}>
          <img
            className={styles.favoriteButton}
            src={inFavorites ? favoriteFilled : favorite}
            alt={inFavorites ? 'In favorites' : 'Not in favorites'}
          />
        </div>
      )}
    </div>
  )
}

export default Favorite
