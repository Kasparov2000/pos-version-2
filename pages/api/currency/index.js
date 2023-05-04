import {asyncWrapper} from "../../../lib/asyncWrapper";
import addCurrency from "../../../lib/services/currency/addCurrency";

export default async function handler(req, res) {

    if (req.method === "POST") {
        return await asyncWrapper(addCurrency, req, res, 200, true)(req.body)
    }

    return res.status(405).send({message : `${req.method} not allowed`})
}