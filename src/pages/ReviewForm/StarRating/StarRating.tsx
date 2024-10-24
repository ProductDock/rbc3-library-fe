import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import StarIcon from '@mui/icons-material/Star'
import styles from '../ReviewForm.module.css'
import { useState } from 'react'

const StarRating = () => {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  return (
    <div
      className={styles.starContainer}
      onMouseLeave={() => setHoverRating(0)}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <div
          key={index}
          onClick={() => {
            setHoverRating(0)
            setRating(index + 1)
          }}
          onMouseEnter={() => {
            if (rating <= index + 1) {
              setHoverRating(index + 1)
            }
          }}
        >
          {index < rating || index < hoverRating ? (
            <StarIcon className={styles.filledStar} />
          ) : (
            <StarBorderOutlinedIcon />
          )}
        </div>
      ))}
    </div>
  )
}

export default StarRating
