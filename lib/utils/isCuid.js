const cuid = require('cuid')

export default function isCuid(id) {
    return cuid.isCuid(id) && id.length === 25
}
