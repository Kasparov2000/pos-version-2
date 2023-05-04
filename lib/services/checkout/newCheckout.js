import prisma from "../../prisma";
import validateCheckoutSchema from "../../schemas/checkout/checkout";
import {InvalidPriceError, OutOfInventoryError} from "../../errors/errors";
import calculateTotalPrice from "../../utils/calculateTotalPrice";
import calculateTotalPaid from "../../utils/calculateTotalPaid";

async function initiateTransaction(payload) {
    const {
        user,
        paymentBreakdown,
        customerId,
        cart,
        discount
    } = await validateCheckoutSchema(payload)

    const {id: cashierId} = user

    const { id: transactionId } = await prisma.transaction.create({
        data: {
            initiatedBy: cashierId,
            status: "PENDING",
            type: "SALES",
        }
    })

    const {totalPaid, exchangeRates, currenciesId, baseCurrency} = await calculateTotalPaid(paymentBreakdown)
    const {totalPrice, processedSales} = await calculateTotalPrice(cart, discount)


    if (totalPaid !== totalPrice) {
        throw new InvalidPriceError({totalPrice, totalPaid, baseCurrency, transactionId})
    }

    return await prisma.$transaction(async (prisma) => {
        await prisma.transaction.update({
            where: {
                id:   transactionId
            },
            data: {
                initiatedBy: cashierId,
                customerId: customerId,
                totalPayable: totalPrice,
                totalPaid,
                payments: {
                    create: exchangeRates.reduce((acc, payment) => {
                        return [...acc, {
                            currencyId: currenciesId[`${payment.currencyName}`],
                            exchangeRateId: payment.id,
                            paid: paymentBreakdown[`${payment.currencyName}`],
                        }]
                    }, [])
                },
            }
        })

        // Checkout
        await Promise.all(cart.map( async (cartProduct) => {
            // Checking the total amount in stock


            const {
                _sum: {quantity: totalQuantityInStock}
            } = await prisma.product.aggregate({
                _sum: {
                    quantity: true
                },
                where: {
                    barcode: cartProduct.barcode,
                    expiryDate:{ gt: new Date()},
                    quantity: { gt: 0}
                },
            })



            //    Checking if there is enough quantity in stock

            if ( totalQuantityInStock >= cartProduct.quantity) {
                let productQuantity = cartProduct.quantity
                while (productQuantity !== 0) {
                    // Finding the oldest product in stock, FIFO
                    const deductibleProduct = await prisma.product.findFirst({
                        where: {
                            barcode: cartProduct.barcode,
                            depleted: false,
                            expiryDate: { gt: new Date()}
                        },

                        orderBy: {
                            createdAt: 'asc'
                        },

                        select: {
                            id: true,
                            quantity: true
                        }
                    })

                    if (productQuantity > deductibleProduct.quantity) {
                        await prisma.product.update({
                            where: {
                                id: deductibleProduct.id
                            },
                            data: {
                                quantity: 0,
                                depleted: true
                            }
                        })
                        productQuantity -= deductibleProduct.quantity
                    } else {
                        await prisma.product.update({
                            where: {
                                id: deductibleProduct.id
                            },
                            data: {
                                quantity: deductibleProduct.quantity - productQuantity,
                            }
                        })
                        productQuantity = 0
                    }
                }
            } else {
                throw new OutOfInventoryError(cartProduct.barcode, totalQuantityInStock, transactionId)
            }
        }))

        return prisma.transaction.update({
            where: {
                id: transactionId
            },
            data: {
                status: "SUCCEEDED",
                sales: {
                    create: processedSales.reduce((acc, sale) => {
                        delete sale.totalPrice
                        return [
                            ...acc, {
                                ...sale,
                                cashierId
                            }
                        ]
                    }, [])
                }
            }, include: {
                sales: true,
                payments: true
            }
        });
    })
}

export default async function newCheckout (payload) {
    return await initiateTransaction(payload)
}