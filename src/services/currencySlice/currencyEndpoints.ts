import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const currencyApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://57aeef1f4f92097e.mokky.dev/favorites',
    credentials: 'include',
  }),
  endpoints: build => {
    return {
      getCurrency: build.query<any, any>({
        query: () => {
          return {
            method: 'GET',
            url: '/',
          }
        },
      }),
    }
  },
  reducerPath: 'currencyApi',
})

export const { useGetCurrencyQuery } = currencyApi
