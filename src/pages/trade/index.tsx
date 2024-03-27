import { getLayoutWithSidebar } from '@/Components/WithSideBarLayout/WithSideBarLayout'
import { useLazyGetCurrencyQuery } from '@/services/currencySlice/currencyEndpoints'
import { Button } from '@mantine/core'

const Trade = () => {
  const [useLazyGetCurrency, { data, isError, isLoading }] = useLazyGetCurrencyQuery()

  return (
    <div>
      <Button color={'cyan'} disabled={isLoading} onClick={() => useLazyGetCurrency('')}>
        Get currency
      </Button>
      <div>Trade</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}

export default Trade

Trade.getLayout = getLayoutWithSidebar
