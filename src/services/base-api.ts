import { baseQueryWithReauth } from '@/services/base-query-with-reauth'
import { createApi } from '@reduxjs/toolkit/query/react'

// fetchBaseQuery-выполняет функции axios
export const baseApi = createApi({
  // }),
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  // baseQuery: fetchBaseQuery({
  //   baseUrl: 'https://api.flashcards.andrii.es',
  //   credentials: 'include',
  //   // prepareHeaders: headers => {
  //   //   headers.append('x-auth-skip', 'true')
  //   // },
  reducerPath: 'baseApi',
  tagTypes: ['Decks', 'Me'],
  // refetchOnFocus: true,
})
