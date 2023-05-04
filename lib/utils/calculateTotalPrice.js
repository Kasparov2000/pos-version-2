import getProductPrice from "../services/product/getPrices";

export default async function calculateTotalPrice (payload, discount) {

    const productPrices = await getProductPrice(payload)

    const barcodesQuantity = payload.reduce((acc, product) => {
        const newObj = {}
        newObj[`${product.barcode}`] = product.quantity
        return {...acc, ...newObj}
    }, {})

    const sales = productPrices.reduce((acc, product) => {
        const sale = {
            productId: product.id,
            quantity: barcodesQuantity[`${product['barcode']}`],
            price: parseFloat(product['price'][0]['price']),
            totalPrice: (parseFloat(product['price'][0]['price']) * barcodesQuantity[`${product['barcode']}`])
        }
        return [...acc, sale]
    }, [])

    let totalPrice = sales.reduce((_totalPrice, product ) => {
        return _totalPrice + product.totalPrice
    }, 0)

    totalPrice = discount ? totalPrice * (1 - discount) : totalPrice

    return {
        totalPrice,
        processedSales: sales
    }

}
