import prisma from "../../prisma";
import * as assert from "assert";

export default async function getProductPrice(products) {
    const barcodeRegex = /^\d+$/g

    products.map( product => {

        if (!product.barcode.toString().match(barcodeRegex)) {
            throw new Error("Invalid barcode format.")
        }
    })

    return await prisma.product.findMany({
        where: {
            barcode: {
                in: products.reduce((barcodes, product) => [...barcodes, product.barcode] ,[])
            }
        },
        select: {
            id: true,
            barcode: true,
            price: {
                where: {
                  active: true
                },
                take: 1,
                select: {
                    price: true
                }
            },
        }
    })
}