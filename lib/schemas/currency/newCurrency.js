import isValidCurrency from "../../utils/Currency/SchemaValidation/isValidCurrency";
const Joi = require('joi')

const newCurrencySchema = Joi.object({
    currencyCode: Joi.string().custom(isValidCurrency).required(),
    baseCurrencyCode: Joi.string().custom(isValidCurrency),
    exchangeRate: Joi.number().required().greater(0).optional().strict()
})

export default async function validateNewCurrencySchema (payload, isFirstAddition) {

    if (isFirstAddition) {
        const modifiedSchemaFirstAddition = newCurrencySchema.nand("baseCurrencyCode", "exchangeRate")
        return await modifiedSchemaFirstAddition.validateAsync(payload, {abortEarly: false})
    }

    const modifiedSchemaSubsequentAddition = newCurrencySchema.and("baseCurrencyCode", "exchangeRate", "currencyCode")
    return await modifiedSchemaSubsequentAddition.validateAsync(payload, {abortEarly: false})
}
