import { render, screen } from "@testing-library/react";
import ContactPage from "./page";

describe("Contact Page", () => {
  it("renders heading and content", () => {
    render(<ContactPage />);
    expect(
      screen.getByRole("heading", { name: /Contact/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Suat Bayrak/i)).toBeInTheDocument();
  });
});
