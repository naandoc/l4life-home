"use server";

import { cookies } from "next/headers";

interface setCookie {
  value: string;
  options?: {};
}

export async function createCookie(dataCookie: setCookie) {
  cookies().set("cookieUser", dataCookie.value);
}

export async function getCookie() {
  const userCookie = cookies();
  return userCookie.get("cookieUser");
}

export async function deleteCookie() {
  await cookies().delete("cookieUser");
}
