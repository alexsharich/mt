import BarChart from '@/Components/Charts/BarChart/BarChart'
import MyLineChart from '@/Components/Charts/Line/Line'
import RoundChart from '@/Components/Charts/Round/Round'
import { getLayoutWithSidebar } from '@/Components/WithSideBarLayout/WithSideBarLayout'
import { useLazyGetCoffeeQuery } from '@/services/currencySlice/mokkyEndpoints'

const Coffee = () => {
  const [useLazyGetCoffee, { data, isError, isLoading }] = useLazyGetCoffeeQuery()

  const infoForRender = data ? data[0].data : [{ date: '', value: '' }]
  const chartTitle = data ? data[0].name : 'ChartJS & Mantine'

  return (
    <>
      <div>Coffee charts</div>
      <button onClick={() => useLazyGetCoffee()}>Current Charts</button>
      <BarChart chartTitle={chartTitle} dataFromServer={infoForRender} />
      <MyLineChart chartTitle={chartTitle} dataFromServer={infoForRender} />
      <RoundChart chartTitle={chartTitle} dataFromServer={infoForRender} />
    </>
  )
}

Coffee.getLayout = getLayoutWithSidebar

export default Coffee
