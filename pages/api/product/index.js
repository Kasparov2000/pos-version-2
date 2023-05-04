import addNewProduct from "../../../lib/services/product/newProduct";
import { asyncWrapper } from "../../../lib/asyncWrapper";

export default async function handler(req, res) {

    if (req.method === "POST") {
        return await asyncWrapper(addNewProduct, req, res, 200)(req.body)
    }

}