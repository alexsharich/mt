import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import {
    Box,
    Button, Flex,
    localStorageColorSchemeManager,
    MantineProvider, NavLink, Paper, Text, useMantineColorScheme
} from '@mantine/core';

import ThemeSwitcher from "@/shared/ui/ThemeSwitcher/ThemeSwitcher";
import {useTranslation} from "@/shared/hooks/useTranslations";
import {LangSwitcher} from "@/shared/ui/LangSwitcher/LangSwitcher";
import {Header} from "@/Components/Header/Header";
import {useEffect} from "react";
import {useRouter} from "next/router";
import Link from "next/link";


export default function App({ Component, pageProps }: AppProps) {

const {t} = useTranslation()
    const router=useRouter()


    // useEffect(() => {
    //     setTimeout(()=>{
    //         router.push('/home')
    //         console.log('PUSH')
    //     },3000)
    // }, []);

  return (
      <MantineProvider  defaultColorScheme={'dark'}>

          <Flex mih={30}
                gap="md"
                justify="center"
                align="center"
                onClick={()=>router.push('/home')}
                style={{
                    cursor:'pointer'
                }}
                >

                  <Text
                      size="xl"
                      fw={900}
                      variant="gradient"
                      gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                  >
                      MANTINE App with NextJS ...
                  </Text>



          </Flex>
          <Component {...pageProps} />

      </MantineProvider>
  );
}