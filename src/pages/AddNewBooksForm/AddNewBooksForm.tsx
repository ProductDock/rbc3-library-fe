import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'
import style from './AddNewBooksForm.module.css'
import { useState } from 'react'
import backArrow from '../../assets/backArrow.svg'
import { useNavigate } from 'react-router-dom'
import checkbox from '../../assets/checkbox.svg'
import checkedCheckbox from '../../assets/checkboxChecked.svg'
import indeterminateCheckbox from '../../assets/checkboxIndeterminate.svg'
import { SelectCover } from './SelectCover'

const AddNewBooksForm = () => {
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
  const categories = [
    'All categories',
    'Software development',
    'Marketing',
    'Product management',
    'Design',
    'Psychology',
  ]
  const [bookCategory, setBookCategory] = useState<string[]>([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [amount, setAmount] = useState(1)
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [authorError, setAuthorError] = useState(false)
  const [amountError, setAmountError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)

  const handleCategoryChange = (
    event: SelectChangeEvent<typeof bookCategory>
  ) => {
    const {
      target: { value },
    } = event

    const selectedCategories =
      typeof value === 'string' ? value.split(',') : value

    setBookCategory(prevBookCategory => {
      const isAllSelected = selectedCategories.includes('All categories')
      const isCurrentlyAllSelected =
        prevBookCategory.length === categories.length
      const selectedCount = selectedCategories.filter(
        category => category !== 'All categories'
      ).length

      if (isAllSelected) {
        if (prevBookCategory.length === 0) {
          return categories
        }
        if (isCurrentlyAllSelected || selectedCount <= 4) {
          return []
        }
      }

      if (prevBookCategory.includes('All categories')) {
        return []
      }

      const filteredCategories = selectedCategories.filter(
        category => category !== 'All categories'
      )

      if (filteredCategories.length === categories.length - 1) {
        return [...filteredCategories, 'All categories']
      }

      return filteredCategories
    })
  }

  const isIndeterminate =
    bookCategory.length > 0 && bookCategory.length < categories.length

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  const matches = useMediaQuery('(max-width: 780px)')

  const handleImageUpload = (url: string) => {
    setImageUrl(url)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    let hasErrors = false

    if (title == '') {
      setTitleError(true)
      hasErrors = true
    }

    if (author == '') {
      setAuthorError(true)
      hasErrors = true
    }

    if (description == '') {
      setDescriptionError(true)
      hasErrors = true
    }

    if (amount <= 0) {
      setAmountError(true)
      hasErrors = true
    }

    if (hasErrors) return

    const newBook = {
      title,
      author,
      categories: bookCategory,
      amount,
      description,
      imageUrl,
    }

    fetch('/add-book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    }).then(response => response.json())
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    if (e.target.value != '') {
      setTitleError(false)
    } else {
      setTitleError(true)
    }
  }

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value)
    if (e.target.value != '') {
      setAuthorError(false)
    } else {
      setAuthorError(true)
    }
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value))
    if (Number(e.target.value) > 0) {
      setAmountError(false)
    } else {
      setAmountError(true)
    }
  }

  const handleDescritionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
    if (e.target.value != '') {
      setDescriptionError(false)
    } else {
      setDescriptionError(true)
    }
  }

  return (
    <div className={style.outerWrapper}>
      <div className={style.formWrapper}>
        <Button className={style.backButton} onClick={goBack}>
          <img src={backArrow} alt='back_arrow' />
          <Typography variant='body1' className={style.backButtonText}>
            Back
          </Typography>
        </Button>
        <Divider className={style.dividerUnderBackButton} />
        <div className={style.wrapper}>
          <Typography variant={matches ? 'subtitle1' : 'h3'}>
            Add new books<span className={style.dot}>.</span>
          </Typography>
        </div>
        <FormControl
          sx={{ width: '100%' }}
          component='form'
          onSubmit={handleSubmit}
        >
          <div className={style.formFlex}>
            <div className={style.formColumnWrapper}>
              <div>
                <FormLabel
                  className={style.formLabelWrapper}
                  required
                  htmlFor='bookTitle'
                >
                  <Typography variant='h6' className={style.formLabelText}>
                    Title
                  </Typography>
                </FormLabel>
                <TextField
                  id='bookTitle'
                  className={style.bookTextField}
                  placeholder='Enter the book title'
                  value={title}
                  onChange={handleTitleChange}
                  error={titleError}
                  helperText={titleError ? 'Please enter book title.' : ''}
                  InputProps={{
                    sx: {
                      borderRadius: 0,
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'var(--mui-palette-neutral-300)',
                      },
                      '& .MuiOutlinedInput-input': {
                        height: '48px',
                        padding: '0px 16px 0px 16px',
                      },
                    },
                  }}
                ></TextField>
              </div>
              <div>
                <FormLabel
                  className={style.formLabelWrapper}
                  required
                  htmlFor='bookAuthor'
                >
                  <Typography variant='h6' className={style.formLabelText}>
                    Author
                  </Typography>
                </FormLabel>
                <TextField
                  id='bookAuthor'
                  className={style.bookTextField}
                  placeholder='Who is the author of the book?'
                  value={author}
                  onChange={handleAuthorChange}
                  error={authorError}
                  helperText={authorError ? 'Please enter book author.' : ''}
                  InputProps={{
                    sx: {
                      borderRadius: 0,
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'var(--mui-palette-neutral-300)',
                      },
                      '& .MuiOutlinedInput-input': {
                        height: '48px',
                        padding: '0px 16px 0px 16px',
                      },
                    },
                  }}
                ></TextField>
              </div>
              <div>
                <FormLabel
                  className={style.formLabelWrapper}
                  htmlFor='bookCategory'
                >
                  <Typography variant='h6' className={style.formLabelText}>
                    Categories
                  </Typography>
                </FormLabel>
                <Select
                  labelId='demo-multiple-checkbox-label'
                  id='bookCategory'
                  className={style.bookTextFieldSelect}
                  multiple
                  value={bookCategory}
                  onChange={handleCategoryChange}
                  input={
                    <OutlinedInput
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
                <FormLabel
                  className={style.formLabelWrapper}
                  htmlFor='bookAmount'
                >
                  <Typography variant='h6' className={style.formLabelText}>
                    Amount
                  </Typography>
                </FormLabel>
                <TextField
                  id='bookAmount'
                  className={style.bookTextField}
                  type='number'
                  value={amount}
                  onChange={handleAmountChange}
                  error={amountError}
                  helperText={
                    amountError ? 'Amount should be greater than 0.' : ''
                  }
                  InputProps={{
                    sx: {
                      borderRadius: 0,
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'var(--mui-palette-neutral-300)',
                      },
                      '& .MuiOutlinedInput-input': {
                        height: '48px',
                        padding: '0px 16px 0px 16px',
                      },
                    },
                  }}
                ></TextField>
              </div>
            </div>
            <div className={style.imageDrop}>
              <SelectCover imageUpload={handleImageUpload} />
            </div>
          </div>
          <div
            style={{ width: '100%' }}
            className={style.bookDescriptionWrapper}
          >
            <FormLabel
              className={style.formLabelWrapper}
              required
              htmlFor='bookDescription'
            >
              <Typography variant='h6' className={style.formLabelText}>
                Description
              </Typography>
            </FormLabel>
            <TextField
              id='bookDescription'
              className={style.bookDescriptionTextField}
              multiline
              value={description}
              onChange={handleDescritionChange}
              error={descriptionError}
              helperText={
                descriptionError ? 'Please enter book description.' : ''
              }
              rows={6}
              placeholder='Enter a description'
              InputProps={{
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
        </FormControl>
      </div>
    </div>
  )
}
export default AddNewBooksForm
