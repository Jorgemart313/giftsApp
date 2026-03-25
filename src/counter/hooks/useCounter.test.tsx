import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  // const { result } = renderHook(() => useCounter());

  test("Should initialize with default value of 5", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(5);
  });

  test("Should initialize with other value", () => {
    const { result } = renderHook(() => useCounter(20));

    expect(result.current.counter).toBe(20);
  });

  test("Should increment counter when handleAdd is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(6);
  });

  test("Should decrease when handleSubstract is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleSubstract();
    });

    expect(result.current.counter).toBe(4);
  });

  test("Shold reset to 5 when reset botton is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleReset();
    });

    expect(result.current.counter).toBe(5);
  });
});
