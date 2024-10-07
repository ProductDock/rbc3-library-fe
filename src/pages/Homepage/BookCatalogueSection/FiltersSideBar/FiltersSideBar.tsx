import {
  Button,
  Checkbox,
  Divider,
  Drawer,
  FormControlLabel,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp'
import CheckBoxSharpIcon from '@mui/icons-material/CheckBoxSharp'

import styles from './FiltersSideBar.module.css'

interface SidebarProps {
  open: boolean
  toggleDrawer: (newOpen: boolean) => void
  categories: string[]
  selectedCategories: string[]
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>

  statuses: string[]
  selectedStatuses: string[]
  setSelectedStatuses: React.Dispatch<React.SetStateAction<string[]>>
}
const SideBar = ({
  open,
  toggleDrawer,
  categories,
  selectedCategories,
  setSelectedCategories,
  statuses,
  selectedStatuses,
  setSelectedStatuses,
}: SidebarProps) => {
  const handleCategoryToggle = (category: string) => {
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

  const handleStatusToggle = (status: string) => {
    setSelectedStatuses(prevSelected =>
      prevSelected.includes(status)
        ? prevSelected.filter(st => st !== status)
        : [...prevSelected, status]
    )
  }

  const DrawerList = (
    <>
      <div className={styles.closeBar}>
        <Button onClick={() => toggleDrawer(false)}>
          <CloseIcon className={styles.closeIcon}></CloseIcon>
        </Button>
      </div>
      <div className={styles.filtersWrapper}>
        <Typography className={styles.filtersText}>Filters</Typography>
        <div className={styles.categoriesWrapper}>
          <Typography className={styles.categoriesText}>Categories</Typography>
          <div className={styles.categories}>
            {categories.map(category => (
              <FormControlLabel
                className={styles.category}
                key={category}
                control={
                  <Checkbox
                    checked={selectedCategories.includes(category)}
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
                label={category}
              />
            ))}
          </div>
        </div>
        <Divider />

        <div className={styles.statusWrapper}>
          <Typography className={styles.statusesText}>Statuses</Typography>
          <div className={styles.statuses}>
            {statuses.map(status => (
              <FormControlLabel
                key={status}
                control={
                  <Checkbox
                    checked={selectedStatuses.includes(status)}
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
                label={status}
              />
            ))}
          </div>
        </div>
        <Button className={styles.showButton}>Show 46 results</Button>
        <Button
          onClick={() => toggleDrawer(false)}
          className={styles.cancelButton}
        >
          Cancel
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
