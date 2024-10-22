import style from './ReviewComponent.module.css'
import Typography from '@mui/material/Typography'
import { Divider, IconButton } from '@mui/material'
import editIcon from './../../../../assets/editIcon.svg'
import deleteIcon from './../../../../assets/deleteIcon.svg'
import starGrey from './../../../../assets/ratingStarGrey.svg'
import starYellow from './../../../../assets/ratingStarYellow.svg'

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

interface ReviewProps {
  review: Review
}

const ReviewComponent = ({ review }: ReviewProps) => {
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
          <img className={style.starIcon} src={starYellow} alt='star_yellow' />
          <img className={style.starIcon} src={starGrey} alt='star_gray' />
          <img className={style.starIcon} src={starGrey} alt='star_gray' />
          <img className={style.starIcon} src={starGrey} alt='star_gray' />
          <img src={starGrey} alt='star_gray' />
        </div>
        <Typography variant='body1' className={style.reviewContentText}>
          {review.content}
        </Typography>
        <Typography variant='body1' className={style.recommendedTo}>
          Recommended to
          <Typography component='span' className={style.recommendedBold}>
            : {review.recommendedFor.seniority}
          </Typography>
        </Typography>
      </div>
    </div>
  )
}
export default ReviewComponent
