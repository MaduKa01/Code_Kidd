import { act, render, renderHook } from "@testing-library/react";

import "@testing-library/jest-dom";
import GLOBAL_TEST_IDS from "@/constants/global-test-ids";

import useShowPassword, { UseShowPasswordReturn } from "../use-show-password";

describe("useShowPassword", () => {
  let hookResult: {
    current: UseShowPasswordReturn;
  };

  beforeEach(() => {
    const { result } = renderHook(() => useShowPassword());
    hookResult = result;
  });

  it("starts with password hidden", () => {
    expect(hookResult.current.isPasswordVisible).toBeFalsy();
  });

  it("shows password when showPassword is called", () => {
    act(() => {
      hookResult.current.showPassword();
    });

    expect(hookResult.current.isPasswordVisible).toBeTruthy();
  });

  it("hides password when hidePassword is called", () => {
    act(() => {
      hookResult.current.showPassword();
    });

    expect(hookResult.current.isPasswordVisible).toBeTruthy();

    act(() => {
      hookResult.current.hidePassword();
    });

    expect(hookResult.current.isPasswordVisible).toBeFalsy();
  });
  it("maintains separate state for multiple instances", () => {
    const { result: firstResult } = renderHook(() => useShowPassword());
    const { result: secondResult } = renderHook(() => useShowPassword());

    act(() => {
      firstResult.current.showPassword();
    });

    expect(firstResult.current.isPasswordVisible).toBe(true);
    expect(secondResult.current.isPasswordVisible).toBe(false);
  });
  it("changes input type depending if password is visible or not", () => {
    act(() => {
      hookResult.current.showPassword();
    });

    expect(hookResult.current.isPasswordVisible).toBeTruthy();
    expect(hookResult.current.inputType).toBe("text");

    act(() => {
      hookResult.current.hidePassword();
    });

    expect(hookResult.current.isPasswordVisible).toBeFalsy();
    expect(hookResult.current.inputType).toBe("password");
  });
  it("changes visibility of password when handlePasswordVisibility is called ", () => {
    expect(hookResult.current.isPasswordVisible).toBeFalsy();

    act(() => {
      hookResult.current.handlePasswordVisibility();
    });

    expect(hookResult.current.isPasswordVisible).toBeTruthy();

    act(() => {
      hookResult.current.handlePasswordVisibility();
    });

    expect(hookResult.current.isPasswordVisible).toBeFalsy();
  });
  it("shows visibilityOffIcon when password is visible ", () => {
    act(() => {
      hookResult.current.showPassword();
    });
    const { getByTestId } = render(hookResult.current.inputIcon);

    const inputIcon = getByTestId(GLOBAL_TEST_IDS.visibilityOffIcon);

    expect(inputIcon).toBeTruthy();
  });
  it("shows visibilityIcon when password is hidden ", () => {
    const { getByTestId } = render(hookResult.current.inputIcon);

    const inputIcon = getByTestId(GLOBAL_TEST_IDS.visibilityIcon);

    expect(inputIcon).toBeTruthy();
  });
});
