import {
  CreateDecksArgs,
  GetDeckByIdArgs,
  GetDecksArgs,
  GetDecksResponse,
} from '@/pages/flashcards.types'
import { baseApi } from '@/services/base-api'

const decksServiece = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<void, CreateDecksArgs>({
        invalidatesTags: ['Decks'],
        query: arg => {
          return { body: arg, method: 'POST', url: 'v1/decks' }
        },
      }),
      getDeckById: builder.query<GetDecksResponse, GetDeckByIdArgs>({
        query: ({ id }) => {
          return { url: `v1/decks/${id}` }
        },
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => {
          return { params: args ?? {}, url: `v1/decks` }
        },
      }),
      removeDeck: builder.mutation<void, { id: string }>({
        invalidatesTags: ['Decks'],
        query(id) {
          return { method: 'DELETE', url: `v1/decks/${id}` }
        },
      }),
      // updateDeck: builder.mutation<void, CreateDecksArgs>({
      //   invalidatesTags: ['Decks'],
      //   query: arg => {
      //     return { body: arg, method: 'PUT', url: `v1/decks/${id}` }
      //   },
      // }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useRemoveDeckMutation,
} = decksServiece
