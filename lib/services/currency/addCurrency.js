import prisma from "../../prisma"

import findCurrency from "./validators/findCurrency";
import validateNewCurrencySchema from "../../schemas/currency/newCurrency";
import { CurrencyExistsError, InvalidBaseCurrencyError } from "../../errors/errors";
import { Countries } from "../../utils/Countries/API/CountriesClass";
import { newExchangeRateHelper } from "../exchange-rate/updateExchangeRate";

export default async function addCurrency(payload) {
    const isFirstAddition = (await prisma.currency.findMany({})).length === 0
    const { ...validatedCurrency} = await validateNewCurrencySchema(payload, isFirstAddition)
    const { currencyCode }  = validatedCurrency
    const { name: currencyName, symbol: currencySymbol  } = Countries.findCountryByCurrencyCode(currencyCode)[0].currencies[0]

    if (await findCurrency(validatedCurrency)) throw new CurrencyExistsError(validatedCurrency.currencyCode)

    return await prisma.$transaction(async (prisma  ) => {
        const newCurrency = await prisma.currency.create({
            data: {
                currencyName,
                currencySymbol,
                currencyCode
            }
        })

        if (isFirstAddition) {
           await prisma.baseCurrency.create({
                data: {
                    currencyId: newCurrency.id
                }
            })
        }

        let {
            currency: {
                currencyCode: currentBaseCurrencyCode
            }
        } = await prisma.baseCurrency.findFirst({
            where: {active: true},
            select: {
                id: true,
                currency: {
                    select: {
                        currencyCode: true
                    }
                }
            }
        })

        if (!isFirstAddition && currentBaseCurrencyCode !== validatedCurrency.baseCurrencyCode.toUpperCase()) {
            throw new InvalidBaseCurrencyError(validatedCurrency.baseCurrencyCode, currentBaseCurrencyCode)
        }

        if (isFirstAddition) {
            await newExchangeRateHelper({exchangeRate: 1, baseCurrencyCode: currentBaseCurrencyCode, destinationCurrencyCode: currencyCode}, prisma)
        } else {
            await newExchangeRateHelper({exchangeRate: validatedCurrency.exchangeRate, baseCurrencyCode: currentBaseCurrencyCode, destinationCurrencyCode: currencyCode}, prisma)
        }

        return prisma.currency.findFirst({
            where: {id: newCurrency.id},
            include: {
                exchangeRates: {
                    include: {
                        baseCurrency: {
                            include: {
                                currency: true
                            }
                        }
                    }
                }
            }
        });
    })
}