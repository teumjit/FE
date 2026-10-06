"use client";

import Image from "next/image";
import { Card } from "@/components/ui/Card";

interface QuickBannerCardProps {
  onClick?: () => void;
}

export function QuickBannerCard({ onClick }: QuickBannerCardProps) {
  return (
    <Card
      bgColor="bg-teum-lime"
      className="relative flex cursor-pointer flex-col gap-[4px] transition-transform hover:opacity-95 active:scale-[0.99]"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <h3 className="text-[20px] font-bold leading-[29px] tracking-[-0.4px] text-teum-ink">
        지금 30초만
      </h3>
      <p className="w-[224px] text-[14px] font-normal leading-[19px] tracking-[-0.28px] text-teum-ink">
        짧아도 좋아요.
        <br />
        가볍게 몸을 깨워요.
      </p>
      <div className="absolute right-[20px] top-[20px]">
        <Image src="/icons/now.svg" alt="번개 아이콘" width={64} height={64} />
      </div>
    </Card>
  );
}