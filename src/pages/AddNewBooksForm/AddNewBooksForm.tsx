import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
  useMediaQuery,
} from '@mui/material'
import style from './AddNewBooksForm.module.css'
import { useState } from 'react'
import { BackButton } from '../../components/Shared'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { BookForm } from './BookForm'
import { RemoveBookButton } from './CustomComponents'
import { Author } from './BookForm/BookForm'

export type Book = {
  title: string
  authors: Author[]
  bookCategories: string[]
  numberOfAvailableCopies: number
  description: string
  imageUrl: string
}

const AddNewBooksForm = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const matches = useMediaQuery('(max-width: 780px)')
  const [addedBooks, setAddedBooks] = useState<Book[]>([])
  const [isAccordionExpanded, setIsAccordionExpanded] = useState(false)

  return (
    <div className={style.outerWrapper}>
      <div className={style.formWrapper}>
        <div className={style.backButton}>
          <BackButton />
        </div>
        <Divider className={style.dividerUnderBackButton} />
        <div className={style.wrapper}>
          <Typography variant={matches ? 'subtitle1' : 'h3'}>
            Add new books
            {addedBooks != undefined && addedBooks.length >= 1 ? (
              <Typography
                variant={matches ? 'h5' : 'h4'}
                className={style.numberOfAddedBooksText}
              >
                ({addedBooks.length})
              </Typography>
            ) : (
              <span className={style.dot}>.</span>
            )}
          </Typography>
        </div>
        <div className={style.accordionWrapper}>
          {addedBooks &&
            addedBooks.map((el, index) => (
              <div key={index}>
                <Divider />
                <Accordion
                  onChange={(_, expanded) => {
                    setIsAccordionExpanded(expanded)
                    setExpandedIndex(expanded ? index : null)
                  }}
                  style={{ boxShadow: 'none' }}
                  expanded={expandedIndex === index}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={style.accordion} />}
                  >
                    {expandedIndex === index ? (
                      <div>
                        <RemoveBookButton
                          index={index}
                          addedBooks={addedBooks}
                          setAddedBooks={setAddedBooks}
                        />
                      </div>
                    ) : (
                      <div>
                        <Typography
                          variant='body2'
                          className={style.accordionAuthor}
                        >
                          {el.authors.map((author, index) => (
                            <span key={index}>{author.fullName}</span>
                          ))}
                        </Typography>
                        <Typography
                          variant='h6'
                          className={style.accordionTitle}
                        >
                          {el.title}
                        </Typography>
                      </div>
                    )}
                  </AccordionSummary>
                  <AccordionDetails>
                    <div>
                      <BookForm
                        bookAmount={el.numberOfAvailableCopies}
                        bookAuthor={el.authors}
                        bookCategories={el.bookCategories}
                        bookDescription={el.description}
                        bookImageUrl={el.imageUrl}
                        bookTitle={el.title}
                        inAccordion={true}
                      />
                    </div>
                  </AccordionDetails>
                </Accordion>
                {expandedIndex !== index && <Divider />}
              </div>
            ))}
        </div>
        <div className={style.bookFormUnderAccordion}>
          <BookForm
            isAccordionExpanded={isAccordionExpanded}
            addedBooks={addedBooks}
            setAddedBooks={setAddedBooks}
          />
        </div>
      </div>
    </div>
  )
}
export default AddNewBooksForm
