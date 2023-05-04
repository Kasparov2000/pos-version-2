import Joi from "joi";

export const newTaxSchema = Joi.object({
    taxName: Joi.string().required().required(),
    taxRate: Joi.number().greater(0).required(),
    startAmount: Joi.number().min(0.01).precision(2).strict().optional(),
    endAmount: Joi.number().min(0.01).precision(2).strict().optional(),
    startDate: Joi.date().min("now").iso().optional(),
    endDate: Joi.date().greater('now').iso().optional(),
    perpetual: Joi.bool().optional()
}).and('startDate', 'endDate')
    .xor('perpetual', 'endDate')
    .and('startAmount', 'endAmount')

export const schema = [newTaxSchema]

export default async function validateNewTaxSchema(payload) {
    return await newTaxSchema.validateAsync(payload)
}