import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      // tsconfig.json의 "@/*": ["./src/*"]와 동일한 alias를 테스트 환경에서도 쓰기 위함
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  test: {
    // authToken.ts가 localStorage/document.cookie에 접근하므로 DOM 환경이 필요함.
    // situationCodes.ts 같은 순수 함수 테스트는 jsdom 환경이어도 문제 없음.
    environment: "jsdom",
  },
});
