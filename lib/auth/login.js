import prisma from "../prisma";
import { verifyPassword } from "./verifyPassword";
import { InvalidCredentialsError } from "../errors/errors";
import JSONResponse from "../utils/JSONResponse";
import authenticateUser from "./authenticateUser";
import midnightTime from "../utils/midnightTime";
import validateLoginSchema from "../schemas/login/login";

export default async function login(res, payload) {
    const { username, phoneNumber, password: payloadPassword, rememberMe} = await validateLoginSchema(payload)

    const validatedLoginPayload = username ? { username } : { phoneNumber }

    const user = await prisma.user.findUnique({
        where: validatedLoginPayload,
    })

    if (!user) throw new InvalidCredentialsError();

    const updatedUser = await prisma.user.update({
        where: {id: user.id},
        data: {
            lastLogin: new Date()
        }
    })

    if (await verifyPassword(updatedUser.password, payloadPassword)) {
        delete updatedUser.password

        const response = await authenticateUser(res, updatedUser, {expires: midnightTime()}, !!rememberMe)
        return JSONResponse(response, 200, updatedUser)
    }

    throw new InvalidCredentialsError()
}