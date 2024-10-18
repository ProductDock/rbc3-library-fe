import { AppBar, Box, Toolbar } from '@mui/material'
import { Logo } from './Logo'
import { MenuItems } from './MenuItems'

import styles from './Header.module.css'
import { BackButton } from '../BackButton'

type HeaderProps = {
  showBackButton?: boolean
  onBackClick?: () => void
}

export const Header: React.FC<HeaderProps> = ({
  showBackButton = false,
  onBackClick,
}) => {
  return (
    <Box className={styles.flex}>
      <AppBar position='static' className={styles.appBar}>
        <Toolbar className={styles.toolBar}>
          {showBackButton ? (
            <BackButton onClick={onBackClick} className={styles.backButton} />
          ) : (
            <Logo />
          )}
          <MenuItems />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
