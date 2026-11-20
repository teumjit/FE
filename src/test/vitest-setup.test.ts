import { describe, expect, it } from "vitest";
import { API_BASE_URL } from "@/services/config";

// situationCodes.ts, authToken.ts 테스트를 작성하기 전에, 테스트 러너 자체가
// 정상 동작하는지만 확인하는 최소한의 점검용 테스트.
describe("vitest 환경 점검", () => {
  it("테스트 러너가 정상 동작한다", () => {
    expect(1 + 1).toBe(2);
  });

  it("jsdom 환경에서 window/document에 접근할 수 있다", () => {
    expect(typeof window).not.toBe("undefined");
    expect(typeof document).not.toBe("undefined");
  });

  it("'@/' 경로 alias가 정상적으로 resolve된다", () => {
    expect(typeof API_BASE_URL).toBe("string");
    expect(API_BASE_URL.length).toBeGreaterThan(0);
  });
});
