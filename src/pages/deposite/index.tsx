import CoffeePriceChart from '@/Components/Coffe/Coffe'
import MyLineChart from '@/Components/Coffe/Coffe'
import { getLayoutWithSidebar } from '@/Components/WithSideBarLayout/WithSideBarLayout'

const Deposite = () => {
  return <MyLineChart />
}

Deposite.getLayout = getLayoutWithSidebar

export default Deposite
