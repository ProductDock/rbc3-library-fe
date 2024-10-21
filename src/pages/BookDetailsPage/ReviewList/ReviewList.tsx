import { Button, Typography } from '@mui/material'
import style from './ReviewList.module.css'
import { ReviewComponent } from './ReviewComponent'
import reviewStar from './../../../assets/reviewStar.svg'

const ReviewList = () => {
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
        <div className={style.leaveReviewButton}>
          <Button>Leave a review</Button>
        </div>
      </div>
      <div>
        <ReviewComponent />
      </div>
    </div>
  )
}
export default ReviewList
