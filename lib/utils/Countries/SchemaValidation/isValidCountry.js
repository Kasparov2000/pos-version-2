import {Countries} from "../API/CountriesClass";

export default function isValidCountry(value, helpers) {
    const country = Countries.findCountryByIOCCode(value)
    if (!country) {
        return helpers.message(`${value} is not a valid country`)
    }
    return country.name
}