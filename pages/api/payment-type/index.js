import {errorHandler} from "../../../lib/errors/error-handler";
import {asyncWrapper} from "../../../lib/asyncWrapper";
import {InvalidMethodError} from "../../../lib/errors/errors";
import {PaymentTypeService} from "../../../lib/services/paymentType/PaymentTypeService";
import {newPaymentTypeSchema} from "../../../lib/schemas/paymentType/newPaymentTypeSchema";


async function handler(req, res) {
    if (req.method === 'POST') {
        return await asyncWrapper(PaymentTypeService.newType, req, res, 200)(req.body)
    }

    if (req.method === 'GET') {
        return await asyncWrapper(PaymentTypeService.getAll, req, res, 200)()
    }

    if (req.method === 'PATCH') {
        const value = newPaymentTypeSchema.nand('taxes', 'promotions').validateAsync(req.body)
        return await asyncWrapper(PaymentTypeService.updateByName, req, res, 200)(value)
    }

    throw new InvalidMethodError(req.method)
}

const wrapper = async (req, res) => {
    try {
        return await handler(req, res)
    } catch (err) {
        errorHandler(err, res)
    }
}

export default wrapper