import { useState } from 'react'

import { getLayoutWithSidebar } from '@/Components/WithSideBarLayout/WithSideBarLayout'
import { useGetCurrencyQuery } from '@/services/currencySlice/currencyEndpoints'

const Trade = () => {
  const [skip, setSkip] = useState(true)
  const { data, isError, isLoading } = useGetCurrencyQuery('', { skip: skip })

  return (
    <div>
      <button onClick={() => setSkip(false)}>Get currency</button>
      <div>Trade</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}

export default Trade

Trade.getLayout = getLayoutWithSidebar
