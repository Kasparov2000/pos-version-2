import JSONResponse from "../utils/JSONResponse";
import {PrismaClientKnownRequestError, PrismaClientValidationError} from "@prisma/client/runtime";
import {ValidationError} from "joi";
import {CustomAPIError} from "./errors";
import camelCase from "../utils/camelCase";

export const errorHandler = (err, res) => {
    console.log(err)
    if (err instanceof CustomAPIError) {
        return JSONResponse(res, err.statusCode, {message: err.message})
    }

    if (err instanceof ValidationError) {
        const errors = err.details.map(err => err.message.replaceAll('\"', ""))
        return JSONResponse(res, 422, {message: errors})
    }

    if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
            const fields = [ err.meta.target];
            const takenFieldsErrors = fields.map(field => {
                const firstOccurrence = field.indexOf("_")
                const lastOccurrence = field.lastIndexOf("_")
                const fieldName = field.slice(firstOccurrence, lastOccurrence + 1).replaceAll('_', " ").trim()
                return `${fieldName} is already taken.`
            })
            return JSONResponse(res, 409, { message: takenFieldsErrors })
        }

        if (err.code === "P2003") {
            const { field_name: fieldName } = err.meta
            return JSONResponse(res, 409, `The id for ${camelCase(fieldName)} doesn't exists.`)
        }

        if (err.code === "P2005") {
            return JSONResponse(res, 422, {message: err.meta})
        }

        if (err.code === "P2012") {
            return JSONResponse(res, 409, {message: err.meta})
        }

        if (err.code === "P2022") {
            const errArray = err.meta.column.split('.')
            const column = errArray[errArray.length - 1].replace('_', "")
            const table =  errArray[errArray.length - 2]
            return JSONResponse(res, 422, {message: `Column: ${column} doesn't exists in table: ${table}`})
        }

        if (err.code === "P2025") {
            return JSONResponse(res, 409, {message: err.meta})
        }

        return JSONResponse(res,400, 'The payload is not valid.')
    }
    if (err instanceof PrismaClientValidationError) {
        return JSONResponse(res,400, 'The payload is not valid.')
    }

    return JSONResponse(res,500, err.message)
}
