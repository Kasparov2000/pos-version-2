import {asyncWrapper} from "../../../lib/asyncWrapper";
import addNewSupplier from "../../../lib/services/supplier/newSupplier";


export default async function handler(req, res) {
    if (req.method === "POST") {
        return await asyncWrapper(addNewSupplier, req, res, 200)(req.body)
    }

    return res.status(405).send({message : `${req.method} not allowed`})
}