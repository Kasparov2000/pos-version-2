import prisma from "../../prisma";
import {encryptPassword} from "../../auth/encryptPassword";
import validateNewUserSchema from "../../schemas/user/user";

export default async function addNewUser (payload) {
    const {confirmPassword, ...validatedUser} = await validateNewUserSchema(payload)
    validatedUser.password = await encryptPassword(validatedUser.password)
    const newUser =  await prisma.user.create({
        data: {
            ...validatedUser,
        }
    })
    delete newUser.password
    return newUser
}