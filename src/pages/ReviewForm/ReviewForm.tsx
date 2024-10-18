import {
  Button,
  Divider,
  styled,
  Typography,
  useMediaQuery,
} from '@mui/material'
import styles from './ReviewForm.module.css'
import { StarRating } from './StarRating'
import { RecomendationCheckBox } from './RecomendationCheckBox'
import TextField from '@mui/material/TextField'

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& input::placeholder': {
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.lineHeight,
    letterSpacing: theme.typography.h6.letterSpacing,
    opacity: 1,
  },
}))

export const ReviewForm = () => {
  const matches = useMediaQuery('(min-width:700px)')
  return (
    <>
      <div className={styles.reviewFormContainer}>
        <div className={styles.formContainer}>
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
                <StarRating />
              </div>
            </div>
          </div>
          <Divider />
          <div className={styles.recomendationContainer}>
            <div className={styles.recomendationContainerHeader}>
              <Typography
                variant='h6'
                className={styles.recomentationHeaderText}
              >
                Who would benefit from this book?
              </Typography>
            </div>
            <div>
              <RecomendationCheckBox />
            </div>
          </div>
          <Divider className={styles.divider} />
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
                InputProps={{
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
                }}
              />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button className={styles.cancelButton}>
              <Typography variant='h6' className={styles.cancelButtonText}>
                Cancel
              </Typography>
            </Button>
            <Button className={styles.submitButton}>
              <Typography variant='h6' className={styles.submitButtonText}>
                Submit
              </Typography>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewForm
