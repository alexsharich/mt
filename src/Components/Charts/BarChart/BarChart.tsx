import { Bar } from 'react-chartjs-2'

import { Data, Item } from '@/Components/Charts/types/chartsTypes'
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, BarController)

const BarChart = ({ chartTitle, dataFromServer }: Data) => {
  const data = {
    datasets: [
      {
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: dataFromServer.map((el: Item) => el.value),

        label: `${chartTitle} / Bar chart`,
      },
    ],
    labels: dataFromServer.map((el: Item) => el.date),
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  )
}

export default BarChart
