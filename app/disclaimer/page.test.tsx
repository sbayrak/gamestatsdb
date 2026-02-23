import { render, screen } from "@testing-library/react";
import DisclaimerPage from "./page";

describe("Disclaimer Page", () => {
  it("renders heading and disclaimer text", () => {
    render(<DisclaimerPage />);
    expect(
      screen.getByRole("heading", { name: /Disclaimer/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/not affiliated with.*Valve Corporation/i),
    ).toBeInTheDocument();
  });
});
