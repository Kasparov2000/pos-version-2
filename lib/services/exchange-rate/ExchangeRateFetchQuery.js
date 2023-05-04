import { CurrencyDoesNotExistsError, InvalidExchangeRateDigitError } from "../../errors/errors";
import { bankersRounding } from "../../utils/bankersRounding";


export default async function ExchangeRateFetchQuery ({fetchQuery, findMany = true, compareTwo = false} ) {

    if (compareTwo) {
        const baseCurrencyExchangeRate = await getExchangeRate({currencyCode: fetchQuery.base})
        const destinationCurrencyExchangeRate = await getExchangeRate({currencyCode: fetchQuery.destination})
        const formattedBaseExchangeRate = formatExchangeRateObject(baseCurrencyExchangeRate)
        const formattedTargetExchangeRate = formatExchangeRateObject(destinationCurrencyExchangeRate)
        return calculateExchangeRate(formattedBaseExchangeRate, formattedTargetExchangeRate)
    }

    const exchangeRates = await getExchangeRate(fetchQuery)

    if (!exchangeRates) {
        return null
    }

    if (!findMany) {
        return formatExchangeRateObject(exchangeRates)
    }

    const allCurrencies = await prisma.currency.findMany()

    return Promise.all(allCurrencies.map(async ({currencyCode}) => {
        const destinationCurrencyExchangeRate = await getExchangeRate({currencyCode}, )
        const formattedBaseExchangeRate = formatExchangeRateObject(exchangeRates)
        const formattedTargetExchangeRate = formatExchangeRateObject(destinationCurrencyExchangeRate)
        return calculateExchangeRate(formattedBaseExchangeRate, formattedTargetExchangeRate)
    }))
}


async function getExchangeRate(fetchQuery) {
    const exchangeRate =  await prisma.exchangeRate.findFirst({
        where: {
            currency: { ...fetchQuery },
            active: true
        },
        include: {
            currency: true,
            baseCurrency: {
                include: { currency: true }
            }
        }
    })

    if (!exchangeRate) {
        throw new CurrencyDoesNotExistsError(fetchQuery.currencyCode)
    }
    return exchangeRate
}


function formatExchangeRateObject(exchangeRates) {
    const {
        exchangeRate,
        currency: {
            currencyCode: destinationCurrencyCode
        },
        baseCurrency : {
            currency: {
                currencyCode: baseCurrencyCode
            }
        }
    } = exchangeRates

    return {
        baseCurrencyCode,
        destinationCurrencyCode,
        exchangeRate
    }
}

function calculateExchangeRate(firstCurrency, secondCurrency) {
    if (firstCurrency.baseCurrencyCode === secondCurrency.baseCurrencyCode) {
        let exchangeRate = roundExchangeRate(secondCurrency.exchangeRate / firstCurrency.exchangeRate, 6)
        return {
            baseCurrencyCode: firstCurrency.destinationCurrencyCode,
            destinationCurrencyCode: secondCurrency.destinationCurrencyCode,
            exchangeRate
        }
    }
}

function roundExchangeRate(exchangeRate) {

    if (isNaN(exchangeRate) && !parseFloat(exchangeRate)) {
        throw new InvalidExchangeRateDigitError(exchangeRate)
    }

    if (exchangeRate === 0 ) {
        return 0
    }

    if (Number.isInteger(exchangeRate)) {
        exchangeRate = exchangeRate.toFixed(1)
    }

    const exchangeRateStr = exchangeRate.toString()
    const exchangeRateIntPart = exchangeRateStr.split('.')[0]
    const exchangeRateDecimalPart = exchangeRateStr.split('.')[1]

    const numberOfLeadingZeros = exchangeRateDecimalPart.length - parseInt(exchangeRateDecimalPart).toString().length
    console.log(numberOfLeadingZeros, exchangeRateDecimalPart)

    if (parseInt(exchangeRateIntPart) > 0 && numberOfLeadingZeros > 6 ) {
        return parseFloat(exchangeRateIntPart)
    }

    if (exchangeRateDecimalPart.length > 6) {
        const firstSixDigitsOfDecimal = parseInt(exchangeRateDecimalPart.slice(0, 6))
        const remainingDigits = parseFloat(exchangeRateDecimalPart.slice(6))
        if (firstSixDigitsOfDecimal === 0 && remainingDigits > 0) {
            return parseFloat(exchangeRateIntPart.concat(".").concat(roundFirstSix(exchangeRateDecimalPart.slice(numberOfLeadingZeros ? numberOfLeadingZeros - 1 : 0, 6 + numberOfLeadingZeros), '0'.repeat(numberOfLeadingZeros), exchangeRateDecimalPart.slice(6))))
        }
    }

    return bankersRounding(exchangeRate, 6 + numberOfLeadingZeros)
}

function roundFirstSix(digit, precedingDigits, remainingDigits) {

    if (remainingDigits === "") {
        remainingDigits = "0"
    }

    if (parseInt(digit) > 0 && parseInt(remainingDigits) > 0) {
        if (parseInt(remainingDigits.charAt(0)) >= 5) {
            digit = (parseInt(digit) + 1).toString()
        }
        return precedingDigits.concat(digit.toString())
    }

    if (parseInt(digit) === 0 && parseInt(remainingDigits) > 0) {
        if (remainingDigits.length < 6 ) {
            remainingDigits = "0".repeat(6 - remainingDigits.length).concat(remainingDigits)
        }
        return roundFirstSix(remainingDigits.slice(0, 6), precedingDigits.concat(digit), remainingDigits.slice(6))
    }

    return precedingDigits.concat(digit.concat(remainingDigits))
}


