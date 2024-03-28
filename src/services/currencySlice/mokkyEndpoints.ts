import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mokkyApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://38bf056cba7be39f.mokky.dev/',
  }),
  endpoints: build => {
    return {
      getAluminum: build.query<any, any>({
        query: () => {
          return {
            method: 'GET',
            url: '/aluminum',
          }
        },
      }),
      getCoffee: build.query<any, any>({
        query: () => {
          return {
            method: 'GET',
            url: '/coffee',
          }
        },
      }),
      getNaturalGas: build.query<any, any>({
        query: () => {
          return {
            method: 'GET',
            url: '/natural-gas',
          }
        },
      }),
    }
  },
  reducerPath: 'mokkyApi',
})

export const { useLazyGetAluminumQuery, useLazyGetCoffeeQuery, useLazyGetNaturalGasQuery } =
  mokkyApi
