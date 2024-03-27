import type { AppProps } from 'next/app'

import { ReactElement, ReactNode, useEffect } from 'react'

import { Header } from '@/Components/Header/Header'
import { Providers } from '@/app/providers/providers'
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
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import '@mantine/core/styles.css'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <Providers>
      <MantineProvider defaultColorScheme={'dark'}>
        {getLayout(<Component {...pageProps} />)}
      </MantineProvider>
    </Providers>
  )
}
