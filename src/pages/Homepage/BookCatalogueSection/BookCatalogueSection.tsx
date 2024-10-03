import Typography from '@mui/material/Typography'
import styles from './BookCatalogueSection.module.css'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

export const BookCatalogueSection = () => {
  return (
    <div className={styles.catalogueWrapper}>
      <div className={styles.titleButtonWrapper}>
        <Typography className={styles.catalogueText}>
          Book catalogue (72)
        </Typography>
        <Button className={styles.suggestButton}>Suggest a book</Button>
      </div>
      <Divider />
      <div className={styles.categoryStatusWrapper}>
        <div className={styles.categoriesWrapper}>
          <div className={styles.category}>All</div>
          <div className={styles.category}>Software development</div>
          <div className={styles.category}>Marketing</div>
          <div className={styles.category}>Product management</div>
          <div className={styles.category}>Design</div>
          <div className={styles.category}>Psychology</div>
        </div>
        <div className={styles.sortByWrapper}>
          <Typography className={styles.sortBy}>Sort by:</Typography>
          <div>All statuses</div>
        </div>
      </div>
    </div>
  )
}
