import {
  Box,
  Button,
  Divider,
  Drawer,
  styled,
  Typography,
  useMediaQuery,
} from '@mui/material'
import styles from './ReviewForm.module.css'
import { StarRating } from './StarRating'
import { RecomendationCheckBox } from './RecomendationCheckBox'
import TextField from '@mui/material/TextField'
import close from '../../assets/closeBlack.svg'
import { useState } from 'react'

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& input::placeholder': {
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.lineHeight,
    letterSpacing: theme.typography.h6.letterSpacing,
    opacity: 1,
  },
}))

interface ReviewFormProps {
  open: boolean
  toggleDrawer: (newOpen: boolean) => void
}

export const ReviewForm: React.FC<ReviewFormProps> = ({
  open,
  toggleDrawer,
}) => {
  const matches = useMediaQuery('(min-width:700px)')

  const [reviewText, setReviewText] = useState('')
  const [rating, setRating] = useState<number>(0)
  const [recommendation, setRecommendation] = useState<string[]>([])

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReviewText(event.target.value)
  }

  const handleSubmit = () => {
    const reviewData = {
      rating,
      recommendation,
      reviewText,
    }

    console.log('Review submitted:', reviewData)
  }

  const formContent = (
    <>
      <div className={styles.reviewFormContainer}>
        <div className={styles.formContainer}>
          <div className={styles.closeBar} onClick={() => toggleDrawer(false)}>
            <img src={close} alt='close' className={styles.closeIcon} />
          </div>
          <div className={styles.headerAndRatingContainer}>
            <div className={styles.headerContainer}>
              <Typography
                variant={matches ? 'subtitle2' : 'h4'}
                className={styles.headerText}
              >
                Write a review
              </Typography>
            </div>
            <div className={styles.ratingContainer}>
              <Typography variant='h6' className={styles.rateText}>
                Rate
                <span className={styles.star}>*</span>
              </Typography>
              <div>
                <StarRating rating={rating} onChange={setRating} />
              </div>
            </div>
          </div>
          <Divider />
          <div className={styles.recomendationContainer}>
            <div>
              <Typography
                variant='h6'
                className={styles.recomentationHeaderText}
              >
                Who would benefit from this book?
              </Typography>
            </div>
            <div>
              <RecomendationCheckBox
                value={recommendation}
                onChange={setRecommendation}
              />
            </div>
          </div>
          <Divider />
          <div className={styles.textFieldContainer}>
            <div className={styles.reviewHeader}>
              <Typography variant='h6' className={styles.rateText}>
                Review
                <span className={styles.star}>*</span>
              </Typography>
            </div>
            <div className={styles.textAreaWrapper}>
              <StyledTextField
                variant='outlined'
                multiline
                rows={4}
                className={styles.textArea}
                placeholder='What is your personal opinion about this book'
                onChange={handleTextChange}
                slotProps={{
                  input: {
                    sx: {
                      borderRadius: 0,
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'var(--mui-palette-neutral-600)',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'var(--mui-palette-neutral-600)',
                        opacity: 0.5,
                      },
                      '& .MuiOutlinedInput-input': {
                        padding: '0px 16px',
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              className={styles.cancelButton}
              onClick={() => toggleDrawer(false)}
            >
              <Typography variant='h6' className={styles.cancelButtonText}>
                Cancel
              </Typography>
            </Button>
            <Button className={styles.submitButton} onClick={handleSubmit}>
              <Typography variant='h6' className={styles.submitButtonText}>
                Submit
              </Typography>
            </Button>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <Drawer
      anchor='right'
      open={open}
      onClose={() => toggleDrawer(false)}
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: '800px',
          height: '100%',
        },
      }}
    >
      <Box role='presentation' sx={{ overflowY: 'auto', height: '100%' }}>
        {formContent}
      </Box>
    </Drawer>
  )
}

export default ReviewForm
