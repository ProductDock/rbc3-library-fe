import { http, passthrough, HttpResponse } from 'msw'
// import booksFixture from '../mocks/fixtures/booksFixture.json'
import reviewsFixture from '../mocks/fixtures/reviewsFixture.json'

export const handlers = [
  // http.get('http://localhost:8080/books', () => {
  //   // ...and respond to them using this JSON response.
  //   return HttpResponse.json(booksFixture)
  // }),

  http.get('*/reviews/*', ({ request }) => {
    if (request.headers.get('Content-Type') === 'application/json') {
      return passthrough()
    }
    return HttpResponse.json(reviewsFixture)
  }),

  http.post('http://localhost:3000/add-book', () => {
    return HttpResponse.json(
      { message: 'Book added successfully' },
      {
        status: 200,
        statusText: 'Added book',
      }
    )
  }),

  http.post('http://localhost:3000/book/id/reviews', () => {
    return HttpResponse.json(
      { message: 'Review added successfully' },
      {
        status: 200,
        statusText: 'Added review',
      }
    )
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
