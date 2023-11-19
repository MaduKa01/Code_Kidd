// bottom-bar.ts
import { hookstate } from "@hookstate/core";

import { SideBarIds } from "@/types/side-bar.types";

interface BottomBarState {
  selectedItem: SideBarIds;
  isMobileMenuOpen: boolean;
  openedMenuItems: Record<number, boolean>;
}

const bottomBarState = hookstate<BottomBarState>({
  selectedItem: "dashboard",
  isMobileMenuOpen: false,
  openedMenuItems: {},
});

export const selectBottomBarItem = (item: SideBarIds) => {
  bottomBarState.selectedItem.set(item);
};

export const toggleMobileMenu = (currentState: boolean) => {
  bottomBarState.isMobileMenuOpen.set(currentState);
};

export const toggleMenuItem = (index: number) => {
  const currentOpenedState = bottomBarState.openedMenuItems.get();
  bottomBarState.openedMenuItems.set({
    ...currentOpenedState,
    [index]: !currentOpenedState[index],
  });
};

export default bottomBarState;
