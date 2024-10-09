import {
  Avatar,
  Button,
  Divider,
  IconButton,
  MenuItem,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import avatar from '../../assets/avatar.svg'

import styles from './Header.module.css'
import { useState } from 'react'
import menuIcon from '../../assets/menu.svg'
import { SideBar } from './SideBar'

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& input::placeholder': {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
    lineHeight: theme.typography.h6.lineHeight,
    letterSpacing: theme.typography.h6.letterSpacing,
    opacity: 1,
  },
}))

export const MenuItems = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <>
      <Stack
        className={styles.menuItems}
        direction='row'
        spacing='48px'
        marginLeft='auto'
        alignItems='center'
      >
        <MenuItem divider className={styles.menuItemsText}>
          <Typography variant='h6'>Library</Typography>
        </MenuItem>
        <MenuItem className={styles.menuItemsText}>
          <Typography variant='h6'>My books</Typography>
        </MenuItem>
        <MenuItem className={styles.menuItemsText}>
          <Typography variant='h6'>Help</Typography>
        </MenuItem>
        <div className={styles.notificationWrapper}>
          <IconButton className={styles.logoIcon}>
            <Avatar src={avatar} />
          </IconButton>
          <div className={styles.notificationBadge} />
        </div>

        <Divider className={styles.divider} orientation='vertical' flexItem />
      </Stack>

      <StyledTextField
        id='standard-basic'
        variant='standard'
        className={styles.searchTextField}
        placeholder='Search'
        slotProps={{
          input: {
            disableUnderline: true,
            startAdornment: (
              <IconButton>
                <SearchIcon className={styles.searchIcon} />
              </IconButton>
            ),
          },
        }}
      ></StyledTextField>

      <Button className={styles.menuWrapperButton} onClick={toggleDrawer(true)}>
        <img src={menuIcon} alt='menu-icon' />
      </Button>
      <SideBar open={open} toggleDrawer={toggleDrawer(false)} />
    </>
  )
}
