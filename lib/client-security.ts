"use client";

export function readCsrfToken() {
  const token = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("csrf-token="))
    ?.split("=")[1];
  return token ?? "";
}
