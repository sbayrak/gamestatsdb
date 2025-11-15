export interface FeaturedCategories {
  top_sellers: TopSellers;
}

export interface TopSellersItems {
  id: number;
  type: number;
  name: string;
  discounted: boolean;
  discount_percent: number;
  original_price: number;
  final_price: number;
  currency: string;
  large_capsule_image: string;
  small_capsule_image: string;
  windows_available: boolean;
  mac_available: boolean;
  linux_available: boolean;
  streamingvideo_available: boolean;
  header_image: string;
  controller_support: string;
  is_free: boolean;
}

export interface TopSellers {
  id: string;
  name: string;
  items: Array<TopSellersItems>;
}



 