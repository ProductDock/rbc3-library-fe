import { Button, Divider, Typography, useMediaQuery } from '@mui/material'
import { BookStatusPanel } from '../../components/BookStatusPanel'
import { EditButton } from '../../components/EditButton'
import { DeleteButton } from '../../components/DeleteButton'
import { BookCard } from '../../components/BookCard'
import { BackButton } from '../../components/Shared'
import { ReviewList } from './ReviewList'

import styles from './BookDetailsPage.module.css'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ReviewWithId } from '../../shared/types'
import apiService from '../../shared/api/apiService'

const BookDetailsPage = () => {
  const location = useLocation()
  const { bookData, isUserAdmin } = location.state
  const matchesMobile = useMediaQuery('(max-width:450px)')
  const authorName = bookData?.authors?.[0]?.fullName
  const categories: string[] = bookData?.bookCategories || []

  const [reviews, setReviews] = useState<ReviewWithId[]>([])
  const [averageRating, setAverageRating] = useState<number>(0)

  useEffect(() => {
    apiService
      .fetchBookReviews(bookData.id)
      .then(reviewsData => {
        setReviews(reviewsData.content)

        const totalRating = reviewsData.content.reduce(
          (acc: number, review: { rating: number }) => acc + review.rating,
          0
        )
        setAverageRating(totalRating / reviewsData.content.length || 0)
      })
      .catch(error => {
        console.error('Error fetching reviews:', error)
      })
  }, [bookData.id])

  const categoryFromSnakeCase = (category: string): string => {
    return category
      .replace(/_/g, ' ')
      .toLowerCase()
      .replace(/^\w/, match => match.toUpperCase())
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.bookWrapper}>
        {matchesMobile ? (
          <BookCard
            inFavorites={true}
            isAdmin={false}
            author={authorName}
            title={bookData.title}
            status={bookData.bookStatus}
            image={`http://localhost:8080/books/photo/${bookData.id}`}
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
                  {authorName}
                </Typography>
              </div>
              <div className={styles.title}>
                <Typography
                  variant={matchesMobile ? 'h4' : 'subtitle2'}
                  className={styles.titleText}
                >
                  {bookData.title}
                </Typography>
              </div>
              <div className={styles.statusPanel}>
                <BookStatusPanel
                  layoutDirection={'rating-left'}
                  status={bookData.bookStatus}
                  rating={bookData.averageRating}
                />
              </div>
              <Divider className={styles.leftMiddle} />
            </div>
            <div className={styles.bookVisual}>
              <div className={styles.midScreenBackButton}>
                <BackButton />
              </div>
              <div className={styles.bookImage}>
                <img
                  src={`http://localhost:8080/books/photo/${bookData.id}`}
                  alt='book'
                  className={styles.image}
                />
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
              <Typography variant='body1'>{bookData.description}</Typography>
            </div>
            <div className={styles.genres}>
              {categories.map((category, index) => (
                <Button
                  key={index}
                  className={matchesMobile ? styles.genreMobile : styles.genre}
                >
                  <Typography variant={matchesMobile ? 'body1' : 'h6'}>
                    {categoryFromSnakeCase(category)}
                  </Typography>
                </Button>
              ))}
            </div>
            <Divider className={styles.leftLower} />
            <div className={styles.reviews}>
              <ReviewList
                reviews={reviews}
                averageRating={averageRating}
                bookId={bookData.id}
              />
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
