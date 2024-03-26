import { Header } from '@/Components/Header/Header'
import { Navbar } from '@/Components/Navbar/Navbar'
import { ROUTES } from '@/shared/constants/routes'
import { useTranslation } from '@/shared/hooks/useTranslations'
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher'
import ThemeSwitcher from '@/shared/ui/ThemeSwitcher/ThemeSwitcher'
import { AppShell, Burger, Button, Flex, NavLink } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'

function Home() {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
        width: 200,
      }}
      padding={'md'}
    >
      <Header />
      <Navbar />
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  )
}

export default Home
