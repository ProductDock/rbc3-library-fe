import { BookCatalogueSection } from './BookCatalogueSection/BookCatalogueSection'
import { LetsStartExploring } from './LetsStartExploring'
import { BookCard } from '../../components/BookCard'

const Homepage = () => {
  return (
    <div>
      <LetsStartExploring />
      <BookCatalogueSection />
    </div>
  )
}
export default Homepage
