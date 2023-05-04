import getAllCurrencies from "./getAllCurrencies";
import changeBaseCurrency from "./changeBaseCurrency";

export class CurrencyService {
    static async changeBase() {

    }

    static async getAllCurrencies() {
        return await getAllCurrencies()
    }

    static async changeBaseCurrency({currencyCode}) {
        return await changeBaseCurrency({currencyCode})
    }
}