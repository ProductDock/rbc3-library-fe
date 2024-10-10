import { BookCatalogueSection } from './BookCatalogueSection/BookCatalogueSection'
import { LetsStartExploring } from './LetsStartExploring'
import styles from './Homepage.module.css'

const Homepage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.catalogueWrapper}>
        <div className={styles.exploringWrapper}>
          <div>
            <LetsStartExploring />
          </div>
        </div>
        <BookCatalogueSection />
      </div>
    </div>
  )
}
export default Homepage
