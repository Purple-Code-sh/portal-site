import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("Should renders 'Templates'", () => {
    const linkElement = screen.getByText("Templates");
    expect(linkElement).toBeInTheDocument();
  });

  it("Should renders 'Edit the page.tsx file'", () => {
    const linkElement = screen.getByText(/edit the page.tsx file/i);
    expect(linkElement).toBeInTheDocument();
  });
});
