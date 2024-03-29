import BarChart from '@/Components/Charts/BarChart/BarChart'
import MyLineChart from '@/Components/Charts/Line/Line'
import RoundChart from '@/Components/Charts/Round/Round'
import { getLayoutWithSidebar } from '@/Components/WithSideBarLayout/WithSideBarLayout'
import { useLazyGetNaturalGasQuery } from '@/services/currencySlice/mokkyEndpoints'

const NaturalGas = () => {
  const [useLazyGetNaturalGas, { data, isError, isLoading }] = useLazyGetNaturalGasQuery()

  const infoForRender = data ? data[0].data : [{ date: '', value: '' }]
  const chartTitle = data ? data[0].name : 'ChartJS & Mantine'

  return (
    <>
      <div>Natural gas charts</div>
      <button onClick={() => useLazyGetNaturalGas()}>Current Charts</button>
      <BarChart chartTitle={chartTitle} dataFromServer={infoForRender} />
      <MyLineChart chartTitle={chartTitle} dataFromServer={infoForRender} />
      <RoundChart chartTitle={chartTitle} dataFromServer={infoForRender} />
    </>
  )
}

NaturalGas.getLayout = getLayoutWithSidebar

export default NaturalGas
