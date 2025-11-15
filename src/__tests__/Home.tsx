import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
  beforeEach(() => {});

  it("Should renders 'Templates'", () => {
    render(<Home />);
    const linkElement = screen.getByText("Templates");
    expect(linkElement).toBeInTheDocument();
  });

  it("Should renders 'Edit the page.tsx file'", () => {
    render(<Home />);
    const linkElement = screen.getByText(/edit the page.tsx file/i);
    expect(linkElement).toBeInTheDocument();
  });
});
