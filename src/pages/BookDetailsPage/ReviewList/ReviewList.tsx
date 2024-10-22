import { Button, Divider, Typography } from '@mui/material'
import style from './ReviewList.module.css'
import { ReviewComponent } from './ReviewComponent'
import reviewStar from './../../../assets/totalReviewStar.svg'
import { useEffect, useState } from 'react'

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

  useEffect(() => {
    fetch('http://localhost:3000/reviews')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched Reviews:', data)
        setReviews(data)
      })
      .catch(error => console.error('Error fetching reviews:', error))
  }, [])
  return (
    <div className={style.reviewListWrapper}>
      <div className={style.leaveReviewWrapper}>
        <div className={style.totalRatingWrapper}>
          <img
            className={style.reviewStarImg}
            src={reviewStar}
            alt='review_star'
          />
          <Typography variant='h6' className={style.ratingText}>
            4.3
          </Typography>
          <Typography variant='h6' className={style.ratingDot}>
            ·
          </Typography>
          <Typography variant='h6' className={style.ratingText}>
            Reviews (24){' '}
          </Typography>
        </div>
        <div className={style.leaveReviewButtonWrapper}>
          <Button className={style.leaveReviewButton}>
            <Typography variant='body1' className={style.leaveReviewButtonText}>
              Leave a review
            </Typography>
          </Button>
        </div>
      </div>
      <div>
        {reviews.map(review => (
          <div key={review.id}>
            <ReviewComponent review={review} />
            <Divider className={style.reviewDivider} />
          </div>
        ))}
        {/* <ReviewComponent />
        <Divider className={style.reviewDivider} />

        <ReviewComponent />

        <Divider className={style.reviewDivider} /> */}
      </div>
    </div>
  )
}
export default ReviewList
