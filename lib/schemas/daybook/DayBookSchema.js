const Joi = require("joi");


const DayBookSchema = Joi.object({
    date: Joi.date().iso().strict().default(new Date().toISOString()),
    narration: Joi.string().required(),
    transactionId: Joi.number().integer().optional(),
    recorderId: Joi.number().integer().required(),
    customerId: Joi.string().optional(),
    supplierId: Joi.string().optional(),
    amount: Joi.number().precision(2).min(0.01).required().strict(),
}).xor('customerId', 'supplierId').or("customerId", "supplierId")

export default async function validateDayBookSchema(payload) {
    return await DayBookSchema.validateAsync(payload)
}
