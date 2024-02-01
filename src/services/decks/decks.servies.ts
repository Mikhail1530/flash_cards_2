import {
  CreateDecksArgs,
  GetDeckByIdArgs,
  GetDecksArgs,
  GetDecksResponse,
  UpdateDecksArgs,
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
      updateDeck: builder.mutation<void, UpdateDecksArgs>({
        invalidatesTags: ['Decks'],
        query: arg => {
          console.log('!!!!!updateDeck arg', arg, arg.id)
          debugger

          return {
            body: { cover: arg.cover, isPrivate: arg.isPrivate, name: arg.name },
            method: 'PATCH',
            url: `v1/decks/${arg.id}`,
          }
        },
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useRemoveDeckMutation,
  useUpdateDeckMutation,
} = decksServiece

// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//
// const initialState = {
//   itemsPerPage: 10,
//   currentPage: 1,
//   searchByName: '',
// }
//
// export const decksSlice = createSlice({
//   initialState,
//   name: 'decksSlice',
//   reducers: {
//     setItemsPerPage: (state, action: PayloadAction<number>) => {
//       state.itemsPerPage = action.payload
//     },
//     setCurrentPage: (state, action: PayloadAction<number>) => {
//       state.currentPage = action.payload
//     },
//     setSearchByName: (state, action: PayloadAction<string>) => {
//       state.searchByName = action.payload
//     },
//   },
// })
