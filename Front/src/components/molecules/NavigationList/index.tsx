"use client";

import { ListItemButton, ListItemIcon, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

import useLanguage from "@/contexts/language-context";

import { NavigationListCard } from "./styles";
import { NavigationListItem } from "./types";

type NavigationListProps<T = string> = {
  items: NavigationListItem<T>[];
  selectedItem?: T;
  onChangeSelection?: (item: NavigationListItem<T>) => void;
};
export default function NavigationList<T>({
  items,
  selectedItem,
  onChangeSelection,
}: NavigationListProps<T>) {
  const router = useRouter();
  const { lang } = useLanguage();
  const {
    palette: {
      primary: { main },
    },
  } = useTheme();

  function handleOnChangeSelection(item: NavigationListItem<T>) {
    const { href } = item;
    const pathname = href(lang);

    if (onChangeSelection) {
      onChangeSelection(item);
    } else router.push(pathname);
  }

  return (
    <NavigationListCard>
      {items.map((item, index) => {
        const { icon, title, _id, selectedIcon } = item;
        const isSelected = _id === selectedItem;
        return (
          <ListItemButton onClick={() => handleOnChangeSelection(item)} key={`${_id} - ${index}`}>
            <ListItemIcon style={{ minWidth: 35 }}>{isSelected ? selectedIcon : icon}</ListItemIcon>
            <Typography style={{ color: isSelected ? main : "" }}>{title}</Typography>
          </ListItemButton>
        );
      })}
    </NavigationListCard>
  );
}
