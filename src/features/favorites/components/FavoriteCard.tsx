"use client";

import Image from "next/image";
import { FavoriteRoutine } from "../types/favorite";

interface FavoriteCardProps {
  routine: FavoriteRoutine;
  onClick?: (id: string) => void;
  onToggleFavorite?: (id: string) => void;
}

export default function FavoriteCard({
  routine,
  onClick,
  onToggleFavorite,
}: FavoriteCardProps) {
  const { id, durationText, title, createdAtText, tags, isFavorite } = routine;

  return (
    <button
      type="button"
      onClick={() => onClick?.(id)}
      className="relative flex items-start w-full p-[12px] gap-[18px] bg-white rounded-[12px] text-left cursor-pointer hover:shadow-sm transition-shadow"
    >
      <div className="flex justify-center items-center w-[87px] self-stretch p-[7px_9px_11px_10px] gap-[10px] bg-teum-tint rounded-[12px] shrink-0">
        <Image
          src="/images/stretch-ex.svg"
          alt={title}
          width={69}
          height={69}
          className="object-contain"
        />
      </div>

      <div className="flex flex-col flex-1 min-w-0 pr-[24px]">
        <div className="inline-flex items-center justify-center px-[10px] py-[3px] gap-[10px] rounded-[99px] bg-[#EDFCB9] w-max">
          <span className="text-[12px] font-semibold leading-[145%] text-[#20211F] font-pretendard">
            {durationText}
          </span>
        </div>

        <h3 className="mt-[8px] self-stretch text-[17px] font-bold leading-[145%] text-[#2E2E2E] font-pretendard truncate">
          {title}
        </h3>

        <p className="mt-[2px] self-stretch text-[12px] font-normal leading-[145%] text-[#616670] font-pretendard">
          {createdAtText}
        </p>

        <div className="mt-[20px] flex items-center gap-[4px] flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center justify-center px-[10px] py-[3px] gap-[10px] rounded-[99px] bg-[#ECEEF0] text-[12px] font-medium leading-[145%] text-[#3C3F45] font-pretendard"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite?.(id);
        }}
        className="absolute top-[12px] right-[12px] p-1 cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="즐겨찾기 해제"
      >
        <Image
          src="/images/heart.svg"
          alt="favorite icon"
          width={24}
          height={24}
        />
      </button>
    </button>
  );
}
