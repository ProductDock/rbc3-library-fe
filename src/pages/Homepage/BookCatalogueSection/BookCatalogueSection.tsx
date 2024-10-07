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

export const BookCatalogueSection = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'All',
  ])

  const categories = [
    'All',
    'Software development',
    'Marketing',
    'Product management',
    'Design',
    'Psychology',
  ]

  const [bookStatus, setBookStatus] = useState<string[]>([])

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

  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <div className={styles.catalogueWrapper}>
      <div className={styles.titleButtonWrapper}>
        <Typography className={styles.catalogueText}>
          Book catalogue (72)
        </Typography>
        <Button className={styles.suggestButton}>Suggest a book</Button>
      </div>
      <Button className={styles.applyFilersButton} onClick={toggleDrawer(true)}>
        Apply filters
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
              {category}
            </Button>
          ))}
        </div>
        <div className={styles.sortByWrapper}>
          <Typography className={styles.sortBy}>Filter by:</Typography>
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
                    <ListItemText primary={status} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  )
}
