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

export const BookCatalogueSection = () => {
  const [status, setStatus] = useState('All statuses')

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value)
  }

  const [activeButton, setActiveButton] = useState(0)

  const categories = [
    'All',
    'Software development',
    'Marketing',
    'Product management',
    'Design',
    'Psychology',
  ]

  const statusOptions = [
    'All statuses',
    'Available books',
    'Reserved books',
    'Rented books',
  ]

  const handleButtonClick = (index: number) => {
    setActiveButton(index)
  }
  return (
    <div className={styles.catalogueWrapper}>
      <div className={styles.titleButtonWrapper}>
        <Typography className={styles.catalogueText}>
          Book catalogue (72)
        </Typography>
        <Button className={styles.suggestButton}>Suggest a book</Button>
      </div>
      <Divider />
      <div className={styles.categoryStatusWrapper}>
        <div className={styles.categoriesWrapper}>
          {categories.map((label, index) => (
            <Button
              key={index}
              className={`${styles.category} ${
                activeButton === index ? styles.clicked : ''
              }`}
              onClick={() => handleButtonClick(index)}
            >
              {label}
            </Button>
          ))}
        </div>
        <div className={styles.sortByWrapper}>
          <Typography className={styles.sortBy}>Sort by:</Typography>
          <div>
            <FormControl
              variant='standard'
              sx={{ color: 'rgba(0, 0, 0)', fill: 'rgba(0, 0, 0)' }}
            >
              <Select
                // color={}
                sx={{
                  color: 'black',
                  '& .MuiSvgIcon-root': {
                    color: 'black',
                  },
                }}
                renderValue={selected => selected || 'All statuses'}
                className={styles.statusForm}
                disableUnderline={true}
                value={status}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                {statusOptions.map(option => (
                  <MenuItem
                    key={option}
                    value={option}
                    className={styles.menuItem}
                    sx={{
                      '$ .css-spobta-MuiButtonBase-root-MuiMenuItem-root .Mui-selected':
                        { backgroundColor: 'white' },
                    }}
                  >
                    <input
                      type='checkbox'
                      checked={status === option}
                      onChange={() => setStatus(option)}
                      className={styles.customCheckbox}
                    />
                    <ListItemText primary={option} />
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
