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
        <Link href={ROUTES.ALUMINUM}>{t.navbar.aluminum}</Link>
        <Link href={ROUTES.COFFEE}>{t.navbar.coffee} </Link>
        <Link href={ROUTES.NATURAL_GAS}>{t.navbar.naturalGas}</Link>
        <Link href={ROUTES.REPORTS}>{t.navbar.reports}</Link>
        <Link href={ROUTES.TRADE}>{t.navbar.trade}</Link>

        <SettingsModal isOpen={isOpenModal} />
      </div>
    </AppShell.Navbar>
  )
}
