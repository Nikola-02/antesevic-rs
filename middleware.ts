import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { isAllowedAdminEmail } from "@/lib/admin-auth";

const PROTECTED_PREFIXES = ["/dashboard", "/api/admin"];

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (!request.cookies.get("csrf-token")) {
    response.cookies.set("csrf-token", crypto.randomUUID(), {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
  }

  const isProtected = PROTECTED_PREFIXES.some((prefix) =>
    request.nextUrl.pathname.startsWith(prefix),
  );

  if (!isProtected) {
    return response;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnon) {
    return NextResponse.redirect(new URL("/admin-login", request.url));
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnon, {
    cookies: {
      get(name: string) {
        return request.cookies.get(name)?.value;
      },
      set(name: string, value: string, options) {
        response.cookies.set(name, value, options);
      },
      remove(name: string, options) {
        response.cookies.set(name, "", options);
      },
    },
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const isApiAdminRoute = request.nextUrl.pathname.startsWith("/api/admin");

  if (!session || !isAllowedAdminEmail(session.user?.email)) {
    if (isApiAdminRoute) {
      return NextResponse.json({ error: "Nedozvoljen pristup." }, { status: 403 });
    }
    return NextResponse.redirect(new URL("/admin-login", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/admin/:path*"],
};
