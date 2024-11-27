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

  const [showAll, setShowAll] = useState(false)

  const visibleReviews = showAll ? reviews : reviews.slice(0, 2)

  const handleShowAllReviewsClick = () => {
    setShowAll(true)
  }

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
      <div className={style.currentReviews}>
        {visibleReviews.map((review, index) => (
          <div key={review.id}>
            <ReviewComponent review={review} />
            {index < visibleReviews.length - 1 && (
              <Divider className={style.reviewDivider} />
            )}
          </div>
        ))}
        {!showAll && reviews.length > 2 && (
          <div className={style.showAllReviews}>
            <Button
              onClick={handleShowAllReviewsClick}
              className={style.showAllReviewsButton}
            >
              <Typography variant='body1' className={style.showAllText}>
                Show all {reviews.length} reviews
              </Typography>
            </Button>
            <Divider className={style.reviewDivider} />
          </div>
        )}
      </div>
    </div>
  )
}
export default ReviewList
