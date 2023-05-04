import {asyncWrapper} from "../../../lib/asyncWrapper";
import addCurrency from "../../../lib/services/currency/addCurrency";
import {CashReceiptsJournal} from "../../../lib/Accounting/Books/Journals/CashReceiptsJournal";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const cashReceiptsJournal = new CashReceiptsJournal()
        return res.json( await cashReceiptsJournal.newRecord({
                ...req.body
            })
        )
    }
    return res.status(405).send({message : `${req.method} not allowed`})
}