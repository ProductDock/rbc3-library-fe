import { API_URL, DATA_FETCH_ERROR } from '../constants'
import { ApiService, Headers } from '../types'

class Service implements ApiService {
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
