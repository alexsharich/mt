import { ReactElement } from 'react'

import { Navbar } from '@/Components/Navbar/Navbar'
import { BaseLayout } from '@/Components/layout/BaseLayout/BaseLayout'
import { AppShell } from '@mantine/core'

export const getLayoutWithSidebar = (page: ReactElement) => {
  return (
    <BaseLayout>
      <Navbar />
      <AppShell.Main>{page}</AppShell.Main>
    </BaseLayout>
  )
}
