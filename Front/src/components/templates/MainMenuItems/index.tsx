"use client";

import { useHookstate } from "@hookstate/core";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ListItemIcon, Typography, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useEffect } from "react";

import useDialog from "@/hooks/use-dialog";
import sideBarState from "@/states/side-bar";
import { SideBarItem as SideBarItemType } from "@/types/side-bar.types";

import { SideBarListItem } from "./styles";
import SubMenuItem from "../SubMenuItems";

type MainMenuItemProps = {
  item: SideBarItemType;
};

export default function MainMenuItem({ item }: MainMenuItemProps) {
  const { text, icon, _id } = item;
  const { isVisible: isSubItemsVisible, handleClose, handleOpen } = useDialog();
  const { selectedItem } = useHookstate(sideBarState).get({ noproxy: true });
  const isSelected = selectedItem === item._id;
  const hasSubItems = !!item.subItems && item.subItems.length > 0;
  const showSubItems = hasSubItems && isSubItemsVisible;

  const onClickItem = () => {
    if (hasSubItems) {
      if (isSubItemsVisible) handleClose();
      else handleOpen();
    }
  };

  useEffect(() => {
    if (!item.subItems) return;
    for (const sub of item.subItems) {
      if (selectedItem === sub._id) handleOpen();
    }
  }, [item.subItems, selectedItem, handleOpen]);
  const {
    palette: {
      primary: { main },
    },
  } = useTheme();
  return (
    <Grid md={1} xs={1} sm={1} lg={1}>
      <SideBarListItem
        isSelected={isSelected}
        onClick={onClickItem}
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            minWidth: "155px",
            maxWidth: "160px",
          }}
        >
          <ListItemIcon style={{ minWidth: 35 }}>
            {React.cloneElement(icon as React.ReactElement<{ color?: string }>, { color: main })}
          </ListItemIcon>

          <Typography
            sx={{
              color: "black",
            }}
            fontSize={14.5}
          >
            {text}
          </Typography>
        </div>
        <IconButton edge="end" size="small">
          {isSubItemsVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </SideBarListItem>
      {showSubItems &&
        item.subItems?.map((subItem, index) => {
          return <SubMenuItem subItem={subItem} key={`${index} - ${_id} - ${subItem._id}`} />;
        })}
    </Grid>
  );
}
