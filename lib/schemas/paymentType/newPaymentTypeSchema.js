import Joi from "joi";
import {newTaxSchema} from "../tax/validateNewTaxSchema";
import {newPromotionSchema} from "../promotion/newPromotionSchema";


export const newPaymentTypeSchema = Joi.object({
    paymentTypeName: Joi.string().required(),
    charges: Joi.number().default(0).optional(),
    promotions: newPromotionSchema.nand("productId", "productGroupId", "paymentTypeId").optional(),
    taxes: Joi.array().items(newTaxSchema).optional().unique(),
    exchangeRates: Joi.object({
            baseCurrencyCode: Joi.string().length(3),
            exchangeRates: Joi.array().items(
                Joi.object({
                destinationCurrencyCode: Joi.string().length(3),
                factor: Joi.number().greater(0).strict()
            }))
        }
    ).optional()
})

export default async function validateNewPaymentSchema(payload) {
    return await newPaymentTypeSchema.validateAsync(payload)
}