import { render, screen } from "@testing-library/react";
import Search from "./search";
import userEvent from "@testing-library/user-event";

describe("ThemeSwitch tests", () => {
  it("should render search input", () => {
    render(<Search />);

    const input = screen.getByPlaceholderText("Search...");
    const searchIcon = screen.getByTestId("search-icon");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");
    expect(searchIcon).toBeInTheDocument();
  });

  it.skip("should have typed value in input", async () => {
    const user = userEvent.setup();
    render(<Search />);

    const input = screen.getByPlaceholderText("Search...") as HTMLInputElement;

    await user.type(input, "some text");

    expect(input).toHaveValue("some text");
  });
});
