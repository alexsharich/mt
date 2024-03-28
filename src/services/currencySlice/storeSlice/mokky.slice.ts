import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: any = {}

export const mokkySlice = createSlice({
  initialState,
  name: 'currencyReducer',
  reducers: {
    setCurrency: (_, action: PayloadAction<any>) => action.payload,
  },
})

export const { setCurrency } = mokkySlice.actions
