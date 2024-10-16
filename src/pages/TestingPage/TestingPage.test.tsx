import '@testing-library/jest-dom'
import {
  expect,
  test,
  describe,
  beforeAll,
  afterAll,
  afterEach,
  vi,
} from 'vitest'
import {
  prettyDOM,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react'
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'
import { TestingPage } from './TestingPage'
import { userEvent } from '@testing-library/user-event'

const server = setupServer(
  http.get('http://localhost:3000/books', () => {
    return HttpResponse.json([
      {
        id: '1',
        title: 'Test title 1',
        author: 'Lorem ipsum',
      },
      {
        id: '2',
        title: 'Test title 2',
        author: 'Lorem ipsum',
      },
      {
        id: '3',
        title: 'Test title 3',
        author: 'Lorem ipsum',
      },
    ])
  }),
  http.post('http://localhost:3000/add-book', () => {
    return HttpResponse.json({})
  })
)

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
})
afterAll(() => server.close())

describe('TestingPage', () => {
  test('renders books correctly inside the table when there are books', async () => {
    render(<TestingPage />)

    // After rendering we have to use async find matcher in order to wait for UI to load after api call happens
    const bookTable = await screen.findByTestId('book-table')
    expect(bookTable).toBeInTheDocument()

    // After first async find we don't need to use it again, everything is loaded and we can use synchonous matchers get and query

    const oneBook = within(bookTable).getByText('Test title 1')
    console.log(prettyDOM(oneBook))
    expect(oneBook).toBeInTheDocument()
  })

  test('renders no books message if there are no books', async () => {
    server.use(
      http.get('http://localhost:3000/books', () => {
        return HttpResponse.json([])
      })
    )
    render(<TestingPage />)

    // After rendering we have to use async find matcher in order to wait for UI to load after api call happens
    const bookTable = await screen.findByTestId('book-table')
    expect(bookTable).toBeInTheDocument()

    // After first async find we don't need to use it again, everything is loaded and we can use synchonous matchers get and query

    const noBooks = within(bookTable).getByText('No books were added')
    console.log(prettyDOM(noBooks))
    expect(noBooks).toBeInTheDocument()
  })

  test('submitting new book adds it to the table', async () => {
    const user = userEvent.setup()
    render(<TestingPage />)

    const bookTable = await screen.findByTestId('book-table')
    expect(bookTable).toBeInTheDocument()

    // Check that button is disabled
    const button = await screen.findByTestId('submit-button')
    expect(button).toBeDisabled()

    const authorInput = await screen.findByLabelText('Author')
    const titleInput = await screen.findByLabelText('Title')

    expect(authorInput).toBeInTheDocument()
    expect(titleInput).toBeInTheDocument()

    await user.type(titleInput, 'User Input Title')

    await user.type(authorInput, 'John doe')

    expect(button).not.toBeDisabled()

    await user.click(button)

    const newBook = await screen.findByText('User Input Title')

    expect(newBook).toBeInTheDocument()

    const successSnackbar = await screen.findByTestId('success')
    expect(successSnackbar).toBeInTheDocument()
  })

  test.only('shows error notification when adding new book fails', async () => {
    const user = userEvent.setup()
    server.use(
      http.post('http://localhost:3000/add-book', () => {
        return HttpResponse.json({ error: true }, { status: 500 })
      })
    )

    render(<TestingPage />)

    const bookTable = await screen.findByTestId('book-table')
    expect(bookTable).toBeInTheDocument()

    // Check that button is disabled
    const button = await screen.findByTestId('submit-button')
    expect(button).toBeDisabled()

    const authorInput = await screen.findByLabelText('Author')
    const titleInput = await screen.findByLabelText('Title')

    await user.type(titleInput, 'User Input Title')
    waitFor(() => expect(titleInput).toHaveValue('User Input Title'))

    user.type(authorInput, 'John doe')

    console.log(prettyDOM())

    expect(await screen.findByTestId('submit-button')).not.toBeDisabled()

    user.click(button)

    const errorSnackbar = await screen.findByTestId('error')
    expect(errorSnackbar).toBeInTheDocument()
  })

  test('shows mobile table when screen size is mobile', async () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: query === '(max-width:700px)',
        mediaQuery: query,
        handler: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    })
    render(<TestingPage />)

    const mobileView = await screen.findByTestId('mobile-view')
    expect(mobileView).toBeInTheDocument()

    const bookTable = screen.queryByTestId('book-table')
    expect(bookTable).not.toBeInTheDocument()
  })
})
