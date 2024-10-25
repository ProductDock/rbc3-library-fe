import { http, HttpResponse } from 'msw'
import testPurposeFixture from './fixtures/testPurposesFixture.json'
// import booksFixture from '../mocks/fixtures/booksFixture.json'

export const handlers = [
  // http.get('http://localhost:8080/books', () => {
  //   // ...and respond to them using this JSON response.
  //   return HttpResponse.json(booksFixture.content)
  // }),

  http.post('http://localhost:3000/add-book', () => {
    return HttpResponse.json(
      { message: 'Book added successfully' },
      {
        status: 200,
        statusText: 'Added book',
      }
    )
  }),

  http.get('http://localhost:8080/test', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(testPurposeFixture.testEndpoint)
  }),

  /*
     http.post('http://localhost:3000/add-book', () => {
    return new HttpResponse(null, {
      status: 404,
      statusText: 'No books',
    })
  }),
   */
]
