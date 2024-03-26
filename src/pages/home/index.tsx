import {AppShell, Burger, Button, Flex, NavLink} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ThemeSwitcher from "@/shared/ui/ThemeSwitcher/ThemeSwitcher";
import {LangSwitcher} from "@/shared/ui/LangSwitcher/LangSwitcher";
import Link from "next/link";
import {ROUTES} from "@/shared/constants/routes";
import {useTranslation} from "@/shared/hooks/useTranslations";
import {Header} from "@/Components/Header/Header";
import {Navbar} from "@/Components/Navbar/Navbar";

function Home() {
    const [opened, { toggle }] = useDisclosure();


    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 200,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <Header/>
            <Navbar/>
            <AppShell.Main>Main</AppShell.Main>
        </AppShell>
    );
}

export default Home;