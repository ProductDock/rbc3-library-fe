import { Button, Divider, Typography } from '@mui/material'
import style from './ReviewList.module.css'
import { ReviewComponent } from './ReviewComponent'
import reviewStar from './../../../assets/totalReviewStar.svg'
import { useEffect, useState } from 'react'
import { ReviewForm } from '../../ReviewForm'

interface User {
  id: string
  fullName: string
  email: string
  imageUrl: string
  role: string
}

interface Review {
  id: string
  rating: number
  content: string
  recommendedFor: {
    seniority: string[]
  }
  dateTime: string
  bookId: string
  user: User
}

const ReviewList = () => {
  const [reviews, setReviews] = useState<Review[]>([])
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  const roundedAverageRating = averageRating.toFixed(1)

  useEffect(() => {
    fetch('http://localhost:3000/reviews')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched Reviews:', data)
        setReviews(data)
      })
      .catch(error => console.error('Error fetching reviews:', error))
  }, [])

  const [open, setOpen] = useState(false)
  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen)
  }
  return (
    <div>
      <div className={style.leaveReviewWrapper}>
        <div className={style.totalRatingWrapper}>
          <img
            className={style.reviewStarImg}
            src={reviewStar}
            alt='review_star'
          />
          <Typography variant='h6' className={style.ratingText}>
            {roundedAverageRating}
          </Typography>
          <Typography variant='h6' className={style.ratingDot}>
            ·
          </Typography>
          <Typography variant='h6' className={style.ratingText}>
            Reviews ({reviews.length}){' '}
          </Typography>
        </div>
        <div className={style.leaveReviewButtonWrapper}>
          <Button
            className={style.leaveReviewButton}
            onClick={() => toggleDrawer(true)}
          >
            <Typography variant='body1' className={style.leaveReviewButtonText}>
              Leave a review
            </Typography>
          </Button>
          <ReviewForm open={open} toggleDrawer={toggleDrawer} />
        </div>
      </div>
      <div>
        {reviews.map(review => (
          <div key={review.id}>
            <ReviewComponent review={review} />
            <Divider className={style.reviewDivider} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default ReviewList
