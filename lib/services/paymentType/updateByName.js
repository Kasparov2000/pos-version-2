import {NotFoundError} from "../../errors/errors";

export async function updateByName(payload) {
    const paymentType = await prisma.paymentType.updateMany({
        where: {
            deleted: false,
            paymentTypeName: payload.paymentTypeName,
        },
        data: {
            ...payload
        },
        include: {
            promotions: true,
            taxes: true
        }
    });

    if (!paymentType) {
        throw new NotFoundError(`Payment Type '${payload.paymentTypeName}' does not exists.`)
    }
    delete paymentType.deleted
    return paymentType

}