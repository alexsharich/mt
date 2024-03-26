import {AppShell, NavLink} from "@mantine/core";
import {ROUTES} from "@/shared/constants/routes";
import {useTranslation} from "@/shared/hooks/useTranslations";
import {SettingsModal} from "@/Components/Settings/Settings";
import {useState} from "react";

export const Navbar = ()=>{
    const {t} = useTranslation()
    const [isOpenModal,setIsOpenModal] = useState(false)
    const closeModal = ()=>{
        setIsOpenModal(false)
    }
    const openModal = ()=>{
        setIsOpenModal(true)
    }

    return (
        <AppShell.Navbar p="md">
            <NavLink label={t.navbar.trade} href={ROUTES.TRADE}/>
            <NavLink label={t.navbar.charts} href={ROUTES.CHARTS}/>
            <NavLink label={t.navbar.portfolio} href={ROUTES.PORTFOLIO}/>
            <NavLink label={t.navbar.reports} href={ROUTES.REPORTS}/>
            <NavLink label={t.navbar.deposite} href={ROUTES.DEPOSITE}/>
            {/*<NavLink label={t.navbar.settings} onClick={openModal}/>*/}
            <SettingsModal isOpen={isOpenModal} />
        </AppShell.Navbar>
    )
}