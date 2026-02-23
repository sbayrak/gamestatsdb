import { render, screen } from "@testing-library/react";
import AboutPage from "./page";

describe("About Page", () => {
  it("renders heading and content", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", { name: /About GamestatsDB/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /premier destination for comprehensive Steam game statistics/i,
      ),
    ).toBeInTheDocument();
  });
});
