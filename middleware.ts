import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/tewodros", request.url));
}

export const config = {
  matcher: "/",
};
