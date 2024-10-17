import { http, HttpResponse } from 'msw'

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
    return HttpResponse.json({}, { status: 500 })
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
