const TOKEN_KEY = "teumjit_auth_token";

// middleware(서버/엣지)가 쿠키로 로그인 여부를 판단할 때 쓰는 키.
// authToken.ts 밖(middleware.ts)에서도 같은 이름을 쓰도록 export함.
export const TOKEN_COOKIE_KEY = TOKEN_KEY;

const PERSIST_COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30일 ("로그인 상태 유지" 체크 시)

function setCookie(name: string, value: string, maxAgeSeconds?: number) {
  const parts = [`${name}=${encodeURIComponent(value)}`, "path=/", "SameSite=Lax"];
  if (maxAgeSeconds !== undefined) parts.push(`max-age=${maxAgeSeconds}`);
  document.cookie = parts.join("; ");
}

function clearCookie(name: string) {
  document.cookie = `${name}=; path=/; max-age=0`;
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${name}=([^;]*)`)
  );
  return match ? decodeURIComponent(match[1]) : null;
}

export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY) ?? sessionStorage.getItem(TOKEN_KEY);
}

// localStorage/sessionStorage와 쿠키가 둘 다 같은 토큰으로 일치하는지 확인함.
// 서버(Proxy)는 쿠키만 보고, API 호출은 localStorage/sessionStorage만 보기 때문에
// 둘이 어긋나면(예: 쿠키 동기화 코드가 추가되기 전에 로그인해서 localStorage에만
// 토큰이 남은 경우) 클라이언트는 "로그인됨"이라 믿고 보호된 페이지로 보내는데
// 서버는 "비로그인"이라 다시 /login으로 돌려보내는 리다이렉트 루프에 빠질 수 있음.
// 그래서 "로그인 상태인지" 최종 판단은 반드시 이 함수로 해야 함.
export function hasConsistentAuthSession(): boolean {
  const token = getAuthToken();
  if (!token) return false;
  return getCookie(TOKEN_KEY) === token;
}

// "로그인 상태 유지" 체크 시 localStorage. 아니면 탭이 닫히면 사라지는 sessionStorage에 저장.
// 둘 중 어느 쪽이든, middleware가 서버 측에서 라우트를 보호할 수 있도록 쿠키에도 같이 기록함
// (persist=true면 30일짜리 쿠키, false면 브라우저 종료 시 사라지는 세션 쿠키).
export function setAuthToken(token: string, persist: boolean = true): void {
  if (typeof window === "undefined") return;

  if (persist) {
    localStorage.setItem(TOKEN_KEY, token);
    sessionStorage.removeItem(TOKEN_KEY);
    setCookie(TOKEN_KEY, token, PERSIST_COOKIE_MAX_AGE);
  } else {
    sessionStorage.setItem(TOKEN_KEY, token);
    localStorage.removeItem(TOKEN_KEY);
    setCookie(TOKEN_KEY, token);
  }
}

export function clearAuthToken(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
  clearCookie(TOKEN_KEY);
}
