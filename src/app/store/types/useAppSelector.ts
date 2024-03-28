import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '@/app/store/types/rootState'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
