import { useMediaQuery } from '@mui/material'
import BookCard from '../BookCard/BookCard'
import { BookCardOfficeManager } from './BookCardOfficeManager'

interface BookProps {
  title: string
  author: string[]
}

const BookCatalogueCardOfficeManager: React.FC<BookProps> = ({
  title,
  author,
}) => {
  const matches = useMediaQuery('(min-width:1100px)')

  return (
    <>
      {matches ? (
        <BookCardOfficeManager title={title} author={author} />
      ) : (
        <BookCard inFavorites={false} isAdmin={true} />
      )}
    </>
  )
}
export default BookCatalogueCardOfficeManager
