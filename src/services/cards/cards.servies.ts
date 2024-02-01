import { baseApi } from '@/services/base-api'
import { ArgCreateCardType, getCardsResponseType } from '@/services/cards/card.type'

// 1 параметр - тип того, что возвращает сервер (ResultType)
// 2 параметр - тип query аргументов (QueryArg)
const cardsServiece = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      addCard: builder.mutation<void, ArgCreateCardType>({
        query: args => {
          return {
            body: { args },
            method: 'POST',
            url: `v1/decks/${args.id}/cards`,
          }
        },
      }),
      getCardById: builder.query<getCardsResponseType, string>({
        query: id => {
          debugger

          return { url: `v1/cards/${id}` }
        },
      }),
      getCards: builder.query<void, string>({
        query: id => {
          return {
            method: 'GET',
            url: `v1/decks/${id}/cards`,
            // method: "GET", url: `v1/decks/${id}/learn`,
            // params: {cardsPack_id: packId,},
          }
        },
      }),
    }
  },
})

export const { useGetCardByIdQuery, useGetCardsQuery } = cardsServiece

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
