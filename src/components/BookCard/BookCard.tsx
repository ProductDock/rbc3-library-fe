import React from 'react'
import { Favorite } from './Favorite'
import Divider from '@mui/material/Divider'
import { BookStatusPanel } from '../BookStatusPanel'
import { Typography } from '@mui/material'
import BookManagmentIcons from '../BookCardOfficeManager/BookManagmentIcons/BookManagmentIcons'

import styles from './BookCard.module.css'
import { Status } from '../BookStatusPanel/BookStatus/Status'

type BookCardProps = {
  onClick?: () => void
  inFavorites: boolean
  isAdmin?: boolean
  title?: string
  author?: string[]
  status: Status
  rating: string
  image: string
}

const BookCard: React.FC<BookCardProps> = ({
  onClick,
  inFavorites,
  isAdmin,
  title,
  author,
  status,
  rating,
  image,
}) => {
  return (
    <div className={styles.bookCard} onClick={onClick}>
      {isAdmin ? (
        <Favorite inFavorites={inFavorites} isAdmin={true} image={image} />
      ) : (
        <Favorite inFavorites={inFavorites} image={image} />
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
              <BookStatusPanel
                rating={rating}
                layoutDirection={'rating-left'}
                status={status}
              />
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
