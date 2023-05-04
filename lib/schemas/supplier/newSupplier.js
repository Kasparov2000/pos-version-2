import Joi from "joi";
import phoneNumberRegex from "../../utils/phoneNumberRegex";
import isValidCountry from "../../utils/Countries/SchemaValidation/isValidCountry";


const newSupplier = Joi.object({
    firstName: Joi.string().alphanum().min(1).max(30).optional(),
    lastName: Joi.string().alphanum().min(1).max(30).optional(),
    corporateName: Joi.string().min(1).max(30).optional(),
    phoneNumber: Joi.string().length(10).required().custom(phoneNumberRegex).strict().optional(),
    address: Joi.object({
        street: Joi.string().min(1).max(30).required(),
        city: Joi.string().min(1).max(30).required(),
        country: Joi.string().custom(isValidCountry).insensitive().required(),
    }).required(),
    emailAddress: Joi.string().email().optional(),
}).or('phoneNumber', 'emailAddress')
    .and('firstName', 'lastName')
    .or('corporateName', 'firstName')

export default async function validateNewSupplierSchema(payload) {
    console.log(payload, '2')
    return await newSupplier.validateAsync(payload)
}
