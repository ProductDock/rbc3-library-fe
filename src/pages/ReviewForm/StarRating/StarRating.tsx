import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import StarIcon from '@mui/icons-material/Star'
import styles from '../ReviewForm.module.css'
import { useState } from 'react'

interface StarRatingProp {
  rating: number
  onChange: (newRating: number) => void
}

const StarRating: React.FC<StarRatingProp> = ({ rating, onChange }) => {
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
            onChange(index + 1)
          }}
          onMouseEnter={() => setHoverRating(index + 1)}
        >
          {index < hoverRating || index < rating ? (
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
