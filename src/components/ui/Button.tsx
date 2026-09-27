import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "active";
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyle =
    "flex items-center justify-center font-medium transition-colors cursor-pointer";

  const variants = {
    primary:
      "bg-teum-ink text-teum-white rounded-[28px] h-[56px] w-[302px] text-[16px] font-bold leading-[23px] tracking-[-0.32px]",
    secondary:
      "bg-white/35 border border-white/55 text-teum-ink rounded-[14px] h-[42px] w-[302px] text-[13px] font-semibold leading-[19px] tracking-[-0.26px]",
    outline:
      "border border-teum-line bg-teum-white text-teum-ink rounded-[22px] h-[44px] w-[71px] text-[14px] leading-[20px] tracking-[-0.28px]",
    active:
      "bg-teum-lime text-teum-ink rounded-[22px] h-[44px] w-[71px] text-[14px] leading-[20px] tracking-[-0.28px]",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
