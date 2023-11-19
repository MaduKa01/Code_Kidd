import { hookstate } from "@hookstate/core";

import { SideBarIds, SideBarState } from "@/types/side-bar.types";

const sideBarState = hookstate<SideBarState>({
  selectedItem: "dashboard",
});

export const selectSideBarItem = (item: SideBarIds) => {
  sideBarState.selectedItem.set(item);
};

export default sideBarState;
