import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { GisfsApp } from "./GisfsApp";

describe("GifsApp", () => {
  test("Should render component properly", () => {
    /////
    const { container } = render(<GisfsApp />);

    expect(container).toMatchSnapshot();
  });
});
