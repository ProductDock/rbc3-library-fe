import { useNavigate } from 'react-router-dom'
import { useCallback, useEffect, useRef, useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import OutlinedInput from '@mui/material/OutlinedInput'
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp'
import CheckBoxSharpIcon from '@mui/icons-material/CheckBoxSharp'
import { FiltersSideBar } from './FiltersSideBar'
import { BookCard } from '../../../components/BookCard'
import { useMediaQuery } from '@mui/material'
import { BookCatalogueCardOfficeManager } from '../../../components/BookCardOfficeManager'
import { BooksList, BooksObject } from '../../../shared/types'
import ApiService from '../../../shared/api/apiService'
import Snackbar from '@mui/material/Snackbar'

import styles from './BookCatalogueSection.module.css'
import classNames from 'classnames'

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

type BookCatalogueProps = {
  isAdmin: boolean
}

const statuses = ['Available books', 'Reserved books', 'Rented books']
const categories = [
  'All',
  'Software development',
  'Marketing',
  'Product management',
  'Design',
  'Psychology',
]

export const BookCatalogueSection: React.FC<BookCatalogueProps> = ({
  isAdmin,
}) => {
  const [bookStatus, setBookStatus] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'All',
  ])
  const [open, setOpen] = useState(false)
  const [booksData, setBooksData] = useState<Array<BooksList>>([])
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [pageSize] = useState<number>(12)
  const isFirstLoad = useRef(true)
  const [isLastPage, setIsLastPage] = useState(false)
  const [totalNumberOfBooks, setTotalNumberOfBooks] = useState(0)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  useEffect(() => {
    setBooksData([])
    setCurrentPage(0)
  }, [])

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false
      return
    }

    const categoriesWithoutAll = selectedCategories
      .filter(el => el !== 'All')
      .map(el => {
        if (el.split(' ').length !== 0) {
          return el.split(' ').join('_')
        }
        return el
      })

    const statuses = bookStatus.map(el => el.split(' ')[0].toString())

    ApiService.fetchBooksData({
      currentPage,
      pageSize,
      categoriesWithoutAll,
      statuses,
    })
      .then(async (booksObject: BooksObject) => {
        const slicedBookList =
          (booksObject.content && booksObject.content?.slice(0, pageSize)) || []

        const booksWithRatings = await Promise.all(
          slicedBookList.map(async book => {
            try {
              const reviewsData = await ApiService.fetchBookReviews(book.id)
              const totalRating = reviewsData.content.reduce(
                (acc: number, review: { rating: number }) =>
                  acc + review.rating,
                0
              )
              const averageRating =
                totalRating / reviewsData.content.length || 0
              console.log(`Book ID: ${book.id}, Rating: ${averageRating}`)
              book.averageRating = averageRating
              return book
            } catch (error) {
              console.error('Error fetching reviews for book', book.id, error)
              return book
            }
          })
        )

        if (currentPage === 0) {
          setBooksData(booksWithRatings)
        } else {
          setBooksData(prevBooks => [...prevBooks, ...booksWithRatings])
        }

        setTotalNumberOfBooks(booksObject.totalElements)
        setIsLastPage(booksObject.last)
      })
      .catch(() => {
        setSnackbarMessage('Error fetching books')
        setOpenSnackbar(true)
      })
  }, [currentPage, pageSize, selectedCategories, bookStatus])

  const handleChange = (event: SelectChangeEvent<typeof bookStatus>) => {
    const {
      target: { value },
    } = event

    setCurrentPage(0)
    setBookStatus(typeof value === 'string' ? value.split(',') : value)
  }
  const handleCategoryClick = (category: string) => {
    setCurrentPage(0)
    if (category === 'All') {
      setSelectedCategories(['All'])
    } else {
      setSelectedCategories(prevSelected => {
        if (prevSelected.includes('All')) {
          return [...prevSelected.filter(cat => cat !== 'All'), category]
        } else {
          return prevSelected.includes(category)
            ? prevSelected.filter(cat => cat !== category)
            : [...prevSelected, category]
        }
      })
    }
  }
  const toggleDrawer = (newOpen: boolean) => () => {
    setCurrentPage(0)
    setOpen(newOpen)
  }
  const handleShowMore = useCallback(() => {
    setCurrentPage(prevPage => prevPage + 1)
  }, [])

  const matches = useMediaQuery('(min-width:1100px)')

  const navigate = useNavigate()
  const navigateToAddBooksPage = () => {
    navigate('/add-books')
  }

  const navigateToBookDetailsPage = (bookId: string) => {
    ApiService.getBookById(bookId)
      .then(bookData => {
        navigate(`/book/${bookId}`, {
          state: { bookData, isUserAdmin: isAdmin },
        })
      })
      .catch(error => {
        console.error('Error fetching book details:', error)
      })
  }
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }

  const handleFilterChange = (categories: string[], statuses: string[]) => {
    setSelectedCategories(categories)
    setBookStatus(statuses)
  }

  return (
    <div className={styles.catalogueWrapper}>
      <div className={styles.buttons}>
        <div className={styles.titleButtonWrapper}>
          <Typography
            className={styles.catalogueText}
            variant={matches ? 'subtitle2' : 'h4'}
          >
            Book catalogue ({totalNumberOfBooks})
          </Typography>
          <div>
            <Button className={styles.suggestButton}>
              <Typography variant='body1' className={styles.suggestButtonText}>
                Suggest a book
              </Typography>
            </Button>

            {isAdmin && (
              <Button
                className={styles.newBookButton}
                onClick={navigateToAddBooksPage}
              >
                <Typography
                  variant='body1'
                  className={styles.newBookButtonText}
                >
                  Add a new book
                </Typography>
              </Button>
            )}
          </div>
        </div>
        <Divider className={styles.buttonDivider} />
        <Button
          className={styles.applyFilersButton}
          onClick={toggleDrawer(true)}
        >
          <Typography variant='body1' className={styles.applyFiltersButtonText}>
            Apply filters
          </Typography>
        </Button>
      </div>

      <FiltersSideBar
        open={open}
        toggleDrawer={toggleDrawer(false)}
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        statuses={statuses}
        selectedStatuses={bookStatus}
        setSelectedStatuses={setBookStatus}
        onFilterChange={handleFilterChange}
      />

      <Divider className={styles.dividerCatalogue} />
      <div className={styles.categoryStatusWrapper}>
        <div className={styles.categoriesWrapper}>
          {categories.map(category => (
            <Button
              key={category}
              className={`${styles.category} ${
                selectedCategories.includes(category) ? styles.clicked : ''
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <Typography variant='h6'>{category}</Typography>
            </Button>
          ))}
        </div>
        <div className={styles.sortByWrapper}>
          <Typography variant='h6' className={styles.sortBy}>
            Filter by:
          </Typography>
          <div>
            <FormControl
              sx={{
                width: 200,
              }}
            >
              <Select
                labelId='demo-multiple-checkbox-label'
                id='demo-multiple-checkbox'
                className={styles.statusForm}
                multiple
                value={bookStatus}
                onChange={handleChange}
                input={
                  <OutlinedInput
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                      },
                      '& .MuiSvgIcon-root': {
                        color: 'black',
                      },
                    }}
                  />
                }
                renderValue={selected => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {statuses.map(status => (
                  <MenuItem key={status} value={status}>
                    <Checkbox
                      checked={bookStatus.includes(status)}
                      size='small'
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className={styles.checkboxColor}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon className={styles.checkboxColor} />
                      }
                    />
                    <ListItemText
                      primary={<Typography variant='h6'>{status}</Typography>}
                    />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      {isAdmin && (
        <div
          className={matches ? styles.booksAdmin : styles.smallScreenAdminBooks}
        >
          <Divider className={styles.dividerView} />
          {booksData &&
            booksData.map((book, index) => (
              <>
                <BookCatalogueCardOfficeManager
                  key={index}
                  title={book.title}
                  author={book.authors.map(author => author.fullName)}
                  image={`http://localhost:8080/books/${book.id}/image`}
                  status={book.bookStatus}
                  rating={book.averageRating.toFixed(1)}
                  onClick={() => navigateToBookDetailsPage(book.id)}
                />
                <Divider className={styles.dividerView} />
              </>
            ))}
        </div>
      )}
      {!isAdmin && (
        <div className={styles.books}>
          {booksData &&
            booksData.map(book => (
              <BookCard
                key={book.id}
                inFavorites={true}
                title={book.title}
                author={book.authors.map(author => author.fullName)}
                onClick={() => navigateToBookDetailsPage(book.id)}
                status={book.bookStatus}
                rating={book.averageRating.toFixed(1)}
                image={`http://localhost:8080/books/${book.id}/image`}
              />
            ))}
        </div>
      )}
      <div className={styles.showMoreWrapper}>
        <Typography variant='h6' className={styles.showMoreText}>
          Showing {booksData.length} of {totalNumberOfBooks} results.{' '}
        </Typography>
        <Button
          className={classNames(styles.showMoreButton, {
            [styles.disabledButton]: isLastPage,
          })}
          onClick={handleShowMore}
          disabled={isLastPage}
        >
          <Typography
            variant='h6'
            className={classNames(styles.showMoreText, styles.textUnderline, {
              [styles.disabledButton]: isLastPage,
            })}
          >
            Show more
          </Typography>
        </Button>
      </div>
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
    </div>
  )
}
