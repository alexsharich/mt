// components/MyLineChart.tsx
'use client'
import { Line } from 'react-chartjs-2'

import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js'

// Register ChartJS components using ChartJS.register
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

ChartJS.register(CategoryScale /* ... */)
// ...
const MyLineChart = () => {
  return (
    <div>
      <Line
        data={{
          datasets: [
            {
              backgroundColor: 'purple',
              data: [
                100, 120, 115, 134, 168, 132, 200, 100, 120, 115, 134, 168, 132, 200, 100, 120, 115,
                134, 168, 132, 200,
              ],
            },
          ],
          labels: [
            '2023-01',
            '2023-02',
            '2023-03',
            '2023-04',
            '2023-05',
            '2023-06',
            '2023-07',
            '2023-01',
            '2023-02',
            '2023-03',
            '2023-04',
            '2023-05',
            '2023-06',
            '2023-07',
            '2023-01',
            '2023-02',
            '2023-03',
            '2023-04',
            '2023-05',
            '2023-06',
            '2023-07',
          ],
        }}
      />
    </div>
  )
}

export default MyLineChart
