import { useState } from 'react'

import { SettingsModal } from '@/Components/Settings/Settings'
import { ROUTES } from '@/shared/constants/routes'
import { useTranslation } from '@/shared/hooks/useTranslations'
import { AppShell } from '@mantine/core'
import Link from 'next/link'

import s from './Navbar.module.css'

export const Navbar = () => {
  const { t } = useTranslation()
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <AppShell.Navbar>
      <div className={s.navbarLinks}>
        <Link href={ROUTES.TRADE}>{t.navbar.trade}</Link>
        <Link href={ROUTES.CHARTS}>{t.navbar.charts} </Link>
        <Link href={ROUTES.PORTFOLIO}>{t.navbar.portfolio}</Link>
        <Link href={ROUTES.REPORTS}>{t.navbar.reports}</Link>
        <Link href={ROUTES.DEPOSITE}>{t.navbar.deposite}</Link>
        <SettingsModal isOpen={isOpenModal} />
      </div>
    </AppShell.Navbar>
  )
}
