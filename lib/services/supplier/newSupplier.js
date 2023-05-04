import prisma from "../../prisma";
import validateNewSupplierSchema from "../../schemas/supplier/newSupplier";


export default async function addNewSupplier (payload) {
    const {address,...validatedSupplierPayload} = await validateNewSupplierSchema(payload)

    return await prisma.supplier.create({
        data: {
            ...validatedSupplierPayload,
            address: {
                create: address
            }
        }, include: {
            address: true
        }
    })
}