export interface ApiService {
  fetchMockData(): Promise<Record<string, string>>
}

export type Headers = {
  [key: string]: string
}

export type TestObject = {
  count: number
  testEndpoint: TestList[]
}

export type TestList = { info: string; info2: number; info3: string }

export type BooksObject = {
  content: BooksList[]
  pageable: {
    pageNumber: number
    pageSize: number
    sort: {
      empty: boolean
      sorted: boolean
      unsorted: boolean
    }
    offset: number
    paged: boolean
    unpaged: boolean
  }
  totalElements: number
  totalPages: number
  last: boolean
  size: number
  number: number
  sort: {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  numberOfElements: number
  first: boolean
  empty: boolean
}

export type BooksList = {
  id: string
  title: string
  authors: [
    {
      id: string
      fullName: string
    }
  ]
  imageUrl: string
  numberOfAvailableCopies: number
  usersWhoFavourited: string[]
  usersOnWaitingList: string[]
  usersWhoRented: string[]
  usersWhoReserved: string[]
  bookCategories: string[]
}
