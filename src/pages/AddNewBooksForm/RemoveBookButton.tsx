import { Button, Typography } from '@mui/material'
import style from './AddNewBooksForm.module.css'
import remove from '../../assets/delete.svg'
import { Book } from '../AddNewBooksForm/AddNewBooksForm'
type RemoveBookProps = {
  index: number
  addedBooks: Book[]
  setAddedBooks?: (addedBooks: Book[]) => void
}

const RemoveBookButton = ({
  index,
  addedBooks,
  setAddedBooks,
}: RemoveBookProps) => {
  const handleDelete = () => {
    if (setAddedBooks !== undefined) {
      console.log('index', index)

      const newArr = addedBooks.filter(
        (_, elementIndex) => elementIndex !== index
      )
      console.log('newArr', newArr)
      setAddedBooks(newArr)
    }
  }
  return (
    <Button type='button' onClick={handleDelete}>
      <img src={remove} alt='delete' />
      <Typography variant='body1' className={style.removeBookButtonText}>
        Remove this book
      </Typography>
    </Button>
  )
}
export default RemoveBookButton
