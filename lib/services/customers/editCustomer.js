export default async function addCurrency(payload) {
    return prisma.currency.update({
        where: {
          customerName: payload.customerName
        },
        data: {
            ...payload
        }
    })
}