"use client";

import { useHookstate } from "@hookstate/core";
import { useTheme } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

import FullLogoSecondary from "@/assets/logos/full-logo-secondary.png";
import useAuth from "@/contexts/auth-context";
import useLanguage from "@/contexts/language-context";
import useUserData from "@/hooks/data/use-user-data";
import sideBarState, { selectSideBarItem } from "@/states/side-bar";
import { SideBarItem as SideBarItemType } from "@/types/side-bar.types";

import {
  SideBarContainer,
  SideBarContentContainer,
  SideBarDivider,
  SideBarInfoContainer,
  SideBarItemsContainer,
  UserNameText,
} from "./styles";
import MainMenuItem from "../MainMenuItems";

type SideBarProps = {
  items: SideBarItemType[];
};

export default function SideBar({ items }: SideBarProps) {
  const { selectedItem } = useHookstate(sideBarState).get({ noproxy: true });
  const { lang } = useLanguage();
  const pathname = usePathname();
  const { user } = useAuth();
  const { name: userName = "" } = useUserData({ user });

  const {
    sideBar: { width },
    margins: { xxxl, lg, xl },
  } = useTheme();

  const logoWidth = width;

  useEffect(() => {
    for (const item of items) {
      if (item.url && pathname === item.url(lang)) {
        selectSideBarItem(item._id);
      }
      if (item.subItems) {
        for (const subItem of item.subItems) {
          if (subItem.url && pathname === subItem.url(lang)) {
            selectSideBarItem(subItem._id);
            break;
          }
        }
      }
    }
  }, [items, lang, pathname, selectedItem]);

  return (
    <SideBarContainer
      sx={{ display: { xs: "block", md: "block", lg: "block" } }}
      container
      columns={1}
      rowSpacing={0}
      overflow="auto"
      display="flex"
      flexDirection="column"
      flexWrap="nowrap"
    >
      <SideBarInfoContainer
        md={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        <SideBarContentContainer
          height={xxxl}
          md={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <Image
            src={FullLogoSecondary}
            priority
            width={logoWidth}
            height={lg}
            alt="Talk2Buy logo"
          />
          <SideBarDivider />
        </SideBarContentContainer>
        <SideBarContentContainer
          height={xl}
          md={1}
          minWidth="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <UserNameText color="text.secondary">{userName}</UserNameText>
          <SideBarDivider />
        </SideBarContentContainer>
      </SideBarInfoContainer>
      <SideBarItemsContainer
        md={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        {items.map((item, index) => {
          const { _id } = item;
          if (item.ingnoreOnMenu) return null;
          return (
            <React.Fragment key={`${index} - ${_id}`}>
              <MainMenuItem item={item} />
            </React.Fragment>
          );
        })}
      </SideBarItemsContainer>
    </SideBarContainer>
  );
}
