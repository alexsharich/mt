import s from './Header.module.css'
import {LangSwitcher} from "@/shared/ui/LangSwitcher/LangSwitcher";
import ThemeSwitcher from "@/shared/ui/ThemeSwitcher/ThemeSwitcher";
import {AppShell, Flex} from "@mantine/core";

export const Header = ()=>{
    return (
        <AppShell.Header>
            <Flex mih={50}
                  gap="lg"
                  justify="space-between"
                  align="center"
                  direction="row"
                  wrap="wrap">
                <ThemeSwitcher/>
                <LangSwitcher/>

            </Flex>
        </AppShell.Header>
    )
}