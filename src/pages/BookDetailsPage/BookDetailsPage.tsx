import styles from './BookDetailsPage.module.css'
import backButton from '../../assets/backButton.svg'
import editButton from '../../assets/edit.svg'
import deleteButton from '../../assets/delete.svg'
import { Button, Divider, Typography, useMediaQuery } from '@mui/material'
import { BookStatusPanel } from '../../components/BookStatusPanel'
import bookCover from '../../assets/bookCover.svg'

type BookDetailsPageProps = {
  isUserAdmin: boolean
}

const BookDetailsPage: React.FC<BookDetailsPageProps> = ({ isUserAdmin }) => {
  const matches = useMediaQuery('(min-width:1100px)')
  return (
    <div className={styles.wrapper}>
      <div className={styles.bookInfo}>
        <div className={styles.buttons}>
          <div className={styles.back}>
            <img src={backButton} alt='back' className={styles.backIcon} />
            <Typography variant='h6'>Back</Typography>
          </div>
          <div
            className={
              isUserAdmin ? styles.adminButtonGroup : styles.buttonGroup
            }
          >
            <div className={styles.edit}>
              <img src={editButton} alt='edit' />
              <Typography variant='h6'>Edit</Typography>
            </div>
            <div className={styles.delete}>
              <img src={deleteButton} alt='delete' />
              <Typography variant={matches ? 'h3' : 'h6'}>Delete</Typography>
            </div>
          </div>
        </div>
        <Divider className={styles.leftUpper} />
        <div className={styles.bookDetails}>
          <div className={styles.author}>
            <Typography variant='h6'>Nicholas Epley</Typography>
          </div>
          <div className={styles.title}>
            <Typography variant='h4'>
              Mindwise: How We Understand What Others Think, Believe, Feel, and
              Want
            </Typography>
          </div>
          <div className={styles.statusPanel}>
            <BookStatusPanel isRegularView={false} />
          </div>
        </div>
        <Divider />
        <div className={styles.bookDescription}>
          <div className={styles.headerDescription}>
            <Typography variant='h6'>Description:</Typography>
          </div>
          <Typography variant='h6' className={styles.description}>
            Why are we sometimes blind to the minds of others, treating them
            like objects or animals instead? Why do we talk to our cars, or the
            stars, as if there is a mind that can hear us? Why do we so
            routinely believe that others think, feel, and want what we do when,
            in fact, they do not? And why do we think we understand our spouses,
            family, and friends so much better than we actually do? <br />
            <br /> In this illuminating book, leading social psychologist
            Nicholas Epley introduces us to what scientists have learned about
            our ability to understand the most complicated puzzle on the
            planet—other people—and the surprising mistakes we so routinely
            make. Mindwise will not turn others into open books, but it will
            give you the wisdom to revolutionize how you think about them—and
            yourself.
          </Typography>
        </div>
        <div className={styles.genres}>
          <Button className={styles.button}>
            <Typography variant='h6'>Product management</Typography>
          </Button>
          <Button className={styles.button}>
            <Typography variant='h6'>Design</Typography>
          </Button>
        </div>
        <Divider className={styles.leftLower} />
        <div className={styles.commentSection}></div>
      </div>
      <div className={styles.options}>
        <div className={styles.bookImage}>
          <img src={bookCover} alt='book' />
        </div>
        <div className={styles.rentOptions}>
          <Button className={styles.rentButton}>Rent the book</Button>
          <Button className={styles.reserveButton}>Reserve the book</Button>
          <Divider className={styles.right} />
          <div>
            <Typography variant='h6'>How to pick up your book?</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetailsPage
