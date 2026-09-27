import Image from "next/image";

export function Header() {
  return (
    <header className="flex w-full items-center justify-between">
      <Image
        src="/icons/teumjitlogo.svg"
        alt="틈짓 로고"
        width={89}
        height={43}
        priority
      />
      <button type="button" aria-label="설정" className="p-1">
        <Image src="/icons/settings.svg" alt="설정" width={24} height={24} />
      </button>
    </header>
  );
}