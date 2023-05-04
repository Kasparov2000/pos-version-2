import addNewPaymentType from "./addNewPaymentType";
import {getByName} from "./getByName";
import {getAll} from "./getAll";
import {deleteByName} from "./deleteByName";
import {updateByName} from "./updateByName";

export class PaymentTypeService {
    static async newType(payload) {
        return await addNewPaymentType(payload)
    }
    static async getByName(paymentTypeName) {
        return await getByName({paymentTypeName})
    }
    static async getAll() {
        return await getAll()
    }
    static async updateByName(payload) {
        return await updateByName(payload)
    }
    static async deleteByName(paymentTypeName) {
        return await deleteByName({paymentTypeName})
    }
}
