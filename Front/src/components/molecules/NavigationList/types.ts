import { ReactElement } from "react";

import { Language } from "@/types/language.types";

export type NavigationListItem<T = string> = {
  _id: T;
  title: string;
  href: (lang: Language) => string;
  icon: ReactElement<unknown, string>;
  selectedIcon: ReactElement<unknown, string>;
};
