import style from './ReviewComponent.module.css'
import Typography from '@mui/material/Typography'
import { Divider, IconButton } from '@mui/material'
import editIcon from './../../../../assets/editIcon.svg'
import deleteIcon from './../../../../assets/deleteIcon.svg'
import starGrey from './../../../../assets/ratingStarGrey.svg'
import starYellow from './../../../../assets/ratingStarYellow.svg'
import user from './../../../../assets/user.svg'
import { Review } from '../../../../shared/types'

interface ReviewProps {
  review: Review
}

const ReviewComponent = ({ review }: ReviewProps) => {
  function formatReviewDate(dateTime: string): string {
    const date = new Date(dateTime)
    if (isNaN(date.getTime())) {
      return 'Invalid Date'
    }

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
    }
    return date.toLocaleDateString('en-US', options)
  }

  function capitalizeFirstLetter(seniorities: string[]): string[] {
    return seniorities.map(seniority => {
      return (
        seniority.charAt(0).toUpperCase() + seniority.slice(1).toLowerCase()
      )
    })
  }

  return (
    <div className={style.reviewWrapper}>
      <div className={style.reviewTopSectionWrapper}>
        <div className={style.avatarWrapper}>
          <div className={style.avatarImgWrapper}>
            <img src={user} alt='avatar_img' />
          </div>
          <div className={style.nameAndDate}>
            <Typography variant='body1' className={style.nameText}>
              {'Anonymus user'}
            </Typography>
            <Typography variant='body1' className={style.dateText}>
              {formatReviewDate(review.dateTime)}
            </Typography>
          </div>
        </div>
        <div className={style.actionIconsWrapper}>
          <IconButton>
            <img src={editIcon} alt='edit_icon' />
          </IconButton>
          <Divider className={style.divider} orientation='vertical' flexItem />
          <IconButton>
            <img src={deleteIcon} alt='delete_icon' />
          </IconButton>
        </div>
      </div>
      <div className={style.reviewContentWrapper}>
        <div>
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              className={style.starIcon}
              src={index < review.rating ? starYellow : starGrey}
              alt='rating_star'
            />
          ))}
        </div>
        <Typography variant='body1' className={style.reviewContentText}>
          {review.content}
        </Typography>
        <Typography variant='body1' className={style.recommendedTo}>
          Recommended to
          <Typography component='span' className={style.recommendedBold}>
            : {capitalizeFirstLetter(review.seniorities).join(', ')}
          </Typography>
        </Typography>
      </div>
    </div>
  )
}
export default ReviewComponent
