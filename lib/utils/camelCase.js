export default function camelCase (fieldName) {
    const splitArray = fieldName.split('_')

    if (splitArray.length > 0) {
        return splitArray.map( (str, idx) => {
            str = str.replace(/^\s+|\s+$/g, '')
            if (idx === 0) {
                return str

            } else {
                const targetLetter = str.charAt(0).toUpperCase()
                if (str.length > 1) {
                    return targetLetter.concat(str.slice(1))
                }
                return targetLetter
            }
        }).join("")
    }

}