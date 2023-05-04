import phoneNumberRegex from "../../utils/phoneNumberRegex";
const Joi = require('joi')

const newUserSchema = Joi.object({
    username: Joi.string().alphanum().min(6).max(30).required(),
    firstName: Joi.string().alphanum().min(1).max(30).required(),
    lastName: Joi.string().alphanum().min(1).max(30).required(),
    phoneNumber: Joi.string().length(10).required().custom(phoneNumberRegex).strict(),
    password: Joi.string().min(6).max(30).required().invalid(Joi.ref('firstName'), Joi.ref('lastName')),
    confirmPassword: Joi.ref('password'),
    isAdmin: Joi.bool().optional(),
})


export default async function validateNewUserSchema(payload) {
    return await newUserSchema.validateAsync(payload)
}