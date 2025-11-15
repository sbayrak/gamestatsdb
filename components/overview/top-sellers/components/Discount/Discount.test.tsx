import { render, screen } from "@testing-library/react";
import Discount from "./Discount";

describe("Discount", () => {
  it("renders discount percent with minus sign", () => {
    render(<Discount discount_percent={50} />);
    expect(screen.getByText("-50%")).toBeInTheDocument();
  });
});
