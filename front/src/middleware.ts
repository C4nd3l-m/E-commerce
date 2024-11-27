import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (
        (pathname === "/dashboard" || pathname === "/cart" || pathname === "/orders") &&
        !request.cookies.get("userData")?.value
    ) {
        const loginURL = new URL("/login", request.nextUrl.origin);
        return NextResponse.redirect(loginURL);
    }

    return NextResponse.next();
}
