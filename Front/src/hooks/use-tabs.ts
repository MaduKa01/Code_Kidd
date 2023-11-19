import { useState } from "react";

type UseTabsProps<T = string> = {
  initialTab: T;
};

type UseTabsReturn<T> = {
  activeTab: T;
  changeTab: (tab: T) => void;
};
const useTabs = <T>({ initialTab }: UseTabsProps<T>): UseTabsReturn<T> => {
  const [activeTab, setActiveTab] = useState<T>(initialTab);

  function changeTab(tab: T) {
    setActiveTab(tab);
  }

  return {
    activeTab,
    changeTab,
  };
};

export default useTabs;
