interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  return (
    <span className="flex h-[34px] items-center gap-[6px] rounded-[10px] bg-teum-tag-bg px-[12px] py-[8px] text-[12px] font-medium leading-[17px] tracking-[-0.24px] text-teum-ink">
      {label}
    </span>
  );
}
