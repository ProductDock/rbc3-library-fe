import style from './ReviewComponent.module.css'
import Typography from '@mui/material/Typography'
import { Divider, IconButton } from '@mui/material'
import editIcon from './../../../../assets/editIcon.svg'
import deleteIcon from './../../../../assets/deleteIcon.svg'
import starGrey from './../../../../assets/ratingStarGrey.svg'
import starYellow from './../../../../assets/ratingStarYellow.svg'
import { Review } from '../../../../shared/types'

interface ReviewProps {
  review: Review
}

const ReviewComponent = ({ review }: ReviewProps) => {
  const loggedUserId = '1'

  return (
    <div className={style.reviewWrapper}>
      <div className={style.reviewTopSectionWrapper}>
        <div className={style.avatarWrapper}>
          <div className={style.avatarImgWrapper}>
            <img src={review.user.imageUrl} alt='avatar_img' />
          </div>
          <div className={style.nameAndDate}>
            <Typography variant='body1' className={style.nameText}>
              {review.user.fullName}
            </Typography>
            <Typography variant='body1' className={style.dateText}>
              {review.dateTime}
            </Typography>
          </div>
        </div>
        <div
          className={
            loggedUserId === review.user.id
              ? style.actionIconsWrapper
              : style.hideActionIcons
          }
        >
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
            : {review.recommendedFor.seniority.join(', ')}
          </Typography>
        </Typography>
      </div>
    </div>
  )
}
export default ReviewComponent
