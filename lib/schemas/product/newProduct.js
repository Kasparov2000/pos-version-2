import isCuid from "../../utils/isCuid";

const Joi = require('joi')

export const newProductSchema = Joi.object({
    barcode: Joi.string().alphanum().required().strict(),
    productName: Joi.string().required(),
    measurementUnit: Joi.string().required().valid('GRAMS', 'KILOGRAMS', 'MILLIMETERS', 'METERS', 'MILLILITRES', 'LITRES', 'KWH', 'VOLTS', 'AMPS'),
    measurementAmount: Joi.number().required().greater(0),
    expiryDate: Joi.date().greater('now').required().iso(),
    price: Joi.number().precision(2).min(0).required().strict(true),
    exchangeRateId: Joi.string().required().custom((value, helpers) => {
        if (!isCuid(value)) {
            throw new Error(`Id: ${value} is not a valid cuid.`)
        }
        return value
    }),
    quantity: Joi.number().precision(0).min(1).required(),
    cost: Joi.number().precision(2).required().min(0)
})

export default async function validateNewProductSchema(payload) {
    return await newProductSchema.validateAsync(payload)
}
