import { SideBarItem as SideBarItemType } from "@/types/side-bar.types";

export const FILTERED_ITEMS = (items: SideBarItemType[], desiredIds: string[], order: string[]) => {
  const flatItems: SideBarItemType[] = [];

  items.forEach((item) => {
    flatItems.push(item);
    if (item.subItems) {
      flatItems.push(...item.subItems);
    }
  });

  const filtered = flatItems.filter((item) => desiredIds.includes(item._id));
  const ordered = order.map((id) => filtered.find((item) => item._id === id));

  return ordered;
};
