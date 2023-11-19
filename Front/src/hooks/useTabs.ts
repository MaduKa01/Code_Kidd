import { useState } from "react";

const useTabs = (initialTab: number) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  function handleTabChange(_: unknown, newTab: number) {
    setActiveTab(newTab);
  }

  return {
    activeTab,
    handleTabChange,
  };
};

export default useTabs;
