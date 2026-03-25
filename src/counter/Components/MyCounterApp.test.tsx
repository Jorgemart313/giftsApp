import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe("MyCounterApp", () => {
  test("Shoul render the component", () => {
    render(<MyCounterApp />);

    screen.debug();

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      "Counter: 5",
    );

    expect(screen.getByRole("button", { name: "+1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "-1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Reset" })).toBeDefined();
  });

  test("Shold increment the counter", () => {
    render(<MyCounterApp />);
    const levelH1 = screen.getByRole("heading", { level: 1 });
    const button = screen.getByRole("button", { name: "+1" });

    fireEvent.click(button);

    expect(levelH1.innerHTML).toContain("Counter: 6");
  });

  test("Shold decrease the counter", () => {
    render(<MyCounterApp />);
    const levelH1 = screen.getByRole("heading", { level: 1 });
    const button = screen.getByRole("button", { name: "-1" });

    fireEvent.click(button);

    expect(levelH1.innerHTML).toContain("Counter: 4");
  });

  test("Shold reset the counter", () => {
    render(<MyCounterApp />);
    const levelH1 = screen.getByRole("heading", { level: 1 });
    const button = screen.getByRole("button", { name: "Reset" });

    fireEvent.click(button);

    expect(levelH1.innerHTML).toContain("Counter: 5");
  });
});
