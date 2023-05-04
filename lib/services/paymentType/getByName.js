import {NotFoundError} from "../../errors/errors";

export async function getByName({paymentTypeName}) {
    const paymentType = await prisma.paymentType.findFirst({
        where: {
            deleted: false,
            paymentTypeName: paymentTypeName,
        },
        include: {
            promotions: true,
            taxes: true
        }
    });

    if (!paymentType) {
        throw new NotFoundError(`Payment Type '${paymentTypeName}' does not exists.`)
    }
    delete paymentType.deleted
    return paymentType

}