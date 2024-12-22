import { NextURL } from "next/dist/server/web/next-url";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { origin, pathname } = request.nextUrl;
  if (pathname === "/") {
    const loginUrl = new NextURL("/home", origin);
    return NextResponse.redirect(loginUrl);
  }
  if (
    (pathname === "/dashboard" ||
      pathname === "/dashboard/cart" ||
      pathname === "/dashboard/orders") &&
    !request.cookies.get("userCookies")?.value
  ) {
    const loginUrl = new NextURL("/login", origin);
    return NextResponse.redirect(loginUrl);
  } else {
    return NextResponse.next();
  }
}
