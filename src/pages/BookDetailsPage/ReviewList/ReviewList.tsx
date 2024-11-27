import { Button, Divider, Typography } from '@mui/material'
import style from './ReviewList.module.css'
import { ReviewComponent } from './ReviewComponent'
import reviewStar from './../../../assets/totalReviewStar.svg'
import { useState } from 'react'
import { ReviewForm } from '../../ReviewForm'
import { ReviewWithId } from '../../../shared/types'

type ReviewListProps = {
  reviews: ReviewWithId[]
  averageRating: number
  bookId: string
}

const ReviewList: React.FC<ReviewListProps> = ({
  reviews,
  averageRating,
  bookId,
}) => {
  const roundedAverageRating = averageRating.toFixed(1)

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
          <ReviewForm open={open} toggleDrawer={toggleDrawer} bookId={bookId} />
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
