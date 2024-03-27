import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher'
import ThemeSwitcher from '@/shared/ui/ThemeSwitcher/ThemeSwitcher'
import { AppShell, Flex } from '@mantine/core'

export const Header = () => {
  return (
    <>
      <AppShell header={{ height: { base: 48, lg: 76, sm: 60 } }}>
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
            <ThemeSwitcher />
          </Flex>
        </AppShell.Header>
      </AppShell>
    </>
  )
}
