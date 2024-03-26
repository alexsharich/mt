import type { AppProps } from 'next/app'

import { useEffect } from 'react'

import { Header } from '@/Components/Header/Header'
import { useTranslation } from '@/shared/hooks/useTranslations'
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher'
import ThemeSwitcher from '@/shared/ui/ThemeSwitcher/ThemeSwitcher'
import {
  Box,
  Button,
  Flex,
  MantineProvider,
  NavLink,
  Paper,
  Text,
  localStorageColorSchemeManager,
  useMantineColorScheme,
} from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'

import '@mantine/core/styles.css'

export default function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <MantineProvider defaultColorScheme={'dark'}>
      <Flex
        align={'center'}
        gap={'md'}
        justify={'center'}
        mih={30}
        onClick={() => router.push('/home')}
        style={{
          cursor: 'pointer',
        }}
      >
        <Text
          fw={900}
          gradient={{ deg: 90, from: 'blue', to: 'cyan' }}
          size={'xl'}
          variant={'gradient'}
        >
          MANTINE App with NextJS ...
        </Text>
      </Flex>
      <Component {...pageProps} />
    </MantineProvider>
  )
}
