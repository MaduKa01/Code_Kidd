"use client";
import { GridProps, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

import SIDE_BAR_ITEMS from "@/constants/side-bar";
import useBreakpoint from "@/hooks/use-breakpoint";
import { SidebarMessages } from "@/messages/layout/sidebar";
import { BreadCrumb } from "@/types/page.types";

import { PageLayoutGrid } from "./styles";
import AppBar from "../AppBar";
import BottomBar from "../BottomBar";
import SideBar from "../SideBar";

type PageLayoutProps = {
  backgroundColor?: string;
  ignoreSideBar?: boolean;
  ignoreAppBar?: boolean;
  title?: string;
  breadCrumbs?: BreadCrumb[];
  messages: SidebarMessages;
} & GridProps;

const PageLayout: React.FC<PageLayoutProps> = ({
  backgroundColor,
  children,
  ignoreAppBar = false,
  ignoreSideBar = false,
  breadCrumbs,
  title,
  messages,
  ...rest
}) => {
  const {
    palette: {
      secondary: { dark },
    },
  } = useTheme();
  const { isMobile, isTablet } = useBreakpoint();
  const ITEMS = SIDE_BAR_ITEMS(messages);

  return (
    <Grid
      spacing={10}
      style={{
        backgroundColor: backgroundColor ?? dark,
        minHeight: "100vh",
      }}
    >
      {(isMobile || isTablet) && !ignoreAppBar && <BottomBar items={ITEMS} />}
      {!isTablet && !isMobile && !ignoreSideBar && <SideBar items={ITEMS} />}
      {!ignoreAppBar && <AppBar title={title || ""} breadCrumbs={breadCrumbs} />}
      <PageLayoutGrid
        container
        spacing={2}
        ignoreSideBar={ignoreSideBar || isMobile || isTablet}
        ignoreAppBar={ignoreAppBar}
        backgroundColor={backgroundColor}
        {...rest}
      >
        {children}
      </PageLayoutGrid>
    </Grid>
  );
};

export default PageLayout;
