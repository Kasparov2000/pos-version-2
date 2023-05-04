import prisma from "../../prisma";
import validateNewProductSchema from "../../schemas/product/newProduct";

export default async function addNewProduct(payload) {
    const {price, exchangeRateId, ...validatedPayload} = await validateNewProductSchema(payload)
    return await prisma.$transaction(async(prisma) => {
       const newProduct = await prisma.product.create({
            data: {
                ...validatedPayload,
                price: {
                    create: {
                        price,
                        active: true,
                        exchangeRateId,
                        barcode: validatedPayload.barcode
                    }
                }
            },
           include: {
                price: true
           }
        })

        await prisma.prices.updateMany({
                where: {
                    AND: [
                        {
                            barcode: {
                                equals: newProduct.barcode,
                            },
                        },
                        {
                            productId: {
                                not: newProduct.id,
                            }
                        }
                    ]
                },
            data: {
                active: false
            }
        })
        return newProduct
    })

}