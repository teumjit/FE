import Image from "next/image";

interface RecentStretchingProps {
  title?: string;
  timeInfo?: string;
}

export function RecentStretchingCard({
  title = "아침 얼굴 깨우기",
  timeInfo = "3분 · 오늘 오전 8:30",
}: RecentStretchingProps) {
  return (
    <section className="flex w-[342px] flex-col gap-[12px]">
      {/* 헤더 */}
      <div className="flex w-full items-center justify-between">
        <h3 className="text-[17px] font-bold leading-[25px] tracking-[-0.34px] text-teum-ink">
          최근 한 스트레칭
        </h3>
        <button className="flex items-center gap-[4px] cursor-pointer">
          <span className="text-[13px] font-medium leading-[17px] tracking-[-0.26px] text-gray-500">
            더보기
          </span>
          <Image
            src="/icons/chevron-right.svg"
            alt="더보기"
            width={16}
            height={16}
          />
        </button>
      </div>

      {/* 리스트 아이템 카드 */}
      <div className="flex w-full items-start gap-[12px] rounded-[24px] bg-teum-white p-[12px]">
        <Image
          src="/icons/light.svg"
          alt="스트레칭 아이콘"
          width={40}
          height={40}
        />
        <div className="flex flex-col gap-[4px]">
          <span className="text-[15px] font-medium leading-[20px] tracking-[-0.3px] text-teum-ink">
            {title}
          </span>
          <span className="text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-gray-500">
            {timeInfo}
          </span>
        </div>
      </div>
    </section>
  );
}
