import { useMediaQuery } from '@mui/material'
import BookCard from '../BookCard/BookCard'
import { BookCardOfficeManager } from './BookCardOfficeManager'
import { Status } from '../BookStatusPanel/BookStatus/Status'

interface BookProps {
  onClick?: () => void
  title: string
  author: string[]
  image: string
  status: Status
  rating: string
}

const BookCatalogueCardOfficeManager: React.FC<BookProps> = ({
  onClick,
  title,
  author,
  image,
  status,
  rating,
}) => {
  const matches = useMediaQuery('(min-width:1100px)')

  return (
    <>
      {matches ? (
        <BookCardOfficeManager
          onClick={onClick}
          title={title}
          author={author}
          rating={rating}
          image={image}
          status={status}
        />
      ) : (
        <BookCard
          onClick={onClick}
          inFavorites={false}
          isAdmin={true}
          title={title}
          rating={rating}
          author={author}
          image={image}
          status={status}
        />
      )}
    </>
  )
}
export default BookCatalogueCardOfficeManager
