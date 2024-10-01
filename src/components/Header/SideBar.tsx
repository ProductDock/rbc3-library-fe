import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  TextField,
  Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import LogoutIcon from '@mui/icons-material/Logout'

import styles from './Header.module.css'

interface SidebarProps {
  open: boolean
  toggleDrawer: (newOpen: boolean) => void
}
const SideBar = ({ open, toggleDrawer }: SidebarProps) => {
  const DrawerList = (
    <Box className={styles.outerBox} sx={{ width: '100%' }} role='presentation'>
      <div className={styles.closeBar}>
        <Button onClick={() => toggleDrawer(false)}>
          <CloseIcon className={styles.closeIcon}></CloseIcon>
        </Button>
      </div>

      <div className={styles.menuWrapper}>
        <div>
          <TextField
            id='standard-basic'
            variant='standard'
            className={styles.searchTextField}
            placeholder='Search'
            slotProps={{
              input: {
                disableUnderline: true,
                startAdornment: (
                  <IconButton className={styles.searchIconWrapper}>
                    <SearchIcon className={styles.searchIcon} />
                  </IconButton>
                ),
              },
            }}
          ></TextField>
          <Divider />
          <div className={styles.menuItemsWrapper}>
            <Typography className={styles.menuItemsText}>Library</Typography>
            <Typography className={styles.menuItemsText}>My books</Typography>
            <Typography className={styles.menuItemsText}>Help</Typography>
            <div className={styles.notificationWrapperResponsive}>
              <span className={styles.menuItemsText}>Notifications</span>
              <span>
                <div className={styles.notificationBadgeResponsive} />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.loginWrapper}>
          <Divider />
          <Typography className={styles.loggedUsername}>
            Milena Pavlovic
          </Typography>
          <Typography className={styles.loggedEmail}>
            milena.pavlovic@productdock.com
          </Typography>
          <Divider />
          <div className={styles.logoutWrapper}>
            <LogoutIcon className={styles.logoutIcon} />
            <Typography className={styles.logoutText}>Sign out</Typography>
          </div>
        </div>
      </div>
    </Box>
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
