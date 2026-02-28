import { useQuery } from "@tanstack/react-query";
import { SteamApp } from "./search-result-item";

export function useSearchResults(query: string) {
  return useQuery({
    queryKey: ["search", query],
    queryFn: async (): Promise<SteamApp[]> => {
      if (!query) return [];
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error("Failed to fetch search results");
      const data = await res.json();
      return data.items || [];
    },
    enabled: !!query,
  });
}
