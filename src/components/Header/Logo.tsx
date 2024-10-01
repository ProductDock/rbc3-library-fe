import pd from '../../assets/pdLogo.svg'

import styles from './Header.module.css'

export const Logo = () => {
  return (
    <div>
      <img src={pd} alt='logo' className={styles.logo} />
    </div>
  )
}
