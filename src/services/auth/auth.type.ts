export type authType = {
  message: 'Unauthorized'
  path: '/v1/decks/clqr0vevn005lv12wu4kq304v'
  statusCode: 401
  timestamp: '2023-12-30T13:06:32.873Z'
}
export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}
export type SignUpArgs = {
  email: string
  html?: string
  name?: string
  password: string
  sendConfirmationEmail?: boolean
  subject?: string
}
export type User = {
  avtar?: null | string
  created: string
  email: string
  id: string
  name: string
  updated: string
}
