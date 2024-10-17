import {
  Alert,
  Button,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'

import { useEffect, useState } from 'react'
import { MobileView } from './MobileView'
import styles from './TestingPage.module.css'

export type Book = {
  id: string
  title: string
  author: string
}

export const TestingPage = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [openSnachBar, setOpenSnachBar] = useState(false)
  const [snackbarColor, setSnackbarColor] = useState('green')

  const mobileScreen = useMediaQuery('(max-width:700px)')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/books')
      const testResponse = await response.json()
      setBooks(testResponse as Book[])
    }
    fetchData()
  }, [])

  const handleAddBook = async () => {
    try {
      const response = await fetch('http://localhost:3000/add-book', {
        method: 'POST',
        body: JSON.stringify({ author: author, title: title }),
      })

      if (response.status !== 200) {
        setSnackbarColor('red')
        setOpenSnachBar(true)
        return
      }
      setSnackbarColor('green')
      setOpenSnachBar(true)
      books.push({ author: author, title: title, id: 'test' })
    } catch {
      setSnackbarColor('red')
    }
  }

  const handleClose = () => {
    setOpenSnachBar(false)
  }

  return (
    <div className={styles.wrapper}>
      {mobileScreen ? (
        <MobileView books={books} />
      ) : (
        <TableContainer component={Paper} className={styles.table}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant='h5'>Author</Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5'>Title</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            {books.length > 0 ? (
              <TableBody data-testid='book-table'>
                {books.map(book => (
                  <TableRow
                    key={book.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      {book.author}
                    </TableCell>
                    <TableCell align='right'>{book.title}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <TableBody data-testid='book-table'>
                <TableRow
                  key='3'
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <Typography variant='h3'>No books were added</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
      )}

      <div className={styles.form} data-testid='add-new-book-form'>
        <Typography variant='h3'>Add new book</Typography>
        <TextField
          id='author-input'
          label='Author'
          variant='standard'
          value={author}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setAuthor(event.target.value)
          }}
        />
        <TextField
          id='title-input'
          label='Title'
          variant='standard'
          value={title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(event.target.value)
          }}
        />

        <Button
          variant='contained'
          onClick={handleAddBook}
          disabled={author === '' || title === ''}
          data-testid='submit-button'
        >
          Add book
        </Button>
      </div>
      <Snackbar
        color={snackbarColor}
        open={openSnachBar}
        onClose={handleClose}
        autoHideDuration={4000}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarColor === 'green' ? 'success' : 'error'}
          variant='filled'
          sx={{ width: '100%' }}
          data-testid={snackbarColor === 'green' ? 'success' : 'error'}
        >
          {snackbarColor === 'green' ? 'Book added' : 'Error adding book'}
        </Alert>
      </Snackbar>
    </div>
  )
}
