import { Pie } from 'react-chartjs-2'

import { Data, Item } from '@/Components/Charts/types/chartsTypes'
import { ArcElement, Chart } from 'chart.js'
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
Chart.register(ArcElement)
const RoundChart = ({ chartTitle, dataFromServer }: Data) => {
  const pieChartData = {
    datasets: [
      {
        backgroundColor: [
          '#FF0000',
          '#00FF00',
          '#0000FF',
          '#FFFF00',
          '#FF00FF',
          '#00FFFF',
          '#FFA500',
          '#800080',
          '#008000',
          '#003200',
          '#FF34FF',
          '#808080',
          '#FFC0CB',
          '#FFD700',
          '#A52A2A',
        ],
        data: dataFromServer.map((el: Item) => el.value),
        hoverBackgroundColor: ['#175000', '#003350', '#993d00'],
        label: `${chartTitle}`,
      },
    ],
    labels: dataFromServer.map((el: Item) => el.date),
  }

  return (
    <>
      <Pie
        data={pieChartData}
        height={50}
        options={{
          legend: {
            display: true, //Is the legend shown?
            position: 'top', //Position of the legend.
          },
          title: {
            display: true,
            fontSize: 15,
            text: `${chartTitle} / Line chart`,
          },
        }}
        type={'pie'}
        width={130}
      />
    </>
  )
}

export default RoundChart
