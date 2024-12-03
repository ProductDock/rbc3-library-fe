import { BookWithFile } from '../pages/AddNewBooksForm/AddNewBooksForm'

import { Status } from '../components/BookStatusPanel/BookStatus/Status'

export interface ApiService {
  fetchBooksData({
    currentPage,
    pageSize,
  }: {
    currentPage: number
    pageSize: number
  }): Promise<Record<string, string>>

  addBook(bookWithFile: BookWithFile): Promise<BooksObject>

  uploadImage(file: File, bookId: string): Promise<string>
}

export type Headers = {
  [key: string]: string
}

export type BooksObject = {
  id: string
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
  bookStatus: Status
  id: string
  title: string
  authors: [
    {
      id: string
      fullName: string
    }
  ]
  imageUrl: string
  status: string
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
