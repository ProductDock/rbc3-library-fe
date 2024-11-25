import {
  Button,
  Checkbox,
  Divider,
  Drawer,
  FormControlLabel,
  Typography,
} from '@mui/material'
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp'
import CheckBoxSharpIcon from '@mui/icons-material/CheckBoxSharp'
import close from '../../../../assets/closeBlack.svg'

import styles from './FiltersSideBar.module.css'
import { useState } from 'react'

interface SidebarProps {
  open: boolean
  toggleDrawer: (newOpen: boolean) => void
  categories: string[]
  selectedCategories: string[]
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>

  statuses: string[]
  selectedStatuses: string[]
  setSelectedStatuses: React.Dispatch<React.SetStateAction<string[]>>
  onFilterChange: (categories: string[], statuses: string[]) => void
  numberOfFilteredBooks: number
}
const SideBar = ({
  open,
  toggleDrawer,
  categories,
  selectedCategories,
  statuses,
  selectedStatuses,
  onFilterChange,
  numberOfFilteredBooks,
}: SidebarProps) => {
  const [temporarySelectedCategories, setTemporarySelectedCategories] =
    useState(selectedCategories)
  const [temporarySelectedStatuses, setTemporarySelectedStatuses] =
    useState(selectedStatuses)

  const handleCategoryToggle = (category: string) => {
    if (category === 'All') {
      setTemporarySelectedCategories(['All'])
    } else {
      setTemporarySelectedCategories(prevSelected => {
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

  const handleStatusToggle = (status: string) => {
    setTemporarySelectedStatuses(prevSelected =>
      prevSelected.includes(status)
        ? prevSelected.filter(st => st !== status)
        : [...prevSelected, status]
    )
  }

  const handleApply = () => {
    onFilterChange(temporarySelectedCategories, temporarySelectedStatuses)
    toggleDrawer(false)
  }

  const handleClose = () => {
    setTemporarySelectedCategories([])
    setTemporarySelectedStatuses([])
    toggleDrawer(false)
  }

  const DrawerList = (
    <>
      <div className={styles.closeBar}>
        <Button onClick={() => toggleDrawer(false)}>
          <img src={close} alt='close' className={styles.closeIcon} />
        </Button>
      </div>
      <div className={styles.filtersWrapper}>
        <Typography variant='h4' className={styles.filtersText}>
          Filters
        </Typography>
        <div className={styles.categoriesWrapper}>
          <Typography variant='h6' className={styles.categoriesText}>
            Categories
          </Typography>
          <div className={styles.categories}>
            {categories.map(category => (
              <FormControlLabel
                className={styles.category}
                key={category}
                control={
                  <Checkbox
                    checked={temporarySelectedCategories.includes(category)}
                    onChange={() => handleCategoryToggle(category)}
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
                }
                label={<Typography variant='h6'>{category}</Typography>}
              />
            ))}
          </div>
        </div>
        <Divider />

        <div className={styles.statusWrapper}>
          <Typography variant='h6' className={styles.statusesText}>
            Statuses
          </Typography>
          <div className={styles.statuses}>
            {statuses.map(status => (
              <FormControlLabel
                key={status}
                control={
                  <Checkbox
                    checked={temporarySelectedStatuses.includes(status)}
                    onChange={() => handleStatusToggle(status)}
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
                }
                label={<Typography variant='h6'>{status}</Typography>}
              />
            ))}
          </div>
        </div>
        <Button className={styles.showButton} onClick={handleApply}>
          <Typography variant='h6' className={styles.showButtonText}>
            Show {numberOfFilteredBooks} results
          </Typography>
        </Button>
        <Button onClick={handleClose} className={styles.cancelButton}>
          <Typography variant='h6' className={styles.cancelButtonText}>
            Cancel
          </Typography>
        </Button>
      </div>
    </>
  )
  return (
    <Drawer
      className={styles.sideBarDrawer}
      sx={{ '& .MuiDrawer-paper': { width: '100%' } }}
      open={open}
      onClose={() => toggleDrawer(false)}
    >
      {DrawerList}
    </Drawer>
  )
}
export default SideBar
