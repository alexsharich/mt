import { ReactNode } from 'react'

import { StoreProvider } from './storeProvider'

export const Providers = ({ children }: { children: ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>
}
