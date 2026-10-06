"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export type Difficulty = "쉬움" | "중간" | "어려움";

interface DifficultyDropdownProps {
  value?: Difficulty;
  onChange?: (value: Difficulty) => void;
}

export function DifficultyDropdown({
  value = "중간",
  onChange,
}: DifficultyDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Difficulty>(value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options: Difficulty[] = ["쉬움", "중간", "어려움"];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: Difficulty) => {
    setSelected(option);
    onChange?.(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex cursor-pointer items-center gap-[3px] rounded-[12px] bg-[#D5CDFF] px-[8px] py-[4px] text-[13px] font-medium leading-[20px] tracking-[-0.26px] text-teum-ink transition-opacity hover:opacity-90"
      >
        <span>{selected}</span>
        <Image
          src="/icons/chevron-right.svg"
          alt="드롭다운 화살표"
          width={20}
          height={20}
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-[-90deg]" : "rotate-90"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-[calc(100%+5px)] z-20 flex w-[78px] flex-col overflow-hidden rounded-[14px] bg-white shadow-lg">
          {options.map((option) => {
            const isSelected = selected === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`flex w-full cursor-pointer items-center justify-center gap-[3px] p-[8px] text-[13px] font-medium leading-[20px] tracking-[-0.26px] text-teum-ink transition-colors ${
                  isSelected
                    ? "bg-[#DDD7FF]"
                    : "bg-[#EEEBFF] hover:bg-[#E2DCFF]"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
