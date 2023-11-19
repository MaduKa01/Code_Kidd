// MobileMenuItem.tsx
import { useHookstate } from "@hookstate/core";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

import bottomBarState from "@/states/bottom-bar";
import { SideBarItem } from "@/types/side-bar.types";

import { BottomBarListItem, ListItemContainer } from "../MobileMenu/styles";
import MobileSubMenuItem from "../MobileSubMenuItem";

type MobileMenuItemProps = {
  item: SideBarItem;
  isOpen: boolean;
  onItemSelected: () => void;
};

const MobileMenuItem = ({ item, onItemSelected, isOpen }: MobileMenuItemProps) => {
  const { selectedItem } = useHookstate(bottomBarState).get({ noproxy: true });
  const { _id, icon, text, subItems } = item;

  const isMenuOrSubmenuSelected = () => {
    if (_id === selectedItem) return true;
    if (subItems && subItems.some((subItem) => subItem._id === selectedItem)) return true;
    return false;
  };

  const renderSubItems = () => {
    return subItems?.map((subItem, subIndex) => (
      <MobileSubMenuItem
        key={subIndex}
        subItem={subItem}
        isSelected={subItem._id === selectedItem}
      />
    ));
  };

  const {
    palette: {
      primary: { main },
    },
  } = useTheme();

  return (
    <div>
      <ListItemContainer>
        <BottomBarListItem
          isSelected={isMenuOrSubmenuSelected()}
          onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            event.stopPropagation();
            onItemSelected();
          }}
        >
          {React.cloneElement(icon as React.ReactElement<{ color?: string }>, { color: main })}
          <ListItemText primary={text} />
          {subItems && (
            <IconButton edge="end" size="small" sx={{ color: "white" }}>
              {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          )}
        </BottomBarListItem>
      </ListItemContainer>
      {isOpen && renderSubItems()}
    </div>
  );
};

export default MobileMenuItem;
