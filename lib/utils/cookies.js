import { serialize } from 'cookie'


export function setCookie (res, name, value, options = {})  {
    const stringValue = typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)
    return res.setHeader('Set-Cookie', serialize(name, String(stringValue), options))
}


