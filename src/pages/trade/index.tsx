import { getLayoutWithSidebar } from '@/Components/WithSideBarLayout/WithSideBarLayout'
import {
  useLazyGetAluminumQuery,
  useLazyGetCoffeeQuery,
  useLazyGetNaturalGasQuery,
} from '@/services/currencySlice/mokkyEndpoints'
import { Button } from '@mantine/core'

import s from './Trade.module.css'

const Trade = () => {
  const [
    useLazyGetCoffee,
    { data: dataCoffee, isError: isErrorQcoffee, isLoading: isLoadingQcoffee },
  ] = useLazyGetCoffeeQuery()
  const [
    useLazyGetNaturalGas,
    { data: dataNaturalGas, isError: isErrorQnaturalGas, isLoading: isLoadingQnaturalGas },
  ] = useLazyGetNaturalGasQuery()
  const [
    useLazyGetAluminum,
    { data: dataAluminum, isError: isErrorQaluminum, isLoading: isLoadingQaluminum },
  ] = useLazyGetAluminumQuery()

  return (
    <div>
      <div className={s.buttonsBlock}>
        <Button color={'cyan'} disabled={isLoadingQcoffee} onClick={() => useLazyGetCoffee('')}>
          Coffee
        </Button>
        <Button color={'cyan'} disabled={isLoadingQaluminum} onClick={() => useLazyGetAluminum('')}>
          Aluminum
        </Button>
        <Button
          color={'cyan'}
          disabled={isLoadingQnaturalGas}
          onClick={() => useLazyGetNaturalGas('')}
        >
          Natural Gas
        </Button>
      </div>

      <div>Trade</div>
      <div className={s.dataBlock}>{JSON.stringify(dataCoffee)}</div>
      <div className={s.dataBlock}>{JSON.stringify(dataNaturalGas)}</div>
      <div className={s.dataBlock}>{JSON.stringify(dataAluminum)}</div>
    </div>
  )
}

export default Trade

Trade.getLayout = getLayoutWithSidebar
