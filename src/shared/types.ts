import { BookWithFile } from '../pages/AddNewBooksForm/AddNewBooksForm'

export interface ApiService {
  fetchBooksData({
    currentPage,
    pageSize,
  }: {
    currentPage: number
    pageSize: number
  }): Promise<Record<string, string>>

  fetchBooksWithoutPagination({
    categories,
    statuses,
  }: {
    categories: string[]
    statuses: string[]
  }): Promise<BooksObject>

  addBook(bookWithFile: BookWithFile): Promise<BooksObject>

  uploadImage(file: File): Promise<ImageObject>
}

export type Headers = {
  [key: string]: string
}

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

export type User = {
  id: string
  fullName: string
  email: string
  imageUrl: string
  role: string
}

export type Review = {
  id: string
  rating: number
  content: string
  recommendedFor: {
    seniority: string[]
  }
  dateTime: string
  bookId: string
  user: User
}

export type ImageObject = {
  imagePath: string
}
