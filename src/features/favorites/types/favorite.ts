export interface FavoriteRoutine {
  id: string;
  durationText: string;
  title: string;
  createdAtText: string;
  tags: string[];
  isFavorite: boolean;
  category: "3min_or_less" | "4min_or_more";
}
