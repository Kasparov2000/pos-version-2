import {Countries} from "../../Countries/API/CountriesClass";


export default function isValidCurrency(value, helpers) {

    const currencies = Countries.findCountryByCurrencyCode(value)

    if (!currencies || currencies.length === 0) {
        return helpers.message(`${value} is not a valid currency`)
    }
    const currency = currencies[0].currencies[0]
    return currency.code
}