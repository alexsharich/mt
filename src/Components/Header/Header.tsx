import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher'
import ThemeSwitcher from '@/shared/ui/ThemeSwitcher/ThemeSwitcher'
import { AppShell, Flex } from '@mantine/core'

export const Header = () => {
  return (
    <AppShell.Header>
      <Flex
        align={'center'}
        direction={'row'}
        gap={'lg'}
        justify={'space-between'}
        mih={50}
        wrap={'wrap'}
      >
        <ThemeSwitcher />
        <LangSwitcher />
      </Flex>
    </AppShell.Header>
  )
}
