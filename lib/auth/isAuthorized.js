import {InvalidCredentialsError, UserDoesNotExistsError, UserNotAuthorizedError} from "../errors/errors";
import prisma from "../prisma"
import {jwtVerify} from "jose";


export default async function isAuthorized(req) {
    const { auth: token } = req.cookies;
    if (!token) throw new UserNotAuthorizedError()
    try {
        const {username, phoneNumber} = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET_KEY))

        const user = await prisma.user.findFirst({where: {username, phoneNumber}})

        if (!user) {
            throw new UserDoesNotExistsError()
        }
        return user
    } catch (err) {
        if (err instanceof UserDoesNotExistsError ) {
            throw new UserDoesNotExistsError()
        }

        throw new UserNotAuthorizedError()
    }
}
