import { useTranslation } from '@/shared/hooks/useTranslations'
import { Button, Modal, NavLink } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'

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
        title={'SETTINGS'}
        transitionProps={{ duration: 200, transition: 'fade' }}
      >
        SETTINGS
      </Modal>
      <NavLink label={t.navbar.settings} onClick={open} />
    </>
  )
}
