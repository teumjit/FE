import { ButtonHTMLAttributes } from "react";

interface TagProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Tag({ label, className = "", ...props }: TagProps) {
  return (
    <button
      type="button"
      className={`flex h-[34px] cursor-pointer items-center gap-[6px] rounded-[10px] bg-teum-tag-bg px-[12px] py-[8px] text-[12px] font-medium leading-[17px] tracking-[-0.24px] text-teum-ink transition-opacity hover:opacity-80 ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}