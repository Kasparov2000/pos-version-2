import {NotFoundError} from "../../errors/errors";

export async function deleteByName({paymentTypeName}) {

    const {count} = await prisma.paymentType.updateMany({
        where: {
            paymentTypeName: paymentTypeName,
            deleted: false
        },
        data: {
            deleted: true
        }
    });

    if (!count) {
        throw new NotFoundError(`Payment Type '${paymentTypeName}' does not exists.`)
    }

    return {
        message: `Payment Type '${paymentTypeName}' successfully deleted.`
    }

}