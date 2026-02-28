import { render, screen } from "@testing-library/react";
import SearchResults from "./search-results";
import * as useSearchResultsHook from "./use-search-results";

// Mock the module
jest.mock("./use-search-results", () => ({
  useSearchResults: jest.fn(),
}));

describe("SearchResults", () => {
  const mockSteamApp = {
    id: 730,
    name: "Counter-Strike 2",
    tiny_image: "https://example.com/cs2.jpg",
    platforms: { windows: true, mac: false, linux: true },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should show prompt when query is empty", () => {
    jest.spyOn(useSearchResultsHook, "useSearchResults").mockReturnValue({
      data: [],
      isLoading: false,
      isError: false,
    } as unknown as ReturnType<typeof useSearchResultsHook.useSearchResults>);

    render(<SearchResults query="" />);
    expect(
      screen.getByText(/Enter a game name to search/i),
    ).toBeInTheDocument();
  });

  it("should show loading state", () => {
    jest.spyOn(useSearchResultsHook, "useSearchResults").mockReturnValue({
      data: [],
      isLoading: true,
      isError: false,
    } as unknown as ReturnType<typeof useSearchResultsHook.useSearchResults>);

    // Provide a query so it triggers the loading branch
    const { container } = render(<SearchResults query="counter" />);
    // Testing the loading spinner presence by class since it has no text
    expect(container.querySelector(".animate-spin")).toBeInTheDocument();
  });

  it("should show empty state when no results found", () => {
    jest.spyOn(useSearchResultsHook, "useSearchResults").mockReturnValue({
      data: [],
      isLoading: false,
      isError: false,
    } as unknown as ReturnType<typeof useSearchResultsHook.useSearchResults>);

    render(<SearchResults query="UnknownGameNotReal" />);
    expect(
      screen.getByText(/No games found for "UnknownGameNotReal"/i),
    ).toBeInTheDocument();
  });

  it("should render results when data is present", () => {
    jest.spyOn(useSearchResultsHook, "useSearchResults").mockReturnValue({
      data: [mockSteamApp],
      isLoading: false,
      isError: false,
    } as unknown as ReturnType<typeof useSearchResultsHook.useSearchResults>);

    render(<SearchResults query="counter" />);
    expect(screen.getByText("Counter-Strike 2")).toBeInTheDocument();
  });
});
