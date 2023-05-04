import prisma from "../prisma";
import formatMoney from "../utils/formatMoney";

async function updateDatabase(transactionId, description) {
    await prisma.transaction.update({
        where: {
            id: transactionId
        },
        data: {
            status: "FAILED",
            errorDescription: description
        }
    })
}

export class CustomAPIError extends Error {

}

export class OutOfInventoryError extends CustomAPIError {
    constructor(barcode, quantityLeft, transactionId) {
        super(`Product with barcode: ${barcode} is out of inventory. Quantity Left: ${quantityLeft}`);
        this.statusCode = 404
        this.transactionId = transactionId
        updateDatabase(this.transactionId, this.message)
            .then(() => console.log("Successfully Updated"))
            .catch(() => console.log("Update unsuccessful"))
    }

}

export class UserNotAuthorizedError extends CustomAPIError {
    constructor() {
        super(`User not authorized.`);
        this.statusCode = 401
    }
}

export class InvalidCredentialsError extends CustomAPIError {
    constructor() {
        super("Invalid credentials");
        this.statusCode = 401
    }
}


export class UserForbiddenError extends CustomAPIError {
    constructor() {
        super("User not permitted to perform the action.");
        this.statusCode = 403
    }
}

export class UserDoesNotExistsError extends CustomAPIError {
    constructor() {
        super("User does not exists.");
        this.statusCode = 404
    }
}

export class CurrencyExistsError extends CustomAPIError {
    constructor(currencyName) {
        super(`${currencyName} already exists.`);
        this.statusCode = 409
    }
}
export class InvalidPriceError extends CustomAPIError {
    constructor({totalPrice, baseCurrency, totalPaid, transactionId}) {
        super(`The expected total price is ${formatMoney(totalPrice)} ${baseCurrency}, and the total paid is ${formatMoney(totalPaid)} ${baseCurrency}`);
        this.statusCode = 422
        this.transactionId = transactionId
        updateDatabase(this.transactionId, this.message)
            .then(() => console.log("Successfully Updated"))
            .catch(() => console.log("Update unsuccessful"))
    }
}

export class UserExistsError extends CustomAPIError {
    constructor(field, value) {
        super(`User with ${field}: ${value} already exists.`);
        this.statusCode = 409

    }
}

export class CurrencyDoesNotExistsError extends CustomAPIError {
    constructor(value) {
        super(`Currency '${value}' does not exists.`);
        this.statusCode = 404
    }
}

export class InvalidMethodError extends CustomAPIError {
    constructor(value) {
        super(`Method '${value}' not allowed`);
        this.statusCode = 405
    }
}

export class InvalidBaseCurrencyError extends CustomAPIError {
    constructor(value, validBaseCurrency) {
        super(`BaseCurrency '${value}' is not valid. The valid base currency is '${validBaseCurrency}'.`);
        this.statusCode = 404
    }
}
export class ExchangeRateDoesNotExistsError extends CustomAPIError {
    constructor(currency) {
        super(`Exchange rate for '${currency}' does not exists.`);
        this.statusCode = 404
    }
}

export class NotFoundError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = 404
    }
}

export class BaseCurrencyExchangeRateImmutableError extends CustomAPIError {
    constructor(baseCurrency) {
        super(`The exchange rate of ${baseCurrency} : ${baseCurrency} is immutable, since ${baseCurrency} is the base currency.`);
        this.statusCode = 409
    }
}

export class InvalidExchangeRateDigitError extends CustomAPIError {
    constructor(value) {
        super(`The value ${value} is not a valid decimal number.`);
        this.statusCode = 422
    }
}


