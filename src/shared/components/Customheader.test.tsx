import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Customheader } from "./Customheader";

describe("CustomHeader", () => {
  test("Should  render the tittle correctly", () => {
    const title = "Prueba test";
    //! 1.Arrange
    render(<Customheader title={title} />);
    //! 2.Act
    //screen.debug();
    //! 3.Assert
    expect(screen.getByText(title)).toBeDefined();
  });

  test("Should render the description when provided", () => {
    const description = "Descripcion prueba 1";
    //! 1.Arrange
    render(
      <Customheader title="prueba de descripcion" description={description} />,
    );
    //! 2.Act
    screen.debug();
    //! 3.Assert
    expect(screen.getByText(description)).toBeDefined();
    expect(screen.getByRole("paragraph")).toBeDefined();
  });

  test("Should not render description when not provided", () => {
    const { container } = render(<Customheader title="hola" />);

    screen.debug();

    const divElement = container.querySelector(".content-center");

    const h1 = divElement?.querySelector("h1");
    console.log(h1?.innerHTML);

    const p = divElement?.querySelector("p");
    expect(p).toBeNull;
    console.log(p?.innerHTML);
  });
});
