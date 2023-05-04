import phoneNumberRegex from "../../utils/phoneNumberRegex";
import isValidCountry from "../../utils/Countries/SchemaValidation/isValidCountry";
const Joi = require("joi");

const newCustomer = Joi.object({
    firstName: Joi.string().alphanum().min(1).max(30).required(),
    lastName: Joi.string().alphanum().min(1).max(30).required(),
    phoneNumber: Joi.string().length(10).required().custom(phoneNumberRegex).strict().optional(),
    address: Joi.object({
        street: Joi.string().min(1).max(30).required(),
        city: Joi.string().min(1).max(30).required(),
        country: Joi.string().custom(isValidCountry).required(),
    }),
    emailAddress: Joi.string().email().optional(),

}).or('phoneNumber', 'emailAddress')

export default async function validateNewCustomerSchema(payload) {
    return await newCustomer.validateAsync(payload)
}

