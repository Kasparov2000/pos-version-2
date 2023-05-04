import {errorHandler} from "./errors/error-handler";
import JSONResponse from "./utils/JSONResponse";
import isAuthorized from "./auth/isAuthorized";


export const asyncWrapper = (fn, req, res, statusCode, authRequired=true) => async (...args) => {
    try {
        let user
        if (authRequired) {
            user = await isAuthorized(req)
        }
        const result = authRequired ? await fn(...args, user) : await fn(...args)
        if (result instanceof Response) return
        JSONResponse(res, statusCode, (result || ''))
    } catch (err) {
        return errorHandler(err, res)
    }
}

