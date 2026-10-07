interface StretchingProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function StretchingProgress({
  currentStep,
  totalSteps,
}: StretchingProgressProps) {
  const progressPercent = Math.min(
    100,
    Math.max(0, (currentStep / totalSteps) * 100),
  );

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-[7px] rounded-[12px] bg-[#ECEEF0] px-[8px] py-[4px] font-pretendard text-[14px] font-medium leading-[19px] tracking-[-0.28px]">
        <span className="text-[#3C3F45]">단계</span>
        <span className="text-teum-purple">
          {currentStep}/{totalSteps}
        </span>
      </div>

      <div className="relative h-[8px] w-[254px] overflow-hidden rounded-[99px] bg-[#CED4DB]">
        <div
          className="h-full rounded-[99px] bg-teum-lime transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
