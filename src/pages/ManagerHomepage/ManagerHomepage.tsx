import { Header } from '../../components/Header'
import { BookCatalogueSection } from '../Homepage/BookCatalogueSection'
import { LetsStartExploring } from '../Homepage/LetsStartExploring'

const Library = () => {
  return (
    <div>
      <Header />
      <LetsStartExploring />
      <BookCatalogueSection isAdmin={true} />
    </div>
  )
}

export default Library
