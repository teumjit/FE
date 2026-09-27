"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

export function TimeSelectionCard() {
  const [selectedTime, setSelectedTime] = useState<string>("3분");
  const timeOptions = ["1분", "3분", "5분", "10분"];
  const currentTags = ["집", "서 있음", "목", "어깨", "허리"];

  return (
    <Card bgColor="bg-teum-purple" className="flex flex-col gap-[12px]">
      <h2 className="text-[22px] font-bold leading-normal tracking-[-0.44px] text-teum-ink">
        지금 몇 분 있어요?
      </h2>

      {/* 시간 선택 버튼 목록 */}
      <div className="flex gap-[6px]">
        {timeOptions.map((time) => (
          <Button
            key={time}
            variant={selectedTime === time ? "active" : "outline"}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </Button>
        ))}
      </div>

      {/* 원하는 시간 직접 설정 */}
      <Button variant="secondary" className="gap-[8px]">
        <Image src="/icons/time.svg" alt="시계" width={18} height={18} />
        <span>원하는 시간 직접 설정</span>
      </Button>

      {/* 현재 상황 태그 카드 */}
      <div className="flex h-[92px] w-[302px] flex-col gap-[10px] rounded-[18px] bg-white/92 p-[14px_16px]">
        <div className="flex w-full items-center justify-between">
          <span className="text-[14px] font-bold leading-[17px] tracking-[-0.28px] text-teum-text-sub">
            현재 상황
          </span>
          <button className="flex items-center gap-[4px] cursor-pointer">
            <span className="text-[14px] font-medium leading-[17px] tracking-[-0.28px] text-teum-ink">
              수정
            </span>
            <Image
              src="/icons/chevron-right.svg"
              alt="더보기"
              width={20}
              height={20}
            />
          </button>
        </div>

        <div className="flex items-center gap-[4px]">
          {currentTags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>

      {/* 스트레칭 시작하기 */}
      <Button variant="primary">스트레칭 시작하기</Button>
    </Card>
  );
}
