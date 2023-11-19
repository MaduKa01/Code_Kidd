"use client";
import { CircularProgress } from "@mui/material";
import { ReactElement, useMemo, useState } from "react";

import GLOBAL_TEST_IDS from "@/constants/global-test-ids";
import { Colors } from "@/typings/theme";

export type UseLoadingReturn = {
  isLoading: boolean;
  startLoading: () => void;
  endLoading: () => void;
  loadingIcon: ReactElement<unknown, string>;
};

export type UseLoadingProps = {
  loadingIconColor?: Colors;
  loadingIconSize?: number;
  initialState?: boolean;
};

// Hook used in order to control the loading states of the application
const useLoading = (props?: UseLoadingProps): UseLoadingReturn => {
  const {
    loadingIconColor = "secondary",
    loadingIconSize = 20,
    initialState = false,
  } = props || {};

  const [isLoading, setIsLoading] = useState<boolean>(initialState);

  const startLoading = () => {
    setIsLoading(true);
  };

  const endLoading = () => {
    setIsLoading(false);
  };
  const memoizedEndLoading = useMemo(() => {
    return endLoading;
  }, []);
  const memoizedStartLoading = useMemo(() => {
    return startLoading;
  }, []);

  const loadingIcon = (
    <CircularProgress
      data-testid={GLOBAL_TEST_IDS.circularProgress}
      color={loadingIconColor}
      size={loadingIconSize}
    />
  );

  return {
    isLoading,
    startLoading: memoizedStartLoading,
    endLoading: memoizedEndLoading,
    loadingIcon,
  };
};

export default useLoading;
