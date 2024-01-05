export type GetDecksResponse = {
  items: GetDecksResponseItems[]
  maxCardsCount: number
  pagination: GetDecksResponsePagination
}
export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}
export type GetDeckByIdArgs = {
  id: string
}
export type CreateDecksArgs = {
  cover?: string
  isPrivate?: boolean
  name: string
}
export type GetDecksResponsePagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type GetDecksResponseItemsAuthor = {
  id: string
  name: string
}
export type GetDecksResponseItems = {
  author: GetDecksResponseItemsAuthor
  cardsCount: number
  cover?: null | string
  created: string
  id: string
  isBlocked?: boolean | null
  isDeleted?: boolean | null
  isPrivate: boolean
  name: string
  rating: number
  shots: number
  updated: string
  userId: string
}
export type SignUpArgs = {
  email: string
  html?: string
  name?: string
  password: string
  sendConfirmationEmail?: boolean
  subject?: string
}

export type GetAuthMeResponseType = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}
export type LoginResponseType = {
  accessToken: string
}
export type LoginArgs = {
  email: string
  password: string
  rememberMe: boolean
}

export type UpdateUserDataArgs = {
  avatar?: string
  email?: string
  name?: string
}
