"use client";

import { LocalizationProvider as MUILocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import "dayjs/locale/pt-br";

type LocalizationProviderProps = {
  children: React.ReactNode;
};

export default function LocalizationProvider({ children }: LocalizationProviderProps) {
  return (
    <MUILocalizationProvider adapterLocale="pt-br" dateAdapter={AdapterDayjs}>
      {children}
    </MUILocalizationProvider>
  );
}
