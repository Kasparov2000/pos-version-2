import isCuid from "../../utils/isCuid";
const Joi = require('joi')

function phoneNumberRegex(value, helpers) {
    const regex = /^\d{10}$/
    console.log(regex.test(value))
    if (!regex.test(value)) {
        return helpers.message('The pattern is invalid. Accepted format: 077XXXXXXX')
    }
    return value
}

const loginSchema = Joi.object({
    username: Joi.string().alphanum().required().optional(),
    phoneNumber: Joi.string().custom(phoneNumberRegex).optional(),
    password: Joi.string().min(6).max(30).required(),
    rememberMe: Joi.boolean().optional()
}).xor("username", "phoneNumber")

export default async function validateLoginSchema (payload) {
    return loginSchema.validateAsync(payload, {abortEarly: false})
}
