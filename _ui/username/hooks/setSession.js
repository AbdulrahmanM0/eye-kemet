"use server";

import { cookies } from "next/headers";

export async function setSession({ session }) {
  const expires = new Date(session.expiresAt);

  cookies().set("token", session.token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    expires,
  });
}