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

  http.get('*/reviews*', () => {
    return HttpResponse.json([
      {
        id: '1',
        rating: 1,
        content:
          'This book was not what I was hoping for and I kept waiting to have' +
          'some revelation about interpersonal interaction.',
        recommendedFor: { seniority: ['Medior'] },
        dateTime: 'July 2024',
        bookId: '1',
        user: {
          id: '1',
          fullName: 'Zoran Jelic',
          email: '',
          imageUrl: '/src/assets/avatarZoran.svg',
          role: {},
        },
      },
      {
        id: '2',
        rating: 4,
        content:
          'The book continues by suggesting that you can improve your decisions by improving your knowledge' +
          ' about what other people think. Political pollsters ask people how they would vote today, and not some point' +
          ' in the future. It is better to get a perspective than to take a perspective. Just because someone has liked' +
          ' cooking for a long time doesnt necessarily mean that they want cookery things for their birthday.',
        recommendedFor: { seniority: ['Medior', 'Senior'] },
        dateTime: 'February 2023',
        bookId: '1',
        user: {
          id: '2',
          fullName: 'Milena Pavlovic',
          email: '',
          imageUrl: '/src/assets/avatarMilena.svg',
          role: {},
        },
      },
    ])
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
