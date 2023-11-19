"use client";
import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";
import { createContext, useCallback, useContext, useState } from "react";

import { ToastContextProps, ToastProps, ToastProviderProps } from "@/types/toast.types";

const INITIAL_TOAST = {
  isVisible: false,
  text: "",
};
export const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<ToastProps>(INITIAL_TOAST);

  const showToast = useCallback(
    ({ duration = 3000, type = "info", isVisible = true, ...rest }: ToastProps) => {
      setToast({ ...rest, duration, type, isVisible });
    },
    []
  );

  const hideToast = (_?: React.SyntheticEvent<unknown> | Event, reason?: SnackbarCloseReason) => {
    if (reason === "clickaway") return;
    setToast(INITIAL_TOAST);
  };

  const contextValue = {
    showToast,
    hideToast,
    toast,
  };
  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <Snackbar open={toast?.isVisible} autoHideDuration={toast?.duration} onClose={hideToast}>
        <Alert severity={toast?.type} onClose={hideToast}>
          {toast?.text}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);
export default useToast;
