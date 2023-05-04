import { ExchangeRateService } from "../exchange-rate/ExchangeRateService";
import { CurrencyService } from "./CurrencyService";
import { newExchangeRateHelper } from "../exchange-rate/updateExchangeRate";

export default async function changeBaseCurrency(payload) {
    return await prisma.$transaction(async (prisma) => {
        const newBaseCurrency = await prisma.baseCurrency.create({
            data: {
                currency: {
                    connect: {
                        currencyCode: payload.currencyCode
                    }
                },
                active: true
            }
        })

        await prisma.baseCurrency.updateMany({
            where: {
                id: {
                    not: newBaseCurrency.id,
                }
            },
            data: {
                active: false
            }
        })

        const currencies = await CurrencyService.getAllCurrencies()

        return await Promise.all(currencies.map(async currency => {
            const { exchangeRate: newExchangeRate } = await ExchangeRateService.getBetweenTwoByCurrencyCode({base: payload.currencyCode, destination: currency.currencyCode})

            const newExchangeRatePayload = {
                baseCurrencyCode: payload.currencyCode,
                destinationCurrencyCode: currency.currencyCode,
                exchangeRate: newExchangeRate
            }

            return await newExchangeRateHelper(newExchangeRatePayload, prisma)
        }))

    })
}