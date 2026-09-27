import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  bgColor?: string;
}

export function Card({
  children,
  className = "",
  bgColor = "bg-teum-white",
}: CardProps) {
  return (
    <div
      className={`w-[342px] rounded-[24px] p-[20px] ${bgColor} ${className}`}
    >
      {children}
    </div>
  );
}
