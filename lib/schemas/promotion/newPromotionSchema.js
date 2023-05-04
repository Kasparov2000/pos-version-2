import Joi from "joi";
import {joiCui} from "../../utils/JoiCuidValidator";

export const newPromotionSchema = Joi.object({
    paymentTypeId: Joi.string().optional().custom(joiCui),
    productId: Joi.string().optional().custom(joiCui),
    productGroupId: Joi.string().optional().custom(joiCui),
    promotionName: Joi.string().required().required(),
    discountRate: Joi.number().min(0).default(0),
    description: Joi.string().max(3000).optional(),
    startDate: Joi.date().min("now").iso().optional(),
    endDate: Joi.date().greater('now').iso().optional(),
    perpetual: Joi.bool().default(false)
}).and('startDate', 'endDate')
    .xor('perpetual', 'endDate')
    .and('startAmount', 'endAmount')

export default async function validateNewPromotionSchema(payload) {
    return await newPromotionSchema.validateAsync(payload)
}