import { AppBar, Box, Toolbar, useMediaQuery } from '@mui/material'
import { Logo } from './Logo'
import { MenuItems } from './MenuItems'
import styles from './Header.module.css'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { BackButton } from '../BackButton'

export const Header = () => {
  const location = useLocation()
  const isAddBooksPage = location.pathname === '/add-books'
  const matches = useMediaQuery('(max-width:780px)')

  return (
    <Box className={styles.flex}>
      <AppBar
        position='static'
        className={classNames(styles.appBar, {
          [styles.appBarAddBooks]: isAddBooksPage && matches,
        })}
      >
        <Toolbar
          className={classNames(styles.toolBar, {
            [styles.toolBarAddBooks]: isAddBooksPage && matches,
          })}
        >
          {isAddBooksPage && matches ? <BackButton /> : <Logo />}
          <MenuItems />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
