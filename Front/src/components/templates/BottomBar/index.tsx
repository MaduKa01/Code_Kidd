import { useHookstate } from "@hookstate/core";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import { BottomNavigationAction } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

import ROUTE_URLS from "@/constants/route-urls";
import useLanguage from "@/contexts/language-context";
import bottomBarState, { selectBottomBarItem, toggleMobileMenu } from "@/states/bottom-bar";
import { SideBarItem as SideBarItemType } from "@/types/side-bar.types";

import { BottomBarContainer } from "./styles";
import MobileMenu from "../MobileMenu/index";

type BottomBarProps = {
  items: SideBarItemType[];
};

const BottomBar = ({ items }: BottomBarProps) => {
  const { lang } = useLanguage();
  const router = useRouter();
  const { isMobileMenuOpen, selectedItem } = useHookstate(bottomBarState).get({ noproxy: true });
  const pathname = usePathname();

  useEffect(() => {
    for (const item of items) {
      if (item.url && pathname === item.url(lang)) {
        selectBottomBarItem(item._id);
      }
      if (item.subItems) {
        for (const subItem of item.subItems) {
          if (subItem.url && pathname === subItem.url(lang)) {
            selectBottomBarItem(subItem._id);
            break;
          }
        }
      }
    }
  }, [items, lang, pathname, selectedItem]);

  return (
    <BottomBarContainer>
      <BottomNavigationAction icon={<MenuIcon />} onClick={() => toggleMobileMenu(true)} />
      <BottomNavigationAction
        icon={<DashboardIcon />}
        onClick={() => {
          router.push(ROUTE_URLS.dashboard(lang));
        }}
      />

      <BottomNavigationAction
        icon={<AccountCircleIcon />}
        onClick={() => {
          router.push(ROUTE_URLS.profile(lang));
        }}
      />

      <Drawer anchor={"bottom"} open={isMobileMenuOpen} onClose={() => toggleMobileMenu(false)}>
        <MobileMenu items={items} />
      </Drawer>
    </BottomBarContainer>
  );
};

export default BottomBar;
