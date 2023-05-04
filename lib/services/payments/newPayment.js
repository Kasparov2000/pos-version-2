export default async function newPayment(payload) {
    return await prisma.payment.create({
        data: {
            ...payload
        }
    })
}