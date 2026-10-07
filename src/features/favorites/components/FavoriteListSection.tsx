"use client";

import { FavoriteRoutine } from "../types/favorite";
import FavoriteCard from "./FavoriteCard";

interface FavoriteListSectionProps {
  routines: FavoriteRoutine[];
  onCardClick?: (id: string) => void;
  onToggleFavorite?: (id: string) => void;
}

export default function FavoriteListSection({
  routines,
  onCardClick,
  onToggleFavorite,
}: FavoriteListSectionProps) {
  return (
    <section className="flex flex-col gap-[12px] w-full">
      <h2 className="text-[15px] font-semibold leading-[145%] text-teum-ink font-pretendard">
        저장한 루틴 {routines.length}개
      </h2>

      <div className="flex flex-col gap-[12px] w-full">
        {routines.map((routine) => (
          <FavoriteCard
            key={routine.id}
            routine={routine}
            onClick={onCardClick}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}
