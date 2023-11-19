// hooks/useSelectedMenuItem.ts
import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";

import sideBarState from "@/states/side-bar";
import { SideBarItem as SideBarItemType } from "@/types/side-bar.types";

export const useSelectedMenuItem = (item: SideBarItemType) => {
  const { selectedItem } = useHookstate(sideBarState).get({ noproxy: true });
  const [isSelected, setIsSelected] = useState(false);
  const [showSubItems, setShowSubItems] = useState(false);

  useEffect(() => {
    if (!item.subItems) return;
    for (const sub of item.subItems) {
      if (selectedItem === sub._id) {
        setIsSelected(true);
        setShowSubItems(true);
      }
    }
  }, [item.subItems, selectedItem]);

  return { isSelected, showSubItems };
};
