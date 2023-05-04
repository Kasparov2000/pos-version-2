export default async function getAllCurrencies() {
    return await prisma.currency.findMany({})
}