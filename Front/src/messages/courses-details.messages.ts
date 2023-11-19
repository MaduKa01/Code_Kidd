import { Metadata } from "@/types/params.types";

import { SIDEBAR_MESSAGES, SidebarMessages } from "./layout/sidebar";

export type CoursesDetailsMessages = SidebarMessages & {
  breadCrumbTitle: string;
  pageTitle: string;
};

export const COURSES_DETAILS_MESSAGES: CoursesDetailsMessages = {
  breadCrumbTitle: "Cursos",
  pageTitle: "Curso",

  // Mensagens da Sidebar
  ...SIDEBAR_MESSAGES,
};

export const COURSES_DETAILS_METADATA: Metadata = {
  title: "Cursos",
  description: "Gerenciamento de Cursos",
};

export default COURSES_DETAILS_MESSAGES;
