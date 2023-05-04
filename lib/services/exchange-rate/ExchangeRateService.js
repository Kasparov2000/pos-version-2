import ExchangeRateFetchQuery from "./ExchangeRateFetchQuery";
import updateExchangeRate from "./updateExchangeRate";

export class ExchangeRateService {

    static async getOneByCurrencyCode (currencyCode) {
        return await ExchangeRateFetchQuery({currencyCode}, false)
    }

    static async getOneByCurrencyId (currencyId) {
        const fetchQuery = { currencyId }
        return await ExchangeRateFetchQuery({fetchQuery}, false)
    }

    static async getManyByCurrencyCode (currencyCode) {
        const fetchQuery = { currencyCode }
        return await ExchangeRateFetchQuery({fetchQuery})
    }

    static async getManyByCurrencyId (currencyId) {
        return await ExchangeRateFetchQuery({currencyId}, false)
    }

    static async getBetweenTwoByCurrencyId (firstCurrency, secondCurrency) {
        const query = queryObject(firstCurrency, secondCurrency, "currencyId")
        return await ExchangeRateFetchQuery(query, false)
    }

    static async getBetweenTwoByCurrencyCode ({base, destination}) {
        const fetchQuery = {base, destination}
        return await ExchangeRateFetchQuery({fetchQuery, compareTwo: true})
    }

    static async getBetweenTwoByCurrencyCodeWithPaymentType ({base, destination}) {
        const fetchQuery = {base, destination}
        return await ExchangeRateFetchQuery({fetchQuery, compareTwo: true})
    }


    static async newExchangeRate({baseCurrencyCode, destinationCurrencyCode, exchangeRate}) {
        const fetchQuery = {baseCurrencyCode, destinationCurrencyCode, exchangeRate}
        return await updateExchangeRate(fetchQuery)
    }
}

function queryObject (firstCurrency, secondCurrency, fieldName) {
    return JSON.parse(`{
        "${fieldName}": {
            "in": "[${firstCurrency}, ${secondCurrency}]"
        }
    }`)
}