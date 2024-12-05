import { BookWithFile } from '../../pages/AddNewBooksForm/AddNewBooksForm'
import { API_URL, DATA_FETCH_ERROR } from '../constants'
import {
  ApiService,
  BooksObject,
  Headers,
  Review,
  ReviewWithId,
} from '../types'

class Service implements ApiService {
  fetchBooksWithoutPagination({
    categories,
    statuses,
  }: {
    categories: string[]
    statuses: string[]
  }): Promise<BooksObject> {
    let url = `${API_URL}/books/filter`
    if (categories.length !== 0) {
      const categoriesQueryParam = `&bookCategories=${categories.toString()}`
      url = `${url}${categoriesQueryParam}`
    }

    if (statuses.length !== 0) {
      const statusesQueryPram = `&bookStatuses=${statuses.toString()}`
      url = `${url}${statusesQueryPram}`
    }
    url = url.replace('&', '?')
    return fetch(url, {
      method: 'GET',
      credentials: 'same-origin',
      headers: this.getHeaders(),
    })
      .then(response => Service.handleErrors(response))
      .then(response => response.json())
  }

  fetchBookReviews = async (bookId: string) => {
    return fetch(`${API_URL}/books/${bookId}/reviews`, {
      method: 'GET',
      credentials: 'same-origin',
      headers: this.getHeaders(),
    })
      .then(response => Service.handleErrors(response))
      .then(response => response.json())
  }

  addReview(bookId: string, review: Review): Promise<ReviewWithId> {
    return fetch(`${API_URL}/books/${bookId}/reviews`, {
      method: 'POST',
      body: JSON.stringify(review),
      headers: this.getHeaders(),
    })
      .then(response => Service.handleErrors(response))
      .then(response => response.json())
  }

  uploadImage(file: File, bookId: string): Promise<string> {
    const formData = new FormData()
    formData.append('image', file)

    return fetch(`${API_URL}/books/upload-image/${bookId}`, {
      method: 'POST',
      body: formData,
    })
      .then(response => Service.handleErrors(response))
      .then(() => {
        return `${API_URL}/images/${bookId}`
      })
  }

  addBook(bookWithFile: BookWithFile): Promise<BooksObject> {
    return fetch(`${API_URL}/books`, {
      method: 'POST',
      body: JSON.stringify(bookWithFile.book),
      headers: this.getHeaders(),
    })
      .then(response => Service.handleErrors(response))
      .then(response => response.json())
  }

  addBooks(booksWithFile: BookWithFile[]): Promise<BooksObject[]> {
    return Promise.all(
      booksWithFile.map(bookWithFile => {
        return this.addBook(bookWithFile).then(book => {
          if (bookWithFile.file) this.uploadImage(bookWithFile.file, book.id)
          return book
        })
      })
    )
  }

  getBookById(bookId: string): Promise<BooksObject> {
    return fetch(`${API_URL}/books/${bookId}`, {
      method: 'GET',
      headers: this.getHeaders(),
    })
      .then(response => Service.handleErrors(response))
      .then(response => response.json())
  }

  private headers: Headers = {
    'Content-Type': 'application/json',
  }

  fetchBooksData = async ({
    currentPage,
    pageSize,
    categoriesWithoutAll,
    statuses,
  }: {
    currentPage: number
    pageSize: number
    categoriesWithoutAll: string[]
    statuses: string[]
  }) => {
    let url = `${API_URL}/books/filter?page=${currentPage}&size=${pageSize}`

    if (categoriesWithoutAll.length !== 0) {
      const categoriesQueryParam = `&bookCategories=${categoriesWithoutAll.toString()}`
      url = `${url}${categoriesQueryParam}`
    }

    if (statuses.length !== 0) {
      const statusesQueryPram = `&bookStatuses=${statuses.toString()}`
      url = `${url}${statusesQueryPram}`
    }

    return fetch(url, {
      method: 'GET',
      credentials: 'same-origin',
      headers: this.getHeaders(),
    })
      .then(response => Service.handleErrors(response))
      .then(response => response.json())
  }

  private getHeaders(additionalHeaders: Headers = {}): Headers {
    const headers: Headers = { ...this.headers, ...additionalHeaders }
    return headers
  }
  private static handleErrors(response: Response): Response {
    if (!response.ok) {
      throw new Error(DATA_FETCH_ERROR)
    }
    return response
  }
}

export default new Service()
