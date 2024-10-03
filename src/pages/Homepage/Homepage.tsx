import { LetsStartExploring } from './LetsStartExploring'
import BookCard from '../../components/BookCard/BookCard'

const Homepage = () => {
  return (
    <div>
      <LetsStartExploring />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  )
}
export default Homepage
