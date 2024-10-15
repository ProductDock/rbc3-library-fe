import styles from '../BookCardOfficeManager.module.css'
import favorite from '../../../assets/favoriteBookManagment.svg'
import edit from '../../../assets/edit.svg'
import remove from '../../../assets/delete.svg'

const BookManagmentIcons = () => {
  return (
    <div className={styles.bookManagmentIconsWrapper}>
      <div className={styles.iconContainer}>
        <img
          src={favorite}
          alt='favoriteIcon'
          className={styles.favoriteIcon}
        />
      </div>
      <div className={styles.iconContainer}>
        <img src={remove} alt='removeIcon' className={styles.removeIcon} />
      </div>
      <div className={styles.iconContainer}>
        <img src={edit} alt='editIcon' className={styles.editIcon} />
      </div>
    </div>
  )
}
export default BookManagmentIcons
