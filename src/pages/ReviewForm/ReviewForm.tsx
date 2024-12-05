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
import { useEffect, useState } from 'react'
import apiService from '../../shared/api/apiService'
import { ReviewWithId } from '../../shared/types'
import Snackbar from '@mui/material/Snackbar'

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& input::placeholder': {
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.lineHeight,
    letterSpacing: theme.typography.h6.letterSpacing,
    opacity: 1,
  },
}))

interface ReviewFormProps {
  setReviews: (review: ReviewWithId[]) => void
  open: boolean
  toggleDrawer: (newOpen: boolean) => void
  bookId: string
  reviews: ReviewWithId[]
  setAverageRating: (rating: number) => void
}

export const ReviewForm: React.FC<ReviewFormProps> = ({
  reviews,
  setReviews,
  open,
  toggleDrawer,
  bookId,
  setAverageRating,
}) => {
  const matches = useMediaQuery('(min-width:700px)')

  const [content, setContent] = useState('')
  const [rating, setRating] = useState<number>(0)
  const [seniorities, setSeniorities] = useState<string[]>([])
  const [dateTime, setDateTime] = useState('')
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value)
  }

  useEffect(() => {
    const today = new Date()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const formattedDate = `${year}-${
      month < 10 ? '0' + month : month
    }-01T00:00:00`
    setDateTime(formattedDate)
  }, [])

  const seniorityToSnakeCase = (categories: string[]): string[] => {
    return categories.map(category => category.toLocaleUpperCase())
  }

  const handleSubmit = () => {
    const reviewData = {
      rating,
      seniorities: seniorityToSnakeCase(seniorities),
      content,
      dateTime,
      bookId,
    }

    apiService
      .addReview(bookId, reviewData)
      .then(data => {
        const updatedReviews = [...reviews, data]
        setReviews(updatedReviews)

        const totalRating = updatedReviews.reduce(
          (acc: number, review: { rating: number }) => acc + review.rating,
          0
        )
        const newAverageRating = totalRating / updatedReviews.length || 0
        const roundedAverageRating = Math.round(newAverageRating * 2) / 2
        const finalAverageRating = Number(roundedAverageRating)

        setAverageRating(finalAverageRating)
        setSnackbarMessage('Review added successfully')
        setOpenSnackbar(true)
        setRating(0)
        setContent('')
        setSeniorities([])
        setDateTime('')
        toggleDrawer(false)
      })
      .catch(() => {
        setSnackbarMessage('Error submitting review:')
        setOpenSnackbar(true)
      })
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }

  const formContent = (
    <>
      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        autoHideDuration={6000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      />
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
                value={seniorities}
                onChange={setSeniorities}
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
