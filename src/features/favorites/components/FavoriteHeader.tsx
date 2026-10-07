"use client";

export default function FavoritesHeader() {
  return (
    <header className="flex flex-col gap-[4px] w-full">
      <h1 className="text-[28px] font-bold leading-[41px] tracking-[-0.56px] text-teum-ink font-pretendard">
        즐겨찾기
      </h1>
      <p className="text-[13px] font-normal leading-[145%] text-[#737373] font-pretendard">
        저장한 루틴을 빠르게 다시 시작해보세요
      </p>
    </header>
  );
}
