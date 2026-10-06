"use client";

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-[24px] w-[46px] shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out ${
        checked ? "bg-[#A394F5]" : "bg-[#ECEEF0]"
      }`}
    >
      <span
        className={`inline-block h-[22px] w-[22px] transform rounded-full bg-white shadow-xs transition duration-200 ease-in-out ${
          checked ? "translate-x-[23px]" : "translate-x-[1px]"
        }`}
      />
    </button>
  );
}
