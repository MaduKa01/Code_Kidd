import { act, render, renderHook } from "@testing-library/react";

import "@testing-library/jest-dom";
import GLOBAL_TEST_IDS from "@/constants/global-test-ids";

import useLoading, { UseLoadingReturn } from "../use-loading";

describe("useLoading", () => {
  let hookResult: {
    current: UseLoadingReturn;
  };

  beforeEach(() => {
    const { result } = renderHook(() => useLoading());
    hookResult = result;
  });

  it("starts with loading being false", () => {
    expect(hookResult.current.isLoading).toBeFalsy();
  });

  it("starts loading when startLoading is called", () => {
    act(() => {
      hookResult.current.startLoading();
    });

    expect(hookResult.current.isLoading).toBeTruthy();
  });

  it("stops loading when endLoading is called", () => {
    act(() => {
      hookResult.current.startLoading();
    });

    expect(hookResult.current.isLoading).toBeTruthy();

    act(() => {
      hookResult.current.endLoading();
    });

    expect(hookResult.current.isLoading).toBeFalsy();
  });
  it("returns correct loading icon ", () => {
    const { getByTestId } = render(hookResult.current.loadingIcon);

    const loadingIcon = getByTestId(GLOBAL_TEST_IDS.circularProgress);

    expect(loadingIcon).toBeTruthy();
  });
});
