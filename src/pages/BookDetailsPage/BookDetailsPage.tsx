import { Button, Divider, Typography, useMediaQuery } from '@mui/material'
import { BookStatusPanel } from '../../components/BookStatusPanel'
import bookCover from '../../assets/bookCover.svg'
import { EditButton } from '../../components/EditButton'
import { DeleteButton } from '../../components/DeleteButton'
import { BookCard } from '../../components/BookCard'
import { BackButton } from '../../components/Shared'
import { ReviewList } from './ReviewList'

import styles from './BookDetailsPage.module.css'

type BookDetailsPageProps = {
  isUserAdmin: boolean
}

const BookDetailsPage: React.FC<BookDetailsPageProps> = ({ isUserAdmin }) => {
  const matchesMobile = useMediaQuery('(max-width:450px)')

  return (
    <div className={styles.wrapper}>
      <div className={styles.bookWrapper}>
        {matchesMobile ? (
          <BookCard
            inFavorites={true}
            isAdmin={false}
            author={'Nicholas Epley'}
            title={
              'Mindwise: Why we misunderstand what others think, believe, feel and want'
            }
          />
        ) : (
          <div className={styles.bookInfoWrapper}>
            <div className={styles.bookInfo}>
              <div className={styles.buttons}>
                <div className={styles.back}>
                  {!matchesMobile && <BackButton />}
                </div>
                <div
                  className={
                    isUserAdmin ? styles.adminButtonGroup : styles.buttonGroup
                  }
                >
                  <div className={styles.edit}>
                    <EditButton />
                  </div>
                  <div className={styles.delete}>
                    <DeleteButton />
                  </div>
                </div>
              </div>
              <Divider className={styles.leftUpper} />
              <div className={styles.author}>
                <Typography variant='h6' className={styles.authorText}>
                  Nicholas Epley
                </Typography>
              </div>
              <div className={styles.title}>
                <Typography
                  variant={matchesMobile ? 'h4' : 'subtitle2'}
                  className={styles.titleText}
                >
                  Mindwise: Why we misunderstand what others think, believe,
                  feel and want
                </Typography>
              </div>
              <div className={styles.statusPanel}>
                <BookStatusPanel layoutDirection={'rating-left'} />
              </div>
              <Divider className={styles.leftMiddle} />
            </div>
            <div className={styles.bookVisual}>
              <div className={styles.midScreenBackButton}>
                <BackButton />
              </div>
              <div className={styles.bookImage}>
                <img src={bookCover} alt='book' className={styles.image} />
              </div>
            </div>
          </div>
        )}

        <div className={styles.descriptionWrapper}>
          <div className={styles.bookDescription}>
            <div className={styles.header}>
              <Typography variant='h6' className={styles.headerText}>
                Description:
              </Typography>
            </div>
            <div className={styles.description}>
              <Typography variant='body1'>
                Why are we sometimes blind to the minds of others, treating them
                like objects or animals instead? Why do we talk to our cars, or
                the stars, as if there is a mind that can hear us? Why do we so
                routinely believe that others think, feel, and want what we do
                when, in fact, they do not? And why do we think we understand
                our spouses, family, and friends so much better than we actually
                do? <br />
                <br /> In this illuminating book, leading social psychologist
                Nicholas Epley introduces us to what scientists have learned
                about our ability to understand the most complicated puzzle on
                the planet—other people—and the surprising mistakes we so
                routinely make. Mindwise will not turn others into open books,
                but it will give you the wisdom to revolutionize how you think
                about them—and yourself.
              </Typography>
            </div>
            <div className={styles.genres}>
              <Button
                className={matchesMobile ? styles.genreMobile : styles.genre}
              >
                <Typography variant={matchesMobile ? 'body1' : 'h6'}>
                  Product management
                </Typography>
              </Button>
              <Button
                className={matchesMobile ? styles.genreMobile : styles.genre}
              >
                <Typography variant={matchesMobile ? 'body1' : 'h6'}>
                  Design
                </Typography>
              </Button>
            </div>
            <Divider className={styles.leftLower} />
            <div>
              <ReviewList />
            </div>
          </div>

          <div className={styles.rentOptions}>
            <Button className={styles.rentButton}>Rent the book</Button>
            <Button className={styles.reserveButton}>Reserve the book</Button>
            <Divider className={styles.right} />
            <div className={styles.help}>
              <Typography variant='body1' className={styles.helpText}>
                How to pick up your book?
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetailsPage
