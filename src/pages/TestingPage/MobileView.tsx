import { Typography } from '@mui/material'
import { Book } from './TestingPage'
import styles from './TestingPage.module.css'

type Props = {
  books: Book[]
}

export const MobileView = ({ books }: Props) => {
  return (
    <div className={styles.wrapperMobile} data-testid='mobile-view'>
      {books.map(function (book) {
        return (
          <div key={book.id} className={styles.booksMobile}>
            <Typography variant='h4'>Author: {book.author}</Typography>
            <Typography variant='h4'>Title: {book.title}</Typography>
          </div>
        )
      })}
    </div>
  )
}
