import { ReactElement } from "react";

import { Language } from "./language.types";
export type SideBarIds = "dashboard" | "account" | "courses";

export type SideBarItem = {
  text: string;
  _id: SideBarIds;
  icon?: ReactElement<unknown, string>;
  url?: (lang: Language) => string;
  subItems?: SideBarItem[];
  ingnoreOnMenu?: boolean;
};

export type SideBarState = {
  selectedItem: SideBarIds | null;
};
