import { useTranslation } from '@/shared/hooks/useTranslations'
import { Text } from '@mantine/core'

export const TickerTape = () => {
  const { t } = useTranslation()

  const currency = [
    { isIncreased: true, name: t.tickerTape.currencyUSD, value: 100 },
    { isIncreased: false, name: t.tickerTape.currencyEUR, value: 200 },
    { isIncreased: true, name: t.tickerTape.currencyBYN, value: 300 },
  ]

  return (
    <div className={'ticker-container'}>
      <marquee behavior={'scroll'} className={'ticker'}>
        {currency.map(curr => `${curr.name} ${curr.value} ${curr.isIncreased ? '+' : '-'} `)}
      </marquee>
    </div>
  )
}
