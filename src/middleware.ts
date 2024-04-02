import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "./utils/cookies";

export async function middleware(req: NextRequest) {
  const cookie = await getCookie();

  if (req.nextUrl.pathname === "/login" && cookie?.value) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (req.nextUrl.pathname !== "/login" && !cookie?.value) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/login", "/my-apartments", "/my-apartments/remove"],
};
