import type { NextConfig } from "next";

// Capacitor(네이티브 앱) 빌드 때만 static export로 전환함.
// 일반 웹 빌드/배포(Vercel 등)는 기존대로 서버 모드로 동작해야 해서
// 이 플래그 없이는 output: "export"를 적용하지 않음.
const isCapacitorBuild = process.env.CAPACITOR_BUILD === "true";

const nextConfig: NextConfig = {
  ...(isCapacitorBuild
    ? { output: "export" as const, images: { unoptimized: true } }
    : {}),
};

export default nextConfig;
