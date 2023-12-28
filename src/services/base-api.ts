import {
  CreateDecksArgs,
  GetAuthMeResponseType,
  GetDeckByIdArgs,
  GetDecksArgs,
  GetDecksResponse,
  LoginArgs,
  LoginResponseType,
  SignUpArgs,
  UpdateUserDataArgs,
  UpdateUserDataResponseType,
} from '@/pages/flashcards.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      createDeck: builder.mutation<void, CreateDecksArgs>({
        query: arg => {
          return {
            body: arg,
            method: 'POST',
            url: 'v1/decks',
          }
        },
      }),
      getAuthMe: builder.query<GetAuthMeResponseType, void>({
        query: () => {
          return {
            url: `v1/auth/me`,
          }
        },
      }),
      getDeckById: builder.query<GetDecksResponse, GetDeckByIdArgs>({
        query: ({ id }) => {
          return {
            url: `v1/decks/${id}`,
          }
        },
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        query: args => {
          return {
            params: args ?? {},
            url: `v1/decks`,
          }
        },
      }),
      logIn: builder.mutation<LoginResponseType, LoginArgs>({
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: `v1/auth/login`,
          }
        },
      }),
      logOut: builder.query<void, void>({
        query: () => {
          return {
            url: 'v1/auth/logout',
          }
        },
      }),
      signUp: builder.mutation<any, SignUpArgs>({
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: `v1/auth/sign-up`,
          }
        },
      }),
      updateUserData: builder.mutation<UpdateUserDataResponseType, UpdateUserDataArgs>({
        query: args => {
          return {
            body: args,
            method: 'PATCH',
            url: `v1/auth/me`,
          }
        },
      }),
    }
  },
  reducerPath: 'baseApi',
  // refetchOnFocus: true,
})

export const {
  useCreateDeckMutation,
  useGetAuthMeQuery,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useLogInMutation,
  useSignUpMutation,
  useUpdateUserDataMutation,
} = baseApi
