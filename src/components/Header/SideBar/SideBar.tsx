import {
  Button,
  Divider,
  Drawer,
  IconButton,
  styled,
  TextField,
  Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import close from '../../../assets/closeWhite.svg'
import LogoutIcon from '@mui/icons-material/Logout'

import styles from './SideBar.module.css'
import { useUserContext } from '../../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { googleLogout } from '@react-oauth/google'

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& input::placeholder': {
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.lineHeight,
    letterSpacing: theme.typography.h6.letterSpacing,
    opacity: 1,
  },
}))
interface SidebarProps {
  open: boolean
  toggleDrawer: (newOpen: boolean) => void
}

const SideBar = ({ open, toggleDrawer }: SidebarProps) => {
  const { profile, setProfile, setUser } = useUserContext()
  const navigate = useNavigate()

  const navigateToLoginPage = () => {
    navigate('/login')
  }

  const logOut = () => {
    googleLogout()
    setUser(undefined)
    setProfile(undefined)
    navigateToLoginPage()
  }

  const DrawerList = (
    <>
      <div className={styles.closeBar}>
        <Button onClick={() => toggleDrawer(false)}>
          <img src={close} alt='close' className={styles.closeIcon} />
        </Button>
      </div>

      <div className={styles.menuWrapper}>
        <div>
          <StyledTextField
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
          ></StyledTextField>
          <Divider />
          <div className={styles.menuItemsWrapper}>
            <Typography variant='h4' className={styles.menuItemsText}>
              Library
            </Typography>
            <Typography variant='h4' className={styles.menuItemsText}>
              My books
            </Typography>
            <Typography variant='h4' className={styles.menuItemsText}>
              Help
            </Typography>
            <div className={styles.notificationWrapperResponsive}>
              <Typography variant='h4' className={styles.menuItemsText}>
                Notifications
              </Typography>
              <span>
                <div className={styles.notificationBadgeResponsive} />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.loginWrapper}>
          <Divider />
          <Typography variant='h5' className={styles.loggedUsername}>
            {profile?.name}
          </Typography>
          <Typography variant='body1' className={styles.loggedEmail}>
            {profile?.email}
          </Typography>
          <Divider />
          <div className={styles.logoutWrapper}>
            <LogoutIcon className={styles.logoutIcon} />
            <Typography
              variant='body1'
              className={styles.logoutText}
              onClick={logOut}
            >
              Sign out
            </Typography>
          </div>
        </div>
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
