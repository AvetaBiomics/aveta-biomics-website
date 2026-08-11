import { NextResponse } from "next/server";
import {
  ACCESS_COOKIE,
  REVIEW_PASSWORD,
  accessTokenFor,
  safePasswordMatch,
} from "../../lib/review-access";

export async function POST(request: Request) {
  const configuredPassword = REVIEW_PASSWORD;
  const body = (await request.json().catch(() => null)) as
    | { password?: unknown }
    | null;
  const receivedPassword =
    typeof body?.password === "string" ? body.password : "";

  if (
    !configuredPassword ||
    !safePasswordMatch(receivedPassword, configuredPassword)
  ) {
    return NextResponse.json(
      { ok: false, message: "The password is incorrect. Please try again." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ACCESS_COOKIE, await accessTokenFor(configuredPassword), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
