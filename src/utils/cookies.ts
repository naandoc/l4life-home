"use server";

import { cookies } from "next/headers";

interface setCookie {
  value: string;
  options?: {};
}

export async function create(dataCookie: setCookie) {
  cookies().set("cookieUser", dataCookie.value);
}

export async function get() {
  const userCookie = cookies();
  return userCookie.get("cookieUser");
}
