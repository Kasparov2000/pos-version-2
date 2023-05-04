import countriesDetailsList from "./countriesDetailsList";

export class Countries {

    static #getIOCCodes() {
        const countriesObj = Object.fromEntries(countriesDetailsList)
        return Object.keys(countriesObj)
    }

    static findCountryByIOCCode(IOCCode) {
        return countriesDetailsList.get(IOCCode.toUpperCase())
    }

    static findCountryByName(countryName) {
        let IOCCodes = this.#getIOCCodes()
        IOCCodes = IOCCodes.filter(code => countriesDetailsList.get(code).name.toLowerCase() === countryName)

        if (IOCCodes.length === 0 || IOCCodes.length > 1) {
            return null
        }
        return countriesDetailsList.get(IOCCodes[0])

    }

    static findCountryByCountryCode(countryCode) {
        countryCode = countryCode.toUpperCase()
        let IOCCodes = this.#getIOCCodes()
        IOCCodes = IOCCodes.filter(code => {
            return countriesDetailsList.get(code).countryCode === countryCode
        })

        if (IOCCodes.length === 0 || IOCCodes.length > 1) {
            return null
        }
        return countriesDetailsList.get(IOCCodes[0])
    }

    static findCountryByCurrencyCode(currencyCode) {
        currencyCode = currencyCode.toUpperCase()
        let IOCCodes = this.#getIOCCodes()
        IOCCodes = IOCCodes.filter(code => {
            return countriesDetailsList
                .get(code)
                .currencies
                ?.filter((_, idx) => idx < 1 )
                ?.filter(({code}) => currencyCode === code)
                ?.length > 0;
        })
        if (IOCCodes.length === 0) {
            return null
        }
        return IOCCodes.map(code => countriesDetailsList.get(code))
    }
}