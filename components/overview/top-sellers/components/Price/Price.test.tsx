import { render, screen } from "@testing-library/react";
import Price from "./Price";

describe("Price", () => {
  it("renders current price when price is provided", () => {
    render(<Price price={19.99} />);
    expect(screen.getByText("€19.99")).toBeInTheDocument();
  });

  it("renders Free when price is not provided", () => {
    render(<Price />);
    expect(screen.getByText("Free")).toBeInTheDocument();
  });
});
