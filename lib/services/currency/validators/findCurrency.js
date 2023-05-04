export default async function({currencyCode}) {
    return await prisma.currency.findUnique({
        where: {
            currencyCode
        }
    })
}