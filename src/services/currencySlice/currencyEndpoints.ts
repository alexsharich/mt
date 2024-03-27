import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const currencyApi = createApi({
  baseQuery: fetchBaseQuery({
    //baseUrl: 'https://57aeef1f4f92097e.mokky.dev/favorites',
    //baseUrl:'https://v6.exchangerate-api.com/v6/9915216ba0bfeb4cb89ed454/latest/USD'
    baseUrl:
      'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_RUtycrKbCHbMtlEteVJ4sytuHLUl21VNxAFIFPRy&currencies=USD,CAD',
    credentials: 'include',
  }),
  endpoints: build => {
    return {
      getCurrency: build.query<any, any>({
        query: () => {
          return {
            method: 'GET',
            url: '',
          }
        },
      }),
    }
  },
  reducerPath: 'currencyApi',
})

export const { useGetCurrencyQuery, useLazyGetCurrencyQuery } = currencyApi
