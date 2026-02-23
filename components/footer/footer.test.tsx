import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";

describe("Footer", () => {
  it("renders links correctly", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /disclaimer/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /data source/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
  });

  it("renders copyright and disclaimer text", () => {
    render(<Footer />);
    expect(screen.getByText(/sourced from/i)).toBeInTheDocument();
    expect(
      screen.getByText(/not endorsed by or associated with Valve Corporation/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Built by/i)).toBeInTheDocument();
  });
});
