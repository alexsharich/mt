import { PropsWithChildren, ReactElement } from 'react'

import { Layout } from '@/Components/layout/Layout'
import { NextPage } from 'next'

export const BaseLayout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return <Layout>{children}</Layout>
}

export const getBaseLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>
}
