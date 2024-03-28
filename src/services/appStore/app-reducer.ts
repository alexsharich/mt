import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type AppStatus = 'error' | 'idle' | 'loading' | 'success'
export const appSlice = createSlice({
  initialState: {
    isLoading: 'idle',
  },
  name: 'appReducer',
  reducers: {
    setAppIsLoading: (state, action: PayloadAction<{ statusIsLoading: AppStatus }>) => {
      state.isLoading = action.payload.statusIsLoading
    },
  },
})

export const appReducer = appSlice.reducer
export const { setAppIsLoading } = appSlice.actions
