"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { clearAuthToken, hasConsistentAuthSession } from "@/services/authToken";

const PUBLIC_PATH_PREFIXES = ["/login", "/signup"];

function isPublicPath(pathname: string) {
  return PUBLIC_PATH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}

// 클라이언트 측 2차 방어선. middleware가 못 보는 경로(Capacitor 네이티브 앱은
// static export라 middleware 자체가 동작하지 않음)에서도 보호가 유지되도록 함.
export function AuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const publicPath = isPublicPath(pathname);

  // 이 pathname에 대해 인증 확인이 끝났는지. 경로가 바뀌면 이펙트가 돌기 전에도
  // (렌더링 중에) 즉시 무효화되어, 직전 페이지의 통과 상태가 다음 페이지로
  // 새어나가 한 프레임이라도 잘못된 화면이 보이는 걸 막음.
  // public 경로는 최초 진입 시에 한해 낙관적으로 즉시 노출함(로그인 화면이
  // 지체 없이 바로 나타나야 하므로) - 그래도 "이미 로그인된 채 접근" 케이스는
  // 아래 effect가 곧바로 교정함.
  const [verifiedPathname, setVerifiedPathname] = useState<string | null>(
    () => (publicPath ? pathname : null)
  );
  const isVerified = verifiedPathname === pathname;

  useEffect(() => {
    // localStorage/sessionStorage와 쿠키가 둘 다 일치해야 "로그인됨"으로 간주함.
    // 어긋나면(쿠키 동기화 코드 추가 전에 로그인한 세션 등) 서버(Proxy)와 클라이언트가
    // 서로 다른 판단을 내려서 리다이렉트 루프에 빠지므로, 이 경우 로그아웃 처리로
    // 정리하고 비로그인 상태로 통일함.
    const hasSession = hasConsistentAuthSession();
    if (!hasSession) clearAuthToken();

    if (!hasSession && !publicPath) {
      router.replace("/login");
      return;
    }

    if (hasSession && publicPath) {
      router.replace("/");
      return;
    }

    // localStorage(외부 브라우저 저장소)를 확인한 결과를 React state로 동기화하는
    // 케이스라 effect에서의 setState가 맞음 - localStorage는 클라이언트에서만
    // 접근 가능해서(SSR 중엔 없음, hydration mismatch 위험) 렌더 중엔 읽을 수 없음.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVerifiedPathname(pathname);
  }, [pathname, publicPath, router]);

  if (!isVerified) return null;

  return <>{children}</>;
}
