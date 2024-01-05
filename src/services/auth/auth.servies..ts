import {
  GetAuthMeResponseType,
  LoginArgs,
  LoginResponseType,
  SignUpArgs,
} from '@/pages/flashcards.types'
import { baseApi } from '@/services/base-api'

const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAuthMe: builder.query<GetAuthMeResponseType, void>({
      query: () => ({
        url: 'v1/auth/me',
      }),
    }),
    logIn: builder.mutation<LoginResponseType, LoginArgs>({
      query: args => ({
        body: args,
        method: 'POST',
        url: 'v1/auth/login',
      }),
    }),
    logOut: builder.query<void, void>({
      query: () => ({
        url: 'v1/auth/logout',
      }),
    }),
    signUp: builder.mutation<any, SignUpArgs>({
      query: args => ({
        body: args,
        method: 'POST',
        url: 'v1/auth/sign-up',
      }),
    }),
    // updateUserData: builder.mutation<GetAuthMeResponseType, UpdateUserDataArgs>({
    //   query: (args) => {
    //     const formData = new FormData();
    //
    //     formData.append('avatar', ${args.avatar});
    //     formData.append('name', ${args.name});
    //
    //     return {
    //       body: formData,
    //       headers: {
    //         'Content-Type': 'multipart/form-data;',
    //       },
    //       method: 'PATCH',
    //       url: 'v1/auth/me',
    //     };
    //   },
    // }),
  }),
})

export const { useGetAuthMeQuery, useLogInMutation } = authService
