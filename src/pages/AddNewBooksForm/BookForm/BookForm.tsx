import {
  FormControl,
  Typography,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
  TextField,
  Divider,
  Button,
} from '@mui/material'
import { useState } from 'react'
import {
  categories,
  categoryToSnakeCase,
  handleCategoryChange,
} from '../../../components/Shared/util/bookCategoryUtil'
import checkbox from '../../../assets/checkbox.svg'
import checkedCheckbox from '../../../assets/checkboxChecked.svg'
import indeterminateCheckbox from '../../../assets/checkboxIndeterminate.svg'
import add from '../../../assets/add.svg'
import { SelectCover } from '../SelectCover'
import { Book } from '../AddNewBooksForm'
import style from '../AddNewBooksForm.module.css'
import { CustomFormLabel, CustomTextField } from '../CustomComponents'
import apiService from '../../../shared/api/apiService'

export type Author = {
  fullName: string
}

type BookFormProps = {
  bookTitle?: string
  bookAuthor?: Author[]
  bookCategories?: string[]
  bookAmount?: number
  bookDescription?: string
  bookImageUrl?: string
  addedBooks?: Book[]
  inAccordion?: boolean
  isAccordionExpanded?: boolean
  setAddedBooks?: (addedBooks: Book[]) => void
}
const BookForm: React.FC<BookFormProps> = ({
  bookTitle = '',
  bookAuthor,
  bookCategories,
  bookAmount,
  bookDescription,
  bookImageUrl,
  addedBooks,
  inAccordion = false,
  isAccordionExpanded = false,
  setAddedBooks,
}) => {
  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 200,
      },
    },
  }
  const [bookCategory, setBookCategory] = useState<string[]>([])
  const [title, setTitle] = useState(bookTitle)
  const [authors, setAuthors] = useState<Author[]>(bookAuthor || [])
  const [numberOfAvailableCopies, setNumberOfAvailableCopies] = useState(
    bookAmount || 1
  )
  const [description, setDescription] = useState(bookDescription || '')
  const [imageUrl, setImageUrl] = useState(bookImageUrl || '')
  const [titleError, setTitleError] = useState(false)
  const [authorError, setAuthorError] = useState(false)
  const [amountError, setAmountError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)
  const [resetTrigger, setResetTrigger] = useState(0)

  const isIndeterminate =
    bookCategory.length > 0 && bookCategory.length < categories.length

  const handleImageUpload = (url: string) => {
    setImageUrl(url)
  }

  const validateInputs = () => {
    let hasErrors = false

    if (title === '') {
      setTitleError(true)
      hasErrors = true
    }

    if (authors.length === 0) {
      setAuthorError(true)
      hasErrors = true
    }

    if (description === '') {
      setDescriptionError(true)
      hasErrors = true
    }

    if (numberOfAvailableCopies <= 0) {
      setAmountError(true)
      hasErrors = true
    }

    return hasErrors
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const hasErrors = validateInputs()
    if (hasErrors) return

    const bookCategorySnakeCase = categoryToSnakeCase(bookCategory)

    const newBook: Book = {
      title,
      authors,
      bookCategories: bookCategorySnakeCase,
      numberOfAvailableCopies,
      description,
      imageUrl,
    }

    resetState()

    const booksToAdd = addedBooks ? [...addedBooks, newBook] : [newBook]

    apiService
      .addBooks(booksToAdd)
      .then(results => {
        console.log('Books added successfully:', results)
      })
      .catch(error => {
        console.error('Error adding books:', error)
      })
  }

  const resetState = () => {
    setBookCategory([])
    setTitle('')
    setAuthors([])
    setNumberOfAvailableCopies(1)
    setDescription('')
    setImageUrl('')
    setResetTrigger(prev => prev + 1)
  }

  const handleAddBook = () => {
    const hasErrors = validateInputs()
    if (hasErrors) return

    const bookCategorySnakeCase = categoryToSnakeCase(bookCategory)

    const newBook: Book = {
      title,
      authors,
      bookCategories: bookCategorySnakeCase,
      numberOfAvailableCopies,
      description,
      imageUrl,
    }

    if (setAddedBooks && addedBooks) {
      setAddedBooks([...addedBooks, newBook])
    }

    resetState()

    console.log(addedBooks)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setField: (value: string) => void,
    setFieldError: (error: boolean) => void
  ) => {
    setField(e.target.value)
    if (e.target.value !== '') {
      setFieldError(false)
    } else {
      setFieldError(true)
    }
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfAvailableCopies(Number(e.target.value))
    if (Number(e.target.value) > 0) {
      setAmountError(false)
    } else {
      setAmountError(true)
    }
  }

  return (
    <FormControl
      sx={{ width: '100%' }}
      component='form'
      onSubmit={handleSubmit}
    >
      {!isAccordionExpanded && (
        <div>
          <div className={style.formFlex}>
            <div className={style.formColumnWrapper}>
              <div>
                <CustomFormLabel required htmlFor='bookTitle'>
                  Title
                </CustomFormLabel>
                <CustomTextField
                  id='bookTitle'
                  className={style.bookTextField}
                  placeholder='Enter the book title'
                  value={title}
                  onChange={e => handleChange(e, setTitle, setTitleError)}
                  error={titleError}
                  helperText={titleError ? 'Please enter book title.' : ''}
                  readOnly={inAccordion}
                />
              </div>
              <div>
                <CustomFormLabel required htmlFor='bookAuthor'>
                  Author
                </CustomFormLabel>
                <CustomTextField
                  id='bookAuthor'
                  className={style.bookTextField}
                  placeholder='Who is the author of the book?'
                  value={authors.map(author => author.fullName).join('')}
                  onChange={e => {
                    const newAuthor = { fullName: e.target.value }
                    setAuthors([newAuthor])
                    if (e.target.value === '') {
                      setAuthorError(true)
                    } else {
                      setAuthorError(false)
                    }
                  }}
                  error={authorError}
                  helperText={authorError ? 'Please enter book author.' : ''}
                  readOnly={inAccordion}
                />
              </div>
              <div>
                <CustomFormLabel htmlFor='bookCategory'>
                  Categories
                </CustomFormLabel>
                <Select
                  labelId='demo-multiple-checkbox-label'
                  id='bookCategory'
                  className={style.bookTextFieldSelect}
                  multiple
                  value={bookCategories ? bookCategories : bookCategory}
                  onChange={e => handleCategoryChange(e, setBookCategory)}
                  input={
                    <OutlinedInput
                      readOnly={inAccordion}
                      sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'var(--mui-palette-neutral-300)',
                        },
                        '& .MuiSvgIcon-root': {
                          color: 'var(--mui-palette-neutral-600)',
                        },
                      }}
                    />
                  }
                  renderValue={selected =>
                    selected.length === 0 ? (
                      <Typography
                        variant='body1'
                        sx={{ color: 'var(--mui-palette-neutral-300)' }}
                      >
                        Select the book categories{' '}
                      </Typography>
                    ) : (
                      selected.join(', ')
                    )
                  }
                  MenuProps={MenuProps}
                  displayEmpty
                >
                  {categories.map(category => (
                    <MenuItem key={category} value={category}>
                      <Checkbox
                        checked={bookCategory.includes(category)}
                        size='small'
                        icon={<img src={checkbox} alt='checkbox' />}
                        checkedIcon={
                          <img src={checkedCheckbox} alt='checkedCheckbox' />
                        }
                        indeterminate={
                          category === 'All categories' && isIndeterminate
                        }
                        indeterminateIcon={
                          <img
                            src={indeterminateCheckbox}
                            alt='indeterminateCheckbox'
                          />
                        }
                      />
                      <ListItemText
                        primary={
                          <Typography variant='h6'>{category}</Typography>
                        }
                      />
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div>
                <CustomFormLabel htmlFor='bookAmount'>Amount</CustomFormLabel>
                <CustomTextField
                  id='bookAmount'
                  className={style.bookTextField}
                  type='number'
                  value={numberOfAvailableCopies}
                  onChange={handleAmountChange}
                  error={amountError}
                  helperText={
                    amountError ? 'Amount should be greater than 0.' : ''
                  }
                />
              </div>
            </div>
            <div className={style.imageDrop}>
              <SelectCover
                bookImageUrl={bookImageUrl}
                imageUpload={handleImageUpload}
                resetTrigger={resetTrigger}
              />
            </div>
          </div>
          <div
            style={{ width: '100%' }}
            className={style.bookDescriptionWrapper}
          >
            <CustomFormLabel required htmlFor='bookDescription'>
              Description
            </CustomFormLabel>
            <TextField
              id='bookDescription'
              className={style.bookDescriptionTextField}
              multiline
              value={bookDescription ? bookDescription : description}
              onChange={e =>
                handleChange(e, setDescription, setDescriptionError)
              }
              error={descriptionError}
              helperText={
                descriptionError ? 'Please enter book description.' : ''
              }
              rows={6}
              placeholder='Enter a description'
              InputProps={{
                readOnly: inAccordion,
                sx: {
                  borderRadius: 0,
                  width: '100%',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'var(--mui-palette-neutral-300)',
                  },
                  '& .MuiOutlinedInput-input': {
                    paddingLeft: '2px',
                    paddingBottom: '7px',
                  },
                },
              }}
            />
          </div>
        </div>
      )}

      {!inAccordion && (
        <div>
          <div className={style.addAnotherBookButton}>
            <Divider />
            <Button
              type='button'
              className={style.butonAnotherBook}
              onClick={handleAddBook}
            >
              <Typography
                variant='h6'
                className={style.addAnotherBookButtonText}
              >
                <div className={style.addAnotherBookPlus}>
                  <img src={add} alt='addNewBook' />
                </div>
                Add another book
              </Typography>
            </Button>
            <Divider />
          </div>

          <div className={style.buttonWrapper}>
            <Button type='reset' className={style.cancelButton}>
              <Typography variant='h6' className={style.buttonText}>
                Cancel
              </Typography>
            </Button>
            <Button type='submit' className={style.submitButton}>
              <Typography variant='h6' className={style.buttonText}>
                Submit
              </Typography>
            </Button>
          </div>
        </div>
      )}
    </FormControl>
  )
}
export default BookForm
