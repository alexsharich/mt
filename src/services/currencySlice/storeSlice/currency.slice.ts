import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: any = {}

export const currencySlice = createSlice({
  initialState,
  name: 'currencyReducer',
  reducers: {
    setCurrency: (_, action: PayloadAction<any>) => action.payload,
  },
})

export const { setCurrency } = currencySlice.actions
