export default async function getProduct ( payload ) {
    return await prisma.product.findMany({
        data: {
            where: {
                in: [...payload]
            }
        }
    })
}