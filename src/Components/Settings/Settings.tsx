import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import {Button, Modal, NavLink} from "@mantine/core";
import {useTranslation} from "@/shared/hooks/useTranslations";


type ModalProps = {
    isOpen:boolean
}
export const SettingsModal = ({isOpen}:ModalProps)=>{

    const [opened, { open, close }] = useDisclosure(isOpen);
    const isMobile = useMediaQuery('(max-width: 50em)');
    const {t} = useTranslation()

        return (
            <>
                <Modal
                    opened={opened}
                    onClose={close}
                    title="SETTINGS"
                    fullScreen={isMobile}
                    transitionProps={{ transition: 'fade', duration: 200 }}
                >
                    SETTINGS
                </Modal>
                <NavLink label={t.navbar.settings} onClick={open}/>
            </>
        );
    }
