import { API_URL, DATA_FETCH_ERROR } from '../constants'
import { ApiService, Headers } from '../types'

class Service implements ApiService {
  private headers: Headers = {
    'Content-Type': 'application/json',
  }

  fetchBooksData = async () => {
    return fetch(`${API_URL}/books`, {
      method: 'GET',
      credentials: 'same-origin',
      headers: this.getHeaders(),
    })
      .then(response => Service.handleErrors(response))
      .then(response => response.json())
  }

  fetchBookReviews = async () => {
    return fetch(`${API_URL}/books/67238e068016e386a15e739c/reviews`, {
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
