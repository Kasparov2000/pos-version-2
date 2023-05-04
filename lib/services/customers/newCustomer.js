import validateNewCustomerSchema from "../../schemas/supplier/newSupplier";
import prisma from "../../prisma";


export default async function addNewCustomer (payload) {
    const {address,...validatedCustomerPayload} = await validateNewCustomerSchema(payload)
    return await prisma.customer.create({
        data: {
            ...validatedCustomerPayload,
            address: {
                create: address
            }
        }, include: {
            address: true
        }
    })
}