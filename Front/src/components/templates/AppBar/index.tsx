"use client";

import AccountCircle from "@mui/icons-material/AccountCircle";
import Home from "@mui/icons-material/Home";
import Logout from "@mui/icons-material/Logout";
import { Breadcrumbs, IconButton, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";

import ROUTE_URLS from "@/constants/route-urls";
import useAuth from "@/contexts/auth-context";
import useLanguage from "@/contexts/language-context";
import useBreakpoint from "@/hooks/use-breakpoint";
import { BreadCrumb } from "@/types/page.types";

import { AppBarGrid } from "./styles";

type AppBarProps = {
  title: string;
  breadCrumbs?: BreadCrumb[];
};

export default function AppBar({ title, breadCrumbs }: AppBarProps) {
  const { lang } = useLanguage();
  const { logout } = useAuth();
  const [isScrolling, setIsScrolling] = useState(false);
  const { isMobile, isTablet } = useBreakpoint();

  const listenScrollEvent = () => {
    if (window.scrollY > 1) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <AppBarGrid
      position="static"
      isScrolling={isScrolling}
      ignoreSideBar={isMobile || isTablet}
      md={12}
    >
      <Breadcrumbs maxItems={3} aria-label="breadcrumb">
        <Link href={ROUTE_URLS.dashboard(lang)}>
          <IconButton>
            <Home />
          </IconButton>
        </Link>

        {!isMobile &&
          breadCrumbs?.map((item, index) => {
            const { title: _title, href } = item;
            return (
              <Link underline="hover" color="inherit" href={href} key={`${index} - ${_title}`}>
                {_title}
              </Link>
            );
          })}

        <Typography color="text.primary">{title}</Typography>
      </Breadcrumbs>

      <Grid container spacing={2}>
        {!isMobile && (
          <Grid>
            <Link href={ROUTE_URLS.profile(lang)}>
              <IconButton>
                <AccountCircle />
              </IconButton>
            </Link>
          </Grid>
        )}
        <Grid>
          <IconButton onClick={() => logout()}>
            <Logout />
          </IconButton>
        </Grid>
      </Grid>
    </AppBarGrid>
  );
}
