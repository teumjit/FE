import { ReactNode } from "react";

interface SettingItemCardProps {
  label: string;
  value?: string;
  rightElement?: ReactNode;
  onClick?: () => void;
}

export function SettingItemCard({
  label,
  value,
  rightElement,
  onClick,
}: SettingItemCardProps) {
  return (
    <div
      onClick={onClick}
      className={`flex h-[64px] w-[342px] items-center justify-between rounded-[18px] bg-teum-white px-[20px] ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      <span className="flex-1 text-[15px] font-medium leading-[22px] tracking-[-0.3px] text-teum-ink">
        {label}
      </span>
      {value && (
        <span className="text-[14px] font-normal leading-[19px] tracking-[-0.28px] text-teum-text-sub">
          {value}
        </span>
      )}
      {rightElement && <div>{rightElement}</div>}
    </div>
  );
}
