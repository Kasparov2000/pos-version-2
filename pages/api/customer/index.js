import {asyncWrapper} from "../../../lib/asyncWrapper";
import addNewCustomer from "../../../lib/services/customers/newCustomer";


export default async function handler(req, res) {
    if (req.method === "POST") {
        return await asyncWrapper(addNewCustomer, req, res, 200)(req.body)
    }

    return res.status(405).send({message : `${req.method} not allowed`})
}