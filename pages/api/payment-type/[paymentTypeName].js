import {errorHandler} from "../../../lib/errors/error-handler";
import {asyncWrapper} from "../../../lib/asyncWrapper";
import {InvalidMethodError} from "../../../lib/errors/errors";
import {PaymentTypeService} from "../../../lib/services/paymentType/PaymentTypeService";

async function handler(req, res) {
    if (req.method === 'GET') {
        const { paymentTypeName } = req.query
        return await asyncWrapper(PaymentTypeService.getByName, req, res, 200)(paymentTypeName)
    }

    if (req.method === 'DELETE') {
        const { paymentTypeName } = req.query
        return await asyncWrapper(PaymentTypeService.deleteByName, req, res, 200)(paymentTypeName)
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