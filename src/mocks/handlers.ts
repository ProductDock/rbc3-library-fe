import { http, HttpResponse } from 'msw'
import testPurposeFixture from './fixtures/testPurposesFixture.json'

export const handlers = [
  http.get('http://localhost:3000/books', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([
      {
        id: '4',
        title: 'Hooked',
        author: 'Nie Eyal',
      },
      {
        id: '5',
        title: 'Mindwise',
        author: 'Nicolas Epley',
      },
      {
        id: '6',
        title: 'When',
        author: 'Daniel H. Pink',
      },
    ])
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
