import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import avatar from '../../assets/avatar.svg'
import notifications from '../../assets/notifications.svg'
import logout from '../../assets/logout.svg'

import styles from './Header.module.css'
import { useState } from 'react'
import menuIcon from '../../assets/menu.svg'
import { SideBar } from './SideBar'
import { useUserContext } from '../../context/UserContext'
import { googleLogout } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& input::placeholder': {
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.lineHeight,
    letterSpacing: theme.typography.h6.letterSpacing,
    opacity: 1,
  },
}))

export const MenuItems = () => {
  const [open, setOpen] = useState(false)
  const { profile, setProfile, setUser } = useUserContext()
  const navigate = useNavigate()

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const navigateToLoginPage = () => {
    navigate('/login')
  }

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const openMenu = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const logOut = () => {
    googleLogout()
    setUser(undefined)
    setProfile(undefined)
    navigateToLoginPage()
  }

  console.log(profile)
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
          {profile ? (
            <>
              <IconButton className={styles.logoIcon} onClick={handleClick}>
                <Avatar src={profile.picture} />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <div className={styles.dropDownMenu}>
                  <MenuItem onClick={handleClose}>
                    <Typography variant='h6' className={styles.userName}>
                      {profile.name}
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Typography variant='body2' className={styles.userEmail}>
                      {profile.email}
                    </Typography>
                  </MenuItem>
                  <div className={styles.dropDownNotificationMenu}>
                    <div className={styles.notificationsIcon}>
                      <MenuItem onClick={handleClose}>
                        <div className={styles.notificationMenuBadge} />
                        <img src={notifications} />
                        <Typography
                          variant='body1'
                          className={styles.menuNotification}
                        >
                          Notifications
                        </Typography>
                      </MenuItem>
                    </div>
                    <Divider />
                    <div className={styles.signOutIcon}>
                      <MenuItem onClick={logOut}>
                        <img src={logout} />
                        <Typography
                          variant='body1'
                          className={styles.menuNotification}
                        >
                          Sign out
                        </Typography>
                      </MenuItem>
                    </div>
                  </div>
                </div>
              </Menu>
            </>
          ) : (
            <IconButton className={styles.logoIcon} onClick={handleClick}>
              <Avatar src={avatar} />
            </IconButton>
          )}
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
