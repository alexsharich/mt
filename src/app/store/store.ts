import { currencyApi } from '@/services/currencySlice/currencyEndpoints'
import { currencySlice } from '@/services/currencySlice/storeSlice/currency.slice'
import { combineSlices, configureStore } from '@reduxjs/toolkit'

export const rootReducer = combineSlices(currencySlice)

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(currencyApi.middleware),
  reducer: rootReducer,
})
