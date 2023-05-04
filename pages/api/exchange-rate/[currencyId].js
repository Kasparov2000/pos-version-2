import {asyncWrapper} from "../../../lib/asyncWrapper";
import {ExchangeRateService} from "../../../lib/services/exchange-rate/ExchangeRateService";
import {InvalidMethodError} from "../../../lib/errors/errors";
import {errorHandler} from "../../../lib/errors/error-handler";

async function handler(req, res) {
    if (req.method === 'GET') {
        return await asyncWrapper(ExchangeRateService.getManyByCurrencyCode, req, res, 200)(req.query.currencyId)
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