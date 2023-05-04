export default async function addNewProduct(payload) {

    return await prisma.product.create({
        where: {
          barcode: payload.barcode
        },
        data: {
            ...payload
        }
    })
}