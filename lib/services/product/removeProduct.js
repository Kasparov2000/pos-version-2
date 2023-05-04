export default async function editProduct(payload) {
    return prisma.product.delete({
        where: {
            productName: payload.currencyName
        }
    })
}