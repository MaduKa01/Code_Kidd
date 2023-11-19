import { Metadata } from "@/types/params.types";

import { SIDEBAR_MESSAGES, SidebarMessages } from "./layout/sidebar";

export type CoursesMessages = SidebarMessages & {
  pageTitle: string;
  breadCrumbTitle: string;
  listTitle: string;
  xpTitle: string;
  nameColumn: string;
  categoryColumn: string;
  levelColumn: string;
  classesColumn: string;
  rewardsColumn: string;
};

export const COURSES_MESSAGES: CoursesMessages = {
  pageTitle: "Cursos",
  breadCrumbTitle: "Início / Cursos",
  listTitle: "Lista de Cursos",
  xpTitle: "Ganhe mais XP!",
  nameColumn: "Nome",
  categoryColumn: "Categoria",
  levelColumn: "Nível",
  classesColumn: "Aulas",
  rewardsColumn: "Premiação",
  ...SIDEBAR_MESSAGES,
};

export const COURSES_METADATA: Metadata = {
  title: "Cursos",
  description: "Gerenciamento de Cursos",
};
