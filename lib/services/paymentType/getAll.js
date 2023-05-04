import {NotFoundError} from "../../errors/errors";

export async function getAll() {
    const paymentTypes = await prisma.paymentType.findMany({
        include: {
            promotions: true,
            taxes: true
        }
    });

    if (paymentTypes.length === 0) {
        throw new NotFoundError(`No payment types in the database.`)
    }

    return paymentTypes
}