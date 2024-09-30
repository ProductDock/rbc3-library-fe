import { AppBar, Box, Toolbar } from '@mui/material'
import { Logo } from './Logo'
import { MenuItems } from './MenuItems'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <Box className={styles.flex}>
      <AppBar position='static' className={styles.appBar}>
        <Toolbar className={styles.toolBar}>
          <Logo />
          <MenuItems />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
