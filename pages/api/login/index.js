import {asyncWrapper} from "../../../lib/asyncWrapper";
import login from "../../../lib/auth/login";


export default async function handler(req, res) {
    if (req.method === "POST") {
        return await asyncWrapper(login, req, res, 200, false)(res, req.body)
    }

    return res.status(405).send({message : `${req.method} not allowed`})
}