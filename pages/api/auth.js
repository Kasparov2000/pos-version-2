import isAuthorized from "../../lib/auth/isAuthorized";
import {UserDoesNotExistsError, UserExistsError, UserNotAuthorizedError} from "../../lib/errors/errors";
import JSONResponse from "../../lib/utils/JSONResponse";

export default async function handler(req, res) {
    try {

        if (await isAuthorized(req)) {
            return res.redirect(307, req.headers.referer)
        }

    } catch (err) {
        if (err instanceof UserDoesNotExistsError) {
            return JSONResponse(res, err.statusCode, err.message)
        }

        if (err instanceof UserNotAuthorizedError) {
            return JSONResponse(res, err.statusCode, err.message)
        }

        return JSONResponse(res, 500, 'Something went wrong on the server')
    }
}