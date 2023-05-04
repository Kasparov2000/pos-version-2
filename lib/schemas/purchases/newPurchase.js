import Joi from "joi";

const purchaseSchema = Joi.object(
    {
        paymentBreakdown: Joi.object({
        }).pattern(Joi.string(), Joi.number().precision(2).min(0.01).strict()),
        discountReceived: Joi.number().max(1).min(0).optional,
        supplierId: Joi.string().optional().strict(),
        numberOfDefects: Joi.number().integer().strict().optional(),
        cart: Joi.array().items(
            Joi.object({
                barcode: Joi.number().required().min(1).integer(),
                quantity: Joi.number().min(1).required().integer(),
            })
        )
    }
)

export default async function validatePurchaseSchema (payload) {
    return purchaseSchema.validateAsync(payload, {abortEarly: false})
}