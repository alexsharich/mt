import BarChart from '@/Components/Charts/BarChart/BarChart'
import MyLineChart from '@/Components/Charts/Line/Line'
import RoundChart from '@/Components/Charts/Round/Round'
import { getLayoutWithSidebar } from '@/Components/WithSideBarLayout/WithSideBarLayout'
import { useLazyGetAluminumQuery } from '@/services/currencySlice/mokkyEndpoints'

const Aluminum = () => {
  const [useLazyGetAluminum, { data, isError, isLoading }] = useLazyGetAluminumQuery()

  const infoForRender = data ? data[0].data : [{ date: '', value: '' }]
  const chartTitle = data ? data[0].name : 'ChartJS & Mantine'

  return (
    <>
      <button onClick={() => useLazyGetAluminum()}>Current Charts</button>
      <BarChart chartTitle={chartTitle} dataFromServer={infoForRender} />
      <MyLineChart chartTitle={chartTitle} dataFromServer={infoForRender} />
      <RoundChart chartTitle={chartTitle} dataFromServer={infoForRender} />
    </>
  )
}

Aluminum.getLayout = getLayoutWithSidebar

export default Aluminum
