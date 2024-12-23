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

  uploadImage(file: File): Promise<ImageObject>

  login(UserDto: UserDto): Promise<Response>

  getGoogleUserInfo(accessToken: string): Promise<Response>
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
  averageRating: number
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

export type Review = {
  rating: number
  content: string
  seniorities: string[]
  dateTime: string
  bookId: string
}

export type ReviewWithId = Review & {
  id: string
}

export type ImageObject = {
  imagePath: string
}
export type UserDto = {
  fullName: string
  googleID: string
  email: string
  imageUrl: string
}
