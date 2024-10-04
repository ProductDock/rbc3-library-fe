import { Button, Drawer } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import styles from './FiltersSideBar.module.css'

interface SidebarProps {
  open: boolean
  toggleDrawer: (newOpen: boolean) => void
}
const SideBar = ({ open, toggleDrawer }: SidebarProps) => {
  const DrawerList = (
    <>
      <div className={styles.closeBar}>
        <Button onClick={() => toggleDrawer(false)}>
          <CloseIcon className={styles.closeIcon}></CloseIcon>
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
