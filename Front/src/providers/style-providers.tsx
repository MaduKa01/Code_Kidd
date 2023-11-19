"use client";

import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";

import themes from "@/themes/client";
import { Themes } from "@/typings/theme";

import createEmotionCache from "../app/create-emotion-cache";

const clientSideEmotionCache = createEmotionCache();

type StyleProvidersProps = {
  children: React.ReactNode;
};

const theme = themes[process.env.NEXT_PUBLIC_THEME as keyof Themes];

export default function StyleProviders({ children }: StyleProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={clientSideEmotionCache}>{children}</CacheProvider>
    </ThemeProvider>
  );
}
