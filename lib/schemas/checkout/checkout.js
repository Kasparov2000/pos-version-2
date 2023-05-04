import {types} from "joi";

const Joi = require('joi')


const checkoutSchema = Joi.object(
    {
        paymentBreakdown: Joi.object({
        }).pattern(Joi.string(), Joi.number().precision(2).min(0.01).strict()),
        user: Joi.object({}).pattern(Joi.string(), Joi.alternatives(types(Joi.string(), Joi.bool()))),
        customerId: Joi.string().optional().strict(),
        cart: Joi.array().items(
            Joi.object({
               barcode: Joi.number().required().min(1).integer(),
               quantity: Joi.number().min(1).required().integer(),
            })
        )
    }
)

module.exports = checkoutSchema

export default async function validateCheckoutSchema (payload) {
    return checkoutSchema.validateAsync(payload, {abortEarly: false})
}
