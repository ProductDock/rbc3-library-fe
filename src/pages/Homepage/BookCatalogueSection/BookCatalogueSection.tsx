import Typography from '@mui/material/Typography'
import styles from './BookCatalogueSection.module.css'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'

export const BookCatalogueSection = () => {
  const [status, setStatus] = useState('')

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
        {/* <div className={styles.categoriesWrapper}>
          <Button className={styles.category}>All</Button>
          <Button className={styles.category}>Software development</Button>
          <Button className={styles.category}>Marketing</Button>
          <Button className={styles.category}>Product management</Button>
          <Button className={styles.category}>Design</Button>
          <Button className={styles.category}>Psychology</Button>
        </div> */}
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
                color={undefined}
                sx={{
                  color: 'black',
                  // '& .MuiOutlinedInput-notchedOutline': {
                  //   borderColor: 'black',
                  // },
                  '& .MuiSvgIcon-root': {
                    color: 'black',
                  },
                }}
                className={styles.statusForm}
                disableUnderline={true}
                value={status}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value=''>
                  <em
                    className={`${styles.allStatusesMenuItem} ${styles.menuItem}`}
                  >
                    All statuses
                  </em>
                </MenuItem>
                <MenuItem className={styles.menuItem} value='Available'>
                  Available books
                </MenuItem>
                <MenuItem className={styles.menuItem} value='Reserved'>
                  Reserved books
                </MenuItem>
                <MenuItem className={styles.menuItem} value='Rented'>
                  Rented books
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  )
}
