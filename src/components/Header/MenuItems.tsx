import {
  Avatar,
  Divider,
  IconButton,
  MenuItem,
  Stack,
  TextField,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import avatar from '../../assets/avatar.svg'

import styles from './Header.module.css'

export const MenuItems = () => {
  return (
    <>
      <Stack
        direction='row'
        spacing='48px'
        marginLeft='auto'
        alignItems='center'
      >
        <MenuItem divider className={styles.menuItemsText}>
          Library
        </MenuItem>
        <MenuItem className={styles.menuItemsText}>My books</MenuItem>
        <MenuItem className={styles.menuItemsText}>Help</MenuItem>
        <div className={styles.notificationWrapper}>
          <IconButton className={styles.logoIcon}>
            <Avatar src={avatar} />
          </IconButton>
          <div className={styles.notificationBadge} />
        </div>

        <Divider className={styles.divider} orientation='vertical' flexItem />
      </Stack>

      <TextField
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
      ></TextField>
    </>
  )
}