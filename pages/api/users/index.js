import addNewUser from "../../../lib/services/users/newUser";
import {asyncWrapper} from "../../../lib/asyncWrapper";import addNewProduct from "../../../lib/services/product/newProduct";

export default async function handler (req, res) {
    if (req.method === "POST") {
        return await asyncWrapper(addNewUser, req, res, 200, false)(req.body)
    }

    return res.status(405).send({message : `${req.method} not allowed`})
}