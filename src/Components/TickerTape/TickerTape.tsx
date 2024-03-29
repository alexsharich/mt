import { useAppSelector } from '@/app/store/types/useAppSelector'
import { useTranslation } from '@/shared/hooks/useTranslations'

export const TickerTape = () => {
  const { t } = useTranslation()
  const currencyValues = useAppSelector(state => state.currencyReducer)

  const currency = [
    { name: t.tickerTape.currencyRUB, value: currencyValues.RUB },
    { name: t.tickerTape.currencyEUR, value: currencyValues.EUR },
    { name: t.tickerTape.currencyPLN, value: currencyValues.PLN },
  ]

  return (
    <div className={'ticker-container'}>
      <marquee behavior={'scroll'} className={'ticker'}>
        {currency.map(curr => `${curr.name} ${curr.value} `)}
        {/*{`${currency.EUR}`}*/}
      </marquee>
    </div>
  )
}
