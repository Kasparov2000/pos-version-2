    export default async function editCurrency(payload) {
    return prisma.currency.update({
        where: {
          currencyName: payload.currencyName
        },
        data: {
            ...payload
        }
    })
}