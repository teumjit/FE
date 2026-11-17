import { NextRequest, NextResponse } from "next/server";
import { TOKEN_COOKIE_KEY } from "@/services/authToken";

const PUBLIC_PATH_PREFIXES = ["/login", "/signup"];

function isPublicPath(pathname: string) {
  return PUBLIC_PATH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}

// 서버(엣지) 측 1차 방어선. 클라이언트 localStorage는 Proxy가 못 읽어서,
// 로그인 시 authToken.ts가 같이 심어두는 쿠키의 "존재 여부"만 확인함.
// (토큰 자체의 유효성 검증은 각 API 호출이 401을 받았을 때 처리함 - 백엔드를
// 매 요청마다 엣지에서 왕복하면 지연·장애 전파가 커서 존재 여부 체크로 범위를 한정함)
// Next.js 16부터 "middleware" 파일 컨벤션이 "proxy"로 개명됨 - Capacitor
// static export 빌드에서는 서버가 없어 Proxy 자체가 동작하지 않고, 그 경우엔
// AuthGate.tsx(클라이언트 측)가 유일한 방어선이 됨.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasToken = !!request.cookies.get(TOKEN_COOKIE_KEY)?.value;
  const publicPath = isPublicPath(pathname);

  if (!hasToken && !publicPath) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (hasToken && publicPath) {
    const homeUrl = new URL("/", request.url);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  // 정적 리소스(_next, 아이콘, 파비콘 등)는 미들웨어를 안 거치도록 제외
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icons/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
