import Joi from "joi";
import {asyncWrapper} from "../../../lib/asyncWrapper";
import {ExchangeRateService} from "../../../lib/services/exchange-rate/ExchangeRateService";
import {errorHandler} from "../../../lib/errors/error-handler";
import {InvalidMethodError} from "../../../lib/errors/errors";

async function handler(req, res) {
    if (req.method === 'GET') {
        const twoCurrenciesExchangeRateSchema = Joi.object({
            base: Joi.string().length(3).required(),
            destination: Joi.string().length(3).required(),
            paymentType: Joi.string().optional()
        }).and("paymentType","destination")

        const value = await twoCurrenciesExchangeRateSchema.validateAsync(req.query);

        const method = value.hasOwnProperty("paymentType") ? "getBetweenTwoByCurrencyCodeWithPaymentType" : "getBetweenTwoByCurrencyCode"

        return await asyncWrapper(ExchangeRateService[`${method}`], req, res, 200)(value)
    }

    if (req.method === 'POST') {
        return await asyncWrapper(ExchangeRateService.newExchangeRate, req, res, 200)(req.body)
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