import {BaseCurrencyExchangeRateImmutableError, InvalidBaseCurrencyError} from "../../errors/errors";

export default async function updateExchangeRate(payload) {
    return await prisma.$transaction(async (prisma) => {
        return await newExchangeRateHelper(payload, prisma)
    })
}

export async function newExchangeRateHelper(payload, prisma){
    const {
        id: currentBaseCurrencyCodeId,
        currency: {
            currencyCode: currentBaseCurrencyCode
        }
    } = await prisma.baseCurrency.findFirst({
        where: { active: true },
        select: {
            id: true,
            currency: {
                select: {
                    currencyCode: true
                }
            }
        }
    })

    if (currentBaseCurrencyCode !== payload.baseCurrencyCode.toUpperCase() ) {
        throw new InvalidBaseCurrencyError(payload.baseCurrencyCode, currentBaseCurrencyCode)
    }

    if (currentBaseCurrencyCode === payload.destinationCurrencyCode.toUpperCase()) {
        if (payload?.exchangeRate && payload.exchangeRate !== 1) {
            throw new BaseCurrencyExchangeRateImmutableError(currentBaseCurrencyCode)
        }
    }


    const newExchangeRate = await prisma.exchangeRate.create({
        data: {
            exchangeRate: payload.exchangeRate,
            baseCurrency: {
                connect: { id: currentBaseCurrencyCodeId }
            },
            currency: {
                connect: { currencyCode: payload.destinationCurrencyCode }
            }
        },
        select: {
            id: true,
            exchangeRate: true,
            currency: {
                select: {
                    currencyCode: true
                }
            },
            baseCurrency: {
                select: {
                    currency: {
                        select: {
                            currencyCode: true
                        }
                    }
                }
            }
        }
    })


    const existingPaymentTypeOnExchangeRates = await prisma.PaymentTypeOnExchangeRates.findMany({
        where: {
            active: true,
            exchangeRate: {
                currency: {
                    currencyCode: {
                        equals: newExchangeRate.currency.currencyCode
                    }
                }
            }
        },
        include: {
            paymentType: true
        }
    })

    if (existingPaymentTypeOnExchangeRates.length === 0) {
        const allPaymentTypes = await prisma.paymentType.findMany({
            where: {
                deleted: false
            }
        })

        await Promise.all(allPaymentTypes.map(async paymentType => {
            await prisma.PaymentTypeOnExchangeRates.create({
                data: {
                    paymentTypeId: paymentType.id,
                    exchangeRateId: newExchangeRate.id,
                    factor: 1
                }
            })
        }))

    }

    else {
        await Promise.all(existingPaymentTypeOnExchangeRates.map(async (PaymentTypeOnExchangeRate) => {
            const {
                factor,
                paymentType: {
                    id: paymentTypeId
                }
            } = PaymentTypeOnExchangeRate

            await prisma.PaymentTypeOnExchangeRates.updateMany({
                where: {
                    paymentTypeId: {
                        equals: paymentTypeId
                    },
                    exchangeRate: {
                        currency: {
                            currencyCode: {
                                equals: newExchangeRate.currency.currencyCode
                            }
                        }
                    }
                },
                data: {
                    active: false
                }
            })
            await prisma.PaymentTypeOnExchangeRates.create({
                data: {
                    paymentTypeId,
                    exchangeRateId: newExchangeRate.id,
                    factor
                }
            })

        }))
    }

    await prisma.exchangeRate.updateMany({
        where: {
            id: { not: newExchangeRate.id },
            currency: {
                currencyCode: payload.destinationCurrencyCode
            }
        },
        data: { active: false }
    })
    const {
        exchangeRate,
        currency: {
            currencyCode: destinationCurrencyCode
        },
        baseCurrency: {
            currency: {
                currencyCode: baseCurrencyCode
            }
        }
    } = newExchangeRate
    return {
        baseCurrencyCode,
        destinationCurrencyCode,
        exchangeRate
    }
}