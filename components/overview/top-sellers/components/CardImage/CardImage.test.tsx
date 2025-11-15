import { render, screen } from "@testing-library/react";
import CardImage from "./CardImage";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

describe("CardImage", () => {
  it("renders image with src and alt", () => {
    render(
      <CardImage src="https://example.com/game.jpg" alt="Game cover" />
    );
    const img = screen.getByRole("img", { name: "Game cover" });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://example.com/game.jpg");
  });
});
