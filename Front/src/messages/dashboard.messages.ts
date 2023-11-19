import { Metadata } from "@/types/params.types";

import { SIDEBAR_MESSAGES, SidebarMessages } from "./layout/sidebar";

export type DashboardMessages = SidebarMessages & {
  breadCrumbTitle: string;
  pageTitle: string;
};

const DASHBOARD_MESSAGES: DashboardMessages = {
  // Breadcrumbs e Título Principal da Página
  breadCrumbTitle: "Dashboard",
  pageTitle: "Dashboard",

  // Mensagens da Sidebar
  ...SIDEBAR_MESSAGES,
};

export const DASHBOARD_METADATA: Metadata = {
  title: "Dashboard",
  description: "Página de Dashboard",
};

export default DASHBOARD_MESSAGES;
