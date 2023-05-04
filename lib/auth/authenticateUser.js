import { SignJWT } from 'jose';
import {setCookie} from "../utils/cookies";

export default async function authenticateUser(res, user, cookieOptions, sessionCookie) {
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
    const payload = { username: user.username, phoneNumber: user.phoneNumber, isAdmin: user.isAdmin}
    const token = await new SignJWT({ payload })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setExpirationTime(cookieOptions.expires)
        .sign(new TextEncoder().encode(JWT_SECRET_KEY));

    console.log(sessionCookie)

    if (sessionCookie) {
        delete cookieOptions.expires
    }

    return setCookie(res, "auth", token, {
        ...cookieOptions,
        httpOnly: true,
        sameSite: 'lax',
    })
}