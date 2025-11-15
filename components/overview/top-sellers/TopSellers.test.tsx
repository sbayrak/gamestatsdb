import React from "react";
import { render, screen } from "@testing-library/react";
import TopSellers from "./TopSellers";
import { getTopSellersData } from "./api";

jest.mock("./api", () => ({
  getTopSellersData: jest.fn(),
}));

// Embla Carousel uses matchMedia, IntersectionObserver, etc. — not available in jsdom
jest.mock("@/components/ui/carousel", () => ({
  Carousel: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  CarouselContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  CarouselItem: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  CarouselPrevious: () => null,
  CarouselNext: () => null,
}));

const mockGetTopSellersData = getTopSellersData as jest.MockedFunction<
  typeof getTopSellersData
>;

const mockTopSellers = [
  {
    id: 12345,
    type: 0,
    name: "Test Game",
    discounted: true,
    discount_percent: 50,
    original_price: 1999,
    final_price: 999,
    currency: "EUR",
    large_capsule_image: "https://example.com/large.jpg",
    small_capsule_image: "https://example.com/small.jpg",
    windows_available: true,
    mac_available: false,
    linux_available: false,
    streamingvideo_available: false,
    header_image: "https://example.com/header.jpg",
    controller_support: "full",
    is_free: false,
  },
];

describe("TopSellers", () => {
  beforeEach(() => {
    mockGetTopSellersData.mockResolvedValue(mockTopSellers);
  });

  it("renders Top Sellers title", async () => {
    render(await TopSellers());
    expect(screen.getByText("Top Sellers")).toBeInTheDocument();
  });

  it("renders game card with image alt from API data", async () => {
    render(await TopSellers());
    expect(screen.getByAltText("Test Game")).toBeInTheDocument();
  });

  it("renders link to Steam store for each game", async () => {
    render(await TopSellers());
    const link = screen.getByRole("link", { name: /test game/i });
    expect(link).toHaveAttribute("href", "https://store.steampowered.com/app/12345");
  });

  it("renders discount when game has discount", async () => {
    render(await TopSellers());
    expect(screen.getByText("-50%")).toBeInTheDocument();
  });

  it("renders price from API data", async () => {
    render(await TopSellers());
    expect(screen.getByText("€9.99")).toBeInTheDocument();
  });

  it("renders nothing for game list when API returns undefined", async () => {
    mockGetTopSellersData.mockResolvedValue(undefined);
    render(await TopSellers());
    expect(screen.getByText("Top Sellers")).toBeInTheDocument();
    expect(screen.queryByText("Test Game")).not.toBeInTheDocument();
  });
});
