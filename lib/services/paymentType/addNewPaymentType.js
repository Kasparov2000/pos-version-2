import validateNewPaymentSchema from "../../schemas/paymentType/newPaymentTypeSchema";
import { ExchangeRateDoesNotExistsError, InvalidBaseCurrencyError} from "../../errors/errors";

export default async function addNewPaymentType(payload) {
    const {
        exchangeRates: {
            baseCurrencyCode: payloadBaseCurrencyCode,
            exchangeRates
        },
        promotions,
        taxes,
        ...newPaymentDetails
    } = await validateNewPaymentSchema(payload)

    return await prisma.$transaction(async (prisma) => {
        let PaymentTypeOnExchangeRatesPayload
        if (exchangeRates) {
            const {
                currency: {
                        currencyCode: currentBaseCurrencyCode
                    }
            } =  await prisma.baseCurrency.findFirst({
                where: { active: true},
                select: {
                    currency: {
                        select: {
                            currencyCode: true
                        }
                    }
                }
            })

            if ( currentBaseCurrencyCode !== payloadBaseCurrencyCode.toUpperCase() ) {
                throw new InvalidBaseCurrencyError(payloadBaseCurrencyCode, currentBaseCurrencyCode)
            }

            const allCurrencies = await prisma.currency.findMany({
                select: {
                    currencyCode: true
                }
            })
            const payloadCurrencies = exchangeRates.map(({destinationCurrencyCode}) => destinationCurrencyCode)

            const defaultExchangeRates = allCurrencies.reduce((defaultExchangeRatesArr, {currencyCode}) => {
                if (!payloadCurrencies.includes(currencyCode)) {
                    defaultExchangeRatesArr = [ ...defaultExchangeRatesArr, {
                        destinationCurrencyCode: currencyCode,
                        factor: 1
                    }]
                    return defaultExchangeRatesArr
                }
                return defaultExchangeRatesArr
            }, [])
            const extendedExchangeRates = [...exchangeRates, ...defaultExchangeRates]
            PaymentTypeOnExchangeRatesPayload = await Promise.all(extendedExchangeRates.map(async currency => {
                const newExchangeRate = await prisma.exchangeRate.findFirst({
                    where: {
                        active: true,
                        currency: {
                            currencyCode: currency.destinationCurrencyCode
                        }
                    }
                })

                if (!newExchangeRate) throw new ExchangeRateDoesNotExistsError(currency.destinationCurrencyCode)

                return {
                    exchangeRateId: newExchangeRate.id,
                    factor: currency.factor
                }
            }))

        }

        return  prisma.paymentType.create({
            data: {
                ...newPaymentDetails,
                promotions: {
                    create: promotions
                },
                taxes: !taxes ? undefined : {
                    createMany: {
                        data: taxes
                    }
                },
                PaymentTypeOnExchangeRates: !exchangeRates ? undefined : {
                    createMany: {
                        data: PaymentTypeOnExchangeRatesPayload
                    }
                }
            },
            include: {
                promotions: true,
                taxes: true,
                PaymentTypeOnExchangeRates: true
            }
        })
    })
}