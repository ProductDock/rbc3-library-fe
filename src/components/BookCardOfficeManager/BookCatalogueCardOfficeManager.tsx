import { useMediaQuery } from '@mui/material'
import BookCard from '../BookCard/BookCard'
import { BookCardOfficeManager } from './BookCardOfficeManager'
import { Status } from '../BookStatusPanel/BookStatus/Status'

interface BookProps {
  title: string
  author: string[]
  image: string
  status: Status
}

const BookCatalogueCardOfficeManager: React.FC<BookProps> = ({
  title,
  author,
  image,
  status,
}) => {
  const matches = useMediaQuery('(min-width:1100px)')

  return (
    <>
      {matches ? (
        <BookCardOfficeManager
          title={title}
          author={author}
          image={image}
          status={status}
        />
      ) : (
        <BookCard
          inFavorites={false}
          isAdmin={true}
          title={title}
          author={author}
          image={image}
          status={status}
        />
      )}
    </>
  )
}
export default BookCatalogueCardOfficeManager
