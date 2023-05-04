import {SalesJournal} from "../Journals/SalesJournal";
import {CashReceiptsJournal} from "../Journals/CashReceiptsJournal";
import {ReturnsOutwardsJournal} from "../Journals/ReturnsOutwardsJournal";
import {ReturnsInwardsJournal} from "../Journals/ReturnsInwardsJournal";


export class SalesLedger  {
    #SalesJournalInstance;
    #CashReceiptsJournalInstance;
    #ReturnsOutwardsJournalInstance
    #ReturnsInwardsJournalInstance
    constructor() {
        this.#SalesJournalInstance = new SalesJournal()
        this.#CashReceiptsJournalInstance = new CashReceiptsJournal()
        this.#ReturnsOutwardsJournalInstance = new ReturnsOutwardsJournal()
        this.#ReturnsInwardsJournalInstance = new ReturnsInwardsJournal()
    }

    async #getRecords() {
        const creditSales = await this.#SalesJournalInstance.allRecords()
        const cashPayments = await this.#CashReceiptsJournalInstance.allRecords()
        const ReturnsOutwards = await this.#ReturnsOutwardsJournalInstance.allRecords()
        const ReturnsInwards = await this.#SalesJournalInstance.allRecords()

        return Object.freeze({
            creditSales,
            cashPayments,
            ReturnsOutwards,
            ReturnsInwards
        })
    }

    async getRecords () {
        const records = await this.#getRecords()
        const debitSide = { ...records.cashPayments, ...records.ReturnsOutwards }
        const creditSide = { ...records.creditPurchases, ...records.ReturnsInwards }
        return {debitSide, creditSide}
    }

}