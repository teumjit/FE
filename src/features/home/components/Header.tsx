"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

export function Header({ title, onBack }: HeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <header className="flex w-full items-center gap-[12px] pt-[24px]">
      <button
        type="button"
        onClick={handleBack}
        className="flex cursor-pointer items-center justify-center p-0"
      >
        <Image src="/icons/back.svg" alt="뒤로가기" width={24} height={24} />
      </button>
      <span className="text-[16px] font-medium leading-[20px] tracking-[-0.32px] text-teum-ink">
        {title}
      </span>
    </header>
  );
}
