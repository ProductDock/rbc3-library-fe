import style from './ReviewComponent.module.css'
import avatarZoran from './../../../../assets/avatarZoran.svg'
import Typography from '@mui/material/Typography'
import { Divider, IconButton } from '@mui/material'
import editIcon from './../../../../assets/editIcon.svg'
import deleteIcon from './../../../../assets/deleteIcon.svg'
import starGrey from './../../../../assets/ratingStarGrey.svg'
import starYellow from './../../../../assets/ratingStarYellow.svg'

const ReviewComponent = () => {
  return (
    <div className={style.reviewWrapper}>
      <div className={style.reviewTopSectionWrapper}>
        <div className={style.avatarWrapper}>
          <div className={style.avatarImgWrapper}>
            <img src={avatarZoran} alt='avatar_zoran' />
          </div>
          <div className={style.nameAndDate}>
            <Typography variant='body1' className={style.nameText}>
              Zoran Jelic
            </Typography>
            <Typography variant='body1' className={style.dateText}>
              July 2024
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
          This book was not what I was hoping for and I kept waiting to have
          some revelation about interpersonal interaction.
        </Typography>
        <Typography variant='body1' className={style.recommendedTo}>
          Recommended to
          <Typography component='span' className={style.recommendedBold}>
            : Medior
          </Typography>
        </Typography>
      </div>
    </div>
  )
}
export default ReviewComponent
