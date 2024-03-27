import { useTranslation } from '@/shared/hooks/useTranslations'
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher'
import ThemeSwitcher from '@/shared/ui/ThemeSwitcher/ThemeSwitcher'
import { Modal } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import Link from 'next/link'

type ModalProps = {
  isOpen: boolean
}
export const SettingsModal = ({ isOpen }: ModalProps) => {
  const [opened, { close, open }] = useDisclosure(isOpen)
  const isMobile = useMediaQuery('(max-width: 50em)')
  const { t } = useTranslation()

  return (
    <>
      <Modal
        fullScreen={isMobile}
        onClose={close}
        opened={opened}
        title={t.navbar.modal.setings}
        transitionProps={{ duration: 200, transition: 'fade' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {t.navbar.modal.colorTheme} <ThemeSwitcher />
        </div>
      </Modal>
      <Link href={'#'} onClick={open}>
        {t.navbar.settings}
      </Link>
    </>
  )
}
