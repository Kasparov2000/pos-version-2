import getExchangeRates from "../services/exchange-rate/getExchangeRate";

export default async function calculateTotalPaid  (payload) {

    const { exchangeRates, baseCurrency } = await getExchangeRates( ...Object.keys(payload))

    const totalPaid = exchangeRates.reduce((acc, currency) => {
        const { currencyName, exchangeRate } = currency
        const totalAmount = Math.round((payload[`${currencyName}`] / exchangeRate) * 100) / 100
        return acc + totalAmount
    }, 0)

    const currenciesId = exchangeRates.reduce((acc, currency) => {
        const {currencyName, currencyId} = currency
        const currencyIdObj = {}
        currencyIdObj[`${currencyName}`] = currencyId
        return { ...acc, ...currencyIdObj}
    }, {})

    return {
        totalPaid,
        exchangeRates,
        currenciesId,
        baseCurrency
    }
}

async function calculateTotalPaid2(paymentBreakdown) {
    const paymentTypes = Object.keys(paymentBreakdown)



}