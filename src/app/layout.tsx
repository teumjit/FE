import type { Metadata } from "next";
import "./globals.css";
import { AuthGate } from "@/features/auth/components/AuthGate";
import { NotificationInit } from "@/features/auth/components/NotificationInit";

export const metadata: Metadata = {
  title: "틈짓",
  description: "작은 틈, 가벼운 몸. 틈새 스트레칭 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {/*
          브라우저 전체 영역에서 가로 중앙 정렬을 담당하는 바깥쪽 Wrapper.
          routine/recommend처럼 route group 밖에 있어 (auth)/(main) 레이아웃의
          mx-auto 혜택을 전혀 못 받던 페이지까지 포함해서, 모든 라우트가 예외 없이
          이 레벨에서 중앙 정렬되도록 함.
        */}
        <div className="flex min-h-screen w-full justify-center overflow-x-hidden">
          {/*
            공통 앱 컨테이너. 최대 너비 430px - 기존 페이지들의 390px 내부 폭/간격은
            그대로 유지되고, 이 컨테이너는 그걸 담는 바깥 프레임 역할만 함.
            transform을 줘서 하위의 position:fixed 요소(바텀시트, 토스트 등)가
            브라우저 전체가 아니라 이 프레임 기준으로 위치하도록 새 containing block을
            만듦(안 그러면 바텀시트 배경이 430px 프레임을 벗어나 브라우저 전체를 덮음).
          */}
          <div className="relative flex min-h-screen w-full max-w-[430px] flex-col [transform:translateZ(0)]">
            <NotificationInit />
            <AuthGate>{children}</AuthGate>
          </div>
        </div>
      </body>
    </html>
  );
}
