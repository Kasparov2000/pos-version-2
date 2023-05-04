import {AccountingDbService} from "../DBService/AccountingDbService";
import {ReturnsInwardsJournal} from "../Journals/ReturnsInwardsJournal";
import {PurchasesJournal} from "../Journals/PurchasesJournal";
import {CashDisbursementJournal} from "../Journals/CashDisbursementJournal";
import {SalesJournal} from "../Journals/SalesJournal";
import {ReturnsOutwardsJournal} from "../Journals/ReturnsOutwardsJournal";

class LedgerBookNotRecognizedError extends Error{
    constructor(message) {
        super(message);
    }
}

export class Ledger {
    #SalesJournalInstance
    #PurchasesJournalInstance
    #CashDisbursementJournalInstance
    #CashReceiptsJournalInstance
    #ReturnsOutwardsJournalInstance
    #ReturnsInwardsJournalInstance

    constructor(Book) {

        if (!["PURCHASES_LEDGER", "SALES_LEDGER"].includes(Book)) {
            throw new LedgerBookNotRecognizedError(`Ledger Book: ${Book} not recognized`)
        }

        this.#ReturnsOutwardsJournalInstance = new ReturnsOutwardsJournal()
        this.#ReturnsInwardsJournalInstance = new ReturnsInwardsJournal()

        if (Book === "PURCHASES_LEDGER") {
            this.#PurchasesJournalInstance = new PurchasesJournal()
            this.#CashDisbursementJournalInstance = new CashDisbursementJournal()
        }

        if (Book === "SALES_LEDGER") {
            this.#SalesJournalInstance = new SalesJournal()
            this.#CashReceiptsJournalInstance = new CashDisbursementJournal()
        }

    }

    get record () {

    }

    get records () {
        return Object.freeze({
            salesJournalRecords: ""

        })

    }
}