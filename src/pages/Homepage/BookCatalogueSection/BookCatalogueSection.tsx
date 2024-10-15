import Typography from '@mui/material/Typography'
import styles from './BookCatalogueSection.module.css'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import OutlinedInput from '@mui/material/OutlinedInput'
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp'
import CheckBoxSharpIcon from '@mui/icons-material/CheckBoxSharp'
import { FiltersSideBar } from './FiltersSideBar'
import { BookCard } from '../../../components/BookCard'
import { useMediaQuery } from '@mui/material'

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

const statuses = ['Available books', 'Reserved books', 'Rented books']
const categories = [
  'All',
  'Software development',
  'Marketing',
  'Product management',
  'Design',
  'Psychology',
]

export const BookCatalogueSection = () => {
  const [bookStatus, setBookStatus] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'All',
  ])
  const [open, setOpen] = useState(false)

  const handleChange = (event: SelectChangeEvent<typeof bookStatus>) => {
    const {
      target: { value },
    } = event
    setBookStatus(typeof value === 'string' ? value.split(',') : value)
  }
  const handleCategoryClick = (category: string) => {
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
    setOpen(newOpen)
  }

  const matches = useMediaQuery('(min-width:1100px)')

  return (
    <div className={styles.catalogueWrapper}>
      <div className={styles.titleButtonWrapper}>
        <Typography
          className={styles.catalogueText}
          variant={matches ? 'subtitle2' : 'h4'}
        >
          Book catalogue (72)
        </Typography>
        <Button className={styles.suggestButton}>
          <Typography variant='body1' className={styles.suggestButtonText}>
            Suggest a book
          </Typography>
        </Button>
      </div>
      <Button className={styles.applyFilersButton} onClick={toggleDrawer(true)}>
        <Typography variant='body1' className={styles.applyFiltersButtonText}>
          Apply filters
        </Typography>
      </Button>
      <FiltersSideBar
        open={open}
        toggleDrawer={toggleDrawer(false)}
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        statuses={statuses}
        selectedStatuses={bookStatus}
        setSelectedStatuses={setBookStatus}
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
      <div className={styles.books}>
        <BookCard inFavorites={true} />
        <BookCard inFavorites={false} />
        <BookCard inFavorites={true} />
        <BookCard inFavorites={false} />
      </div>
    </div>
  )
}
