import { currencyAPI } from '@/pages/api/currencyAPI'
import { setAppIsLoading } from '@/services/appStore/app-reducer'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const currencyThunkCreator = createAsyncThunk<any>(
  'currencyThunkCreator',
  async (param, thunkAPI) => {
    thunkAPI.dispatch(setAppIsLoading({ statusIsLoading: 'loading' }))

    const getEUR = currencyAPI.getCurrencyEUR()
    const getRUB = currencyAPI.getCurrencyRUB()
    const getPLN = currencyAPI.getCurrencyPLN()

    try {
      //const res = await currencyAPI.getCurrency('RUB')
      const result = await Promise.all([getEUR, getRUB, getPLN])

      if (result) {
        thunkAPI.dispatch(setAppIsLoading({ statusIsLoading: 'success' }))
        console.log(result)

        return result
      }
    } catch (err: any) {
      throw new Error(' CURRENCY SLICE ERROR')
    }
  }
)

export const currencySlice = createSlice({
  extraReducers: builder => {
    builder.addCase(currencyThunkCreator.fulfilled, (state, action: PayloadAction<[]>) => {
      state.EUR = action.payload[0].data.data.EUR
      state.RUB = action.payload[1].data.data.RUB
      state.PLN = action.payload[2].data.data.PLN
    })
  },
  initialState: {
    EUR: 'Euro',
    PLN: 'Polish Zloty',
    RUB: 'Russian Ruble',
  },
  name: 'currencyReducer',
  reducers: {},
})

export const currencyReducer = currencySlice.reducer
