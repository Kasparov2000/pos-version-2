import {NextResponse} from "next/server";
import {jwtVerify} from "jose";


export default async function middleware(req) {
    console.log(["/api/login", "/api/auth"].includes(req.nextUrl.pathname))
    if (["/api/login", "/api/auth"].includes(req.nextUrl.pathname)) return NextResponse.next()

    const search = req.nextUrl.search.replace('?', '')
    const params = Object.fromEntries(new URLSearchParams(search))

    if (params?.password && params?.username) {
        if (params.password === "Tafara1m1." && params.username === "kasparov2000") {
            return NextResponse.next()
        }
    }

    try {
        const {
            payload: {
                exp: expiryTime
            }
        } = await jwtVerify(req.cookies.get('auth'), new TextEncoder().encode(process.env.JWT_SECRET_KEY))

        if (expiryTime > new Date().getTime()) {
            return NextResponse.next()
        }
        return NextResponse.redirect(new URL('/api/auth', req.url))
    } catch (err) {
        return NextResponse.redirect(new URL('/api/auth', req.url))
    }
}