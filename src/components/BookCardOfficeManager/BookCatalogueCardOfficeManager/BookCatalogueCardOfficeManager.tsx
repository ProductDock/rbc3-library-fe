import { useMediaQuery } from '@mui/material'
import BookCard from '../../BookCard/BookCard'
import BookCardOfficeManager from '../BookCardOfficeManager'

const BookCatalogueCardOfficeManager = () => {
  const matches = useMediaQuery('(min-width:1100px)')

  return (
    <>
      {matches ? (
        <BookCardOfficeManager />
      ) : (
        <BookCard inFavorites={false} isAdmin={true} />
      )}
    </>
  )
}
export default BookCatalogueCardOfficeManager
