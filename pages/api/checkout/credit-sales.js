import {SalesJournal} from "../../../lib/Accounting/Books/Journals/SalesJournal";
import {SalesLedger} from "../../../lib/Accounting/Books/Ledger/SalesLedger";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const salesJournal = new SalesJournal(req.body)
        return res.json( await salesJournal.newRecord({
                ...req.body
            })
        )
    }

    if (req.method === "GET") {
        const salesLedger = new SalesLedger()
        return res.json( await salesLedger.getRecords())
    }

    return res.status(405).send({message : `${req.method} not allowed`})
}