import { render, screen } from "@testing-library/react";
import DataSourcePage from "./page";

describe("Data Source Page", () => {
  it("renders heading and source text", () => {
    render(<DataSourcePage />);
    expect(
      screen.getByRole("heading", { name: /Data Source/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /We query these endpoints periodically to provide you with the most up-to-date/i,
      ),
    ).toBeInTheDocument();
  });
});
