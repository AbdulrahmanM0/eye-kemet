"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getSessionToken() {
  const token = cookies().get("token")?.value;
  const customer = cookies().get("customer")
  
  return { token, customer } || null;
}

export async function deleteSession() {
  const cookieStore = cookies();

  cookieStore.set("token", "", { maxAge: 0, path: "/" });
  cookieStore.set("customer", "", { maxAge: 0, path: "/" });

  redirect("/signin"); 
}