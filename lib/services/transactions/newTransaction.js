export default async function initiateNewTransaction() {
    return await prisma.transaction.create({

    })
}