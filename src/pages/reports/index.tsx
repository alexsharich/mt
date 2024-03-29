import { getLayoutWithSidebar } from '@/Components/WithSideBarLayout/WithSideBarLayout'
import { useAppDispatch } from '@/app/store/store'
import { useAppSelector } from '@/app/store/types/useAppSelector'
import { useLazyGetAluminumQuery } from '@/services/currencySlice/mokkyEndpoints'
import { currencyThunkCreator } from '@/services/currencyWithCreateThunk/currency-reducer'
import { Loader } from '@/shared/ui/Loader/Loader'

const Reports = () => {
  const currentCurrency = useAppSelector(state => state.currencyReducer)
  const dispatch = useAppDispatch()
  const status = useAppSelector(state => state.appReducer.isLoading)
  const handler = () => {
    dispatch(currencyThunkCreator())
  }

  return (
    <div>
      <button onClick={handler}>GET CURRENCY</button>
      {status === 'loading' ? (
        <Loader />
      ) : (
        <>
          <div>{`Currency EUR : ${currentCurrency.EUR}`}</div>
          <div>{`Currency RUB : ${currentCurrency.RUB}`}</div>
          <div>{`Currency PLN : ${currentCurrency.PLN}`}</div>
        </>
      )}
    </div>
  )
}

Reports.getLayout = getLayoutWithSidebar

export default Reports
