import { baseApi } from '@/services/base-api'

const cardsServiece = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
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
      // addCard: builder.mutation<void, ArgCreateCardType>({
      //   query: (args) => {
      //     return {method: "POST", url: `v1/decks/${args.id}/cards`, body: {args,},
      //     };
      //   },
      // }),
    }
  },
})

export const { useGetCardsQuery } = cardsServiece

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
