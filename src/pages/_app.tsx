import type { AppProps } from 'next/app'

import { ReactElement, ReactNode, useEffect } from 'react'
import { Provider } from 'react-redux'

import { Providers } from '@/app/providers/providers'
import { store } from '@/app/store/store'
import { MantineProvider } from '@mantine/core'
import { NextPage } from 'next'

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
    <Provider store={store}>
      <Providers>
        <MantineProvider defaultColorScheme={'dark'}>
          {getLayout(<Component {...pageProps} />)}
        </MantineProvider>
      </Providers>
    </Provider>
  )
}
