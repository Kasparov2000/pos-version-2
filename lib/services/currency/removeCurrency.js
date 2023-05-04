export default async function editCurrency(payload) {
    return prisma.currency.delete({
        where: {
            currencyName: payload.currencyName
        }
    })
}