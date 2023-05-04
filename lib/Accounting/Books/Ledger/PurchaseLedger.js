import {Ledger} from "./Ledger";
import {PurchasesJournal} from "../Journals/PurchasesJournal";
import {CashDisbursementJournal} from "../Journals/CashDisbursementJournal";
import {ReturnsOutwardsJournal} from "../Journals/ReturnsOutwardsJournal";
import {ReturnsInwardsJournal} from "../Journals/ReturnsInwardsJournal";

export class PurchaseLedger  {
    #PurchasesJournalInstance;
    #CashDisbursementJournalInstance;
    #ReturnsOutwardsJournalInstance
    #ReturnsInwardsJournalInstance
    constructor() {
        this.#PurchasesJournalInstance = new PurchasesJournal()
        this.#CashDisbursementJournalInstance = new CashDisbursementJournal()
        this.#ReturnsOutwardsJournalInstance = new ReturnsOutwardsJournal()
        this.#ReturnsInwardsJournalInstance = new ReturnsInwardsJournal()
    }

   async #getRecords() {
        const creditPurchases = await this.#PurchasesJournalInstance.allRecords()
        const cashPayments = await this.#CashDisbursementJournalInstance.allRecords()
        const ReturnsOutwards = await this.#ReturnsOutwardsJournalInstance.allRecords()
        const ReturnsInwards = await this.#PurchasesJournalInstance.allRecords()

       return Object.freeze({
           creditPurchases,
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