import { BookCatalogueSection } from './BookCatalogueSection/BookCatalogueSection'
import { LetsStartExploring } from './LetsStartExploring'
import { BookCard } from '../../components/BookCard'

const Homepage = () => {
  return (
    <div>
      <LetsStartExploring />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10rem',
        }}
      >
        <BookCard inFavorites={true} />
        <BookCard inFavorites={false} />
        <BookCard inFavorites={true} />
        <BookCard inFavorites={false} />
      </div>
      <BookCatalogueSection />
    </div>
  )
}
export default Homepage
