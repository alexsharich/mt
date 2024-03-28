import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
  baseURL: 'https://api.freecurrencyapi.com/v1/',
  withCredentials: true,
})

export const currencyAPI = {
  getCurrencyEUR() {
    return instance.get<any>(
      'latest?apikey=fca_live_RUtycrKbCHbMtlEteVJ4sytuHLUl21VNxAFIFPRy&currencies=USD,EUR'
    )
  },
  getCurrencyPLN() {
    return instance.get<any>(
      'latest?apikey=fca_live_RUtycrKbCHbMtlEteVJ4sytuHLUl21VNxAFIFPRy&currencies=USD,PLN'
    )
  },
  getCurrencyRUB() {
    return instance.get<any>(
      'latest?apikey=fca_live_RUtycrKbCHbMtlEteVJ4sytuHLUl21VNxAFIFPRy&currencies=USD,RUB'
    )
  },
}
