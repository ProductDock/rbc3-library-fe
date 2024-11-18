import { API_URL, DATA_FETCH_ERROR } from '../constants'
import { ApiService, BooksObject, Headers } from '../types'

class Service implements ApiService {
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
  }: {
    currentPage: number
    pageSize: number
  }) => {
    return fetch(`${API_URL}/books?page=${currentPage}&size=${pageSize}`, {
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
