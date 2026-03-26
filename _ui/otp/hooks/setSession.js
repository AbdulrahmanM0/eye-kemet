"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setSession({ session, customer }) {
  const expires = new Date(session?.expiresAt);
  if (session?.token) {
    cookies().set("token", session?.token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires,
    })
  }
  if (customer) {
    cookies().set("customer", JSON.stringify(customer), {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires,
    })
  }

  redirect("/")
}