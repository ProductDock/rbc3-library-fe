import { BookWithFile } from '../../pages/AddNewBooksForm/AddNewBooksForm'
import { API_URL, DATA_FETCH_ERROR, GOOGLE_BASE_URL } from '../constants'
import {
  ApiService,
  BooksObject,
  Headers,
  ImageObject,
  Review,
  ReviewWithId,
  UserDto,
} from '../types'

class Service implements ApiService {
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

  uploadImage(file: File): Promise<ImageObject> {
    const formData = new FormData()
    formData.append('image', file)
    return fetch(`${API_URL}/books/upload-image`, {
      method: 'POST',
      body: formData,
    })
      .then(response => Service.handleErrors(response))
      .then(responce => responce.json())
  }

  addBook(bookWithFile: BookWithFile): Promise<BooksObject> {
    return fetch(`${API_URL}/books`, {
      method: 'POST',
      body: JSON.stringify(bookWithFile.book),
      headers: this.getHeaders(),
    })
      .then(response => Service.handleErrors(response))
      .then(responce => responce.json())
  }

  addBooks(booksWithFile: BookWithFile[]): Promise<BooksObject[]> {
    return Promise.all(
      booksWithFile.map(bookWithFile => {
        if (bookWithFile.file) {
          return this.uploadImage(bookWithFile.file).then(ImageObject => {
            bookWithFile.book.imageUrl = ImageObject.imagePath
            console.log(ImageObject)
            return this.addBook(bookWithFile)
          })
        }
        return this.addBook(bookWithFile)
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

  login(body: UserDto): Promise<Response> {
    return fetch(`${API_URL}/users/login`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  getGoogleUserInfo(accessToken: string): Promise<Response> {
    return fetch(
      `${GOOGLE_BASE_URL}/oauth2/v1/userinfo?access_token=${accessToken}`,
      {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      }
    )
  }
}
export default new Service()
