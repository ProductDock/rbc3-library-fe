import { BookCatalogueSection } from '../Homepage/BookCatalogueSection'
import { LetsStartExploring } from '../Homepage/LetsStartExploring'

const Library = () => {
  return (
    <div>
      <LetsStartExploring />
      <BookCatalogueSection isAdmin={true} />
    </div>
  )
}

export default Library
