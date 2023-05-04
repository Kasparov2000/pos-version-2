export default function phoneNumberRegex(value, helpers) {
    const regex = /^\d{10}$/
    console.log(regex.test(value))
    if (!regex.test(value)) {
        return helpers.message('The pattern is invalid. Accepted format: 077XXXXXXX')
    }
    return value
}