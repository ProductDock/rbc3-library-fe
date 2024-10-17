import { BookCatalogueSection } from '../Homepage/BookCatalogueSection'
import { LetsStartExploring } from '../Homepage/LetsStartExploring'
import styles from '../Homepage/Homepage.module.css'

const Library = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.catalogueWrapper}>
        <div className={styles.exploringWrapper}>
          <div>
            <LetsStartExploring />
          </div>
        </div>
        <BookCatalogueSection isAdmin={true} />
      </div>
    </div>
  )
}

export default Library
