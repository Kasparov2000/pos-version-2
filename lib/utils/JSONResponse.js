export default function JSONResponse(res, statusCode, body) {
    res.status(statusCode).json(body)
    return new Response()
}