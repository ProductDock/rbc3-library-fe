import { BookCatalogueSection } from './BookCatalogueSection/BookCatalogueSection'
import { LetsStartExploring } from './LetsStartExploring'

const Homepage = () => {
  return (
    <div>
      <LetsStartExploring />
      <BookCatalogueSection isAdmin={false} />
    </div>
  )
}
export default Homepage
