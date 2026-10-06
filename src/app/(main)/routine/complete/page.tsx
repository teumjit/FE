"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Header } from "@/components/ui/Header";
import { ApplyButton } from "@/components/ui/ApplyButton";
import { RoutineCompleteSummary } from "@/features/routine/components/RoutineCompleteSummary";

export default function RoutineCompletePage() {
  const router = useRouter();

  const handleFavorite = () => {
    // 즐겨찾기 저장 로직
  };

  const handleGoHome = () => {
    router.push("/");
  };

  const handleViewHistory = () => {
    router.push("/history");
  };

  return (
    <main className="flex min-h-screen w-[390px] flex-col items-start gap-[20px] p-[24px]">
      <Header title="루틴 완료" />

      <div className="flex w-full justify-center">
        <Image
          src="/icons/routinecomplete.svg"
          alt="루틴 완료"
          width={237}
          height={211}
          priority
          className="h-auto w-auto"
        />
      </div>

      <h1 className="w-[342px] text-center font-pretendard text-[30px] font-bold leading-[44px] tracking-[-0.6px] text-teum-ink">
        3분의 틈,
        <br />잘 사용하셨어요.
      </h1>

      <p className="-mt-[20px] w-[342px] text-center font-pretendard text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-teum-muted">
        짧은 움직임이 쌓여 가벼운 하루가 돼요.
      </p>

      <RoutineCompleteSummary
        durationMinutes={3}
        actionCount={5}
        description="목, 어깨, 허리 스트레칭 완료"
      />

      <button
        type="button"
        onClick={handleFavorite}
        className="flex h-[56px] w-[342px] cursor-pointer items-center justify-center rounded-[28px] bg-teum-tag-bg font-pretendard text-[16px] font-semibold leading-[23px] tracking-[-0.32px] text-teum-ink transition-opacity hover:opacity-90"
      >
        ♡ &nbsp;즐겨찾기에 저장
      </button>

      <div className="flex w-[390px] -mx-[24px] flex-col items-center gap-[12px] border-t border-[#ECEEF0] px-[24px] pt-[24px]">
        <ApplyButton onClick={handleGoHome}>홈으로 돌아가기</ApplyButton>

        <button
          type="button"
          onClick={handleViewHistory}
          className="w-[342px] cursor-pointer text-center font-pretendard text-[13px] font-medium leading-[19px] tracking-[-0.26px] text-teum-muted"
        >
          오늘 기록 보기
        </button>
      </div>
    </main>
  );
}
