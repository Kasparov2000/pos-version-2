import isCuid from "./isCuid";

export  function joiCui(value, helpers) {
    if (!isCuid(value)) {
        return helpers.message(`${value} is not a valid cuid.`)
    }
    return value
}