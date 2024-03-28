import { useDispatch } from 'react-redux'

import { appSlice } from '@/services/appStore/app-reducer'
import { mokkyApi } from '@/services/currencySlice/mokkyEndpoints'
import { mokkySlice } from '@/services/currencySlice/storeSlice/mokky.slice'
import { currencyReducer } from '@/services/currencyWithCreateThunk/currency-reducer'
import { combineSlices, configureStore } from '@reduxjs/toolkit'

export const rootReducer = combineSlices(mokkySlice, mokkyApi, appSlice, { currencyReducer })

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mokkyApi.middleware),
  reducer: rootReducer,
})

type AppDispatchType = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatchType>()
