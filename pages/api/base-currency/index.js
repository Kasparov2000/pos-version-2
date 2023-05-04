import {errorHandler} from "../../../lib/errors/error-handler";
import {asyncWrapper} from "../../../lib/asyncWrapper";
import {InvalidMethodError} from "../../../lib/errors/errors";
import {PaymentTypeService} from "../../../lib/services/paymentType/PaymentTypeService";
import {CurrencyService} from "../../../lib/services/currency/CurrencyService";


async function handler(req, res) {
    if (req.method === 'GET') {

    }

    if (req.method === 'PATCH') {
        return await asyncWrapper(CurrencyService.changeBaseCurrency, req, res, 200)(req.body)
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