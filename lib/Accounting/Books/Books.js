import prisma from "../../prisma";

const BOOKS = {
    "SALES_JOURNAL": prisma.salesJournal,
    "PURCHASES_JOURNAL": prisma.purchasesJournal,
    "CASH_DISBURSEMENTS_JOURNAL": prisma.cashDisbursementsJournal,
    "CASH_RECEIPTS_JOURNAL": prisma.cashReceiptsJournal,
    "RETURNS_INWARDS_JOURNAL":prisma.returnsInwardsJournal,
    "RETURNS_OUTWARDS_JOURNAL": prisma.returnsOutwardsJournal,
}

export default BOOKS