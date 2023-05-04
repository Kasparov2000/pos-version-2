import getExchangeRates from "../../exchange-rate/getExchangeRate";

export default async function isValidAmount(payload) {
    const currencies = Object.keys(payload)
    const exchangeRates = await getExchangeRates(...currencies)


}