import { combineSlices, configureStore } from '@reduxjs/toolkit'

export const rootReducer = combineSlices()

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
  reducer: rootReducer,
})
