import React, { PropsWithChildren } from 'react'

import { TickerTape } from '@/Components/TickerTape/TickerTape'
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher'
import ThemeSwitcher from '@/shared/ui/ThemeSwitcher/ThemeSwitcher'
import { AppShell, Flex } from '@mantine/core'
import { NextPage } from 'next'

export const Layout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return (
    <AppShell header={{ height: 60 }} navbar={{ breakpoint: 'sm', width: 300 }} padding={'md'}>
      <AppShell.Header>
        <Flex
          align={'center'}
          direction={'row'}
          gap={'lg'}
          justify={'space-between'}
          mih={50}
          wrap={'wrap'}
        >
          <LangSwitcher />
          <TickerTape />
          <ThemeSwitcher />
        </Flex>
      </AppShell.Header>
      {children}
    </AppShell>
  )
}
