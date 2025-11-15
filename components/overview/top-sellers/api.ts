import { filterDuplicateById } from "@/shared/filterDuplicate";
import { FeaturedCategories, TopSellers, TopSellersItems } from "./types";

const FEATURED_CATEGORIES_URL =
  "https://store.steampowered.com/api/featuredcategories/?cc=de&l=english";

async function getFeaturedCategories(): Promise<
  FeaturedCategories | undefined
> {
  try {
    const response = await fetch(FEATURED_CATEGORIES_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) throw new Error("error");

    const result = (await response.json()) as FeaturedCategories;

    return result;
  } catch (error) {
    console.error("Error occured getFeaturedCategories:", error);
  }

  return;
}

async function getTopSellersFromFeaturedCategories(): Promise<
  TopSellers | undefined
> {
  try {
    const response = await getFeaturedCategories();

    if (!response) throw new Error("error");

    return response.top_sellers;
  } catch (error) {
    console.error("Error occured getTopSellersFromFeaturedCategories:", error);
  }
}

export async function getTopSellersData(): Promise<
  Array<TopSellersItems> | undefined
> {
  try {
    const response = await getTopSellersFromFeaturedCategories();

    if (!response) throw new Error("error");

    const topSellersItems = response.items;

    const filteredTopSellersItems = filterDuplicateById(topSellersItems);

    return filteredTopSellersItems;
  } catch (error) {
    console.error("Error occured getTopSellersData:", error);
  }

  return;
}
