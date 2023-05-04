import {asyncWrapper} from "../../../lib/asyncWrapper";
import newCheckout from "../../../lib/services/checkout/newCheckout";

export default async function handler(req, res) {
    if (req.method === "POST") {
        return await asyncWrapper(newCheckout, req, res, 200)(req.body)
    }
    return res.status(405).send({message : `${req.method} not allowed`})
}