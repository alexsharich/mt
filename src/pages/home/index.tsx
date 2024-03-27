import { useEffect } from 'react'

import { getBaseLayout } from '@/Components/layout/BaseLayout/BaseLayout'
import { Loader } from '@/shared/ui/Loader/Loader'
import { useDisclosure } from '@mantine/hooks'
import { useRouter } from 'next/router'

import s from './Home.module.css'

function HomePage() {
  const [opened, { toggle }] = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/portfolio')
    }, 7000)
  }, [])

  return (
    <div className={s.homePage}>
      Please wait <Loader />
    </div>
  )
}

export default HomePage

HomePage.getLayout = getBaseLayout
