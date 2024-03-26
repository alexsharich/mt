import { useState } from 'react'

import { SettingsModal } from '@/Components/Settings/Settings'
import { ROUTES } from '@/shared/constants/routes'
import { useTranslation } from '@/shared/hooks/useTranslations'
import { AppShell, NavLink } from '@mantine/core'

export const Navbar = () => {
  const { t } = useTranslation()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const closeModal = () => {
    setIsOpenModal(false)
  }
  const openModal = () => {
    setIsOpenModal(true)
  }

  return (
    <AppShell.Navbar p={'md'}>
      <NavLink href={ROUTES.TRADE} label={t.navbar.trade} />
      <NavLink href={ROUTES.CHARTS} label={t.navbar.charts} />
      <NavLink href={ROUTES.PORTFOLIO} label={t.navbar.portfolio} />
      <NavLink href={ROUTES.REPORTS} label={t.navbar.reports} />
      <NavLink href={ROUTES.DEPOSITE} label={t.navbar.deposite} />
      {/*<NavLink label={t.navbar.settings} onClick={openModal}/>*/}
      <SettingsModal isOpen={isOpenModal} />
    </AppShell.Navbar>
  )
}
