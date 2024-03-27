// import { RootState } from '@/app/store/types/rootState'
// // import { authActions } from '@/services/authService/store/slice/authEndpoints.slice'
// import {
//   BaseQueryFn,
//   FetchArgs,
//   FetchBaseQueryError,
//   createApi,
//   fetchBaseQuery,
// } from '@reduxjs/toolkit/query/react'
// const baseUrl = 'https://www.cbr-xml-daily.ru/latest.js'
//
// export const baseQuery = fetchBaseQuery({
//   baseUrl,
//   credentials: 'include',
//   prepareHeaders: (headers, { getState }) => {},
// })
//
// export const baseQueryWithReAuth: BaseQueryFn<
//   FetchArgs | string,
//   unknown,
//   FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions)
//
//   if (result?.error?.status === 403 || result?.error?.status === 401) {
//     //send refresh token to get new access token
//     const refreshResult = await baseQuery(
//       { method: 'POST', url: 'auth/update-tokens' },
//       api,
//       extraOptions
//     )
//
//     if (refreshResult.data) {
//       // store the new token
//       api.dispatch(
//         authActions.setAccessToken((refreshResult.data as { accessToken: string }).accessToken)
//       )
//       // retry the original query with new access token
//       result = await baseQuery(args, api, extraOptions)
//     } else {
//       api.dispatch(authActions.reset())
//     }
//   }
//
//   return result
// }
//
// export const api = createApi({
//   baseQuery: baseQueryWithReAuth,
//   endpoints: () => ({}),
//   reducerPath: 'api',
//   tagTypes: ['Me', 'Profile'],
// })
