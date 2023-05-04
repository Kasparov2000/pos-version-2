import {AccountingDbService} from "../DBService/AccountingDbService";
import validateDayBookSchema from "../../../schemas/daybook/DayBookSchema";

export class DayBook {
    #dbInstance
    constructor(book) {
        console.log(book)
        this.#dbInstance = new AccountingDbService(book)
    }

    async newRecord (payload) {
        await validateDayBookSchema(payload)
        return await this.#dbInstance.newRecord(payload)
    }

    async allRecords() {
        return await this.#dbInstance.RetrieveRecords()
    }

    async singleRecord(payload) {
        return await this.#dbInstance.RetrieveRecord(payload)
    }
}