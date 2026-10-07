"use client";

export type FilterType = "all" | "3min_or_less" | "4min_or_more";

interface FilterChipsProps {
  selectedFilter: FilterType;
  onSelectFilter: (filter: FilterType) => void;
}

export default function FilterChips({
  selectedFilter,
  onSelectFilter,
}: FilterChipsProps) {
  const filters: { id: FilterType; label: string }[] = [
    { id: "all", label: "전체" },
    { id: "3min_or_less", label: "3분 이하" },
    { id: "4min_or_more", label: "4분 이상" },
  ];

  return (
    <div className="flex items-center gap-[6px]">
      {filters.map((filter) => {
        const isActive = selectedFilter === filter.id;

        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onSelectFilter(filter.id)}
            className={`flex items-center justify-center px-[12px] py-[4px] gap-[10px] rounded-[99px] text-[15px] font-pretendard transition-colors ${
              isActive
                ? "bg-teum-purple text-white font-semibold leading-[145%]"
                : "bg-teum-white border border-[#CED4DB] text-[#616670] font-normal leading-[145%]"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
