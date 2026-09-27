import { Header } from "@/features/home/Header";
import { TimeSelectionCard } from "@/features/home/TimeSelectionCard";
import { QuickBannerCard } from "@/features/home/QuickBannerCard";
import { RecentStretchingCard } from "@/features/home/RecentStretchingCard";

export default function HomePage() {
  return (
    <main className="mx-auto flex h-[844px] w-[390px] flex-col items-start gap-[20px] rounded-[32px] bg-teum-bg p-[24px]">
      <Header />
      <TimeSelectionCard />
      <QuickBannerCard />
      <RecentStretchingCard />
    </main>
  );
}
