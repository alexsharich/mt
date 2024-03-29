'use client'
import { Line } from 'react-chartjs-2'

import { Data, Item } from '@/Components/Charts/types/chartsTypes'
import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

const MyLineChart = ({ chartTitle, dataFromServer }: Data) => {
  return (
    <div>
      <Line
        data={{
          datasets: [
            {
              backgroundColor: 'purple',
              data: dataFromServer.map((el: Item) => el.value),
              label: `${chartTitle} / Line chart`,
            },
          ],
          labels: dataFromServer.map((el: Item) => el.date),
        }}
      />
    </div>
  )
}

export default MyLineChart
