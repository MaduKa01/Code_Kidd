import { Metadata } from "@/types/params.types";

import { SIDEBAR_MESSAGES, SidebarMessages } from "./layout/sidebar";
import USER_FORM_MESSAGES, { UserFormMessages } from "./user-form.messages";
import { USERS_FILTERS_MESSAGES, UsersFiltersMessages } from "./users/users-filters.messages";

export type UsersMessages = UserFormMessages &
  UsersFiltersMessages &
  SidebarMessages & {
    pageTitle: string;
    nameColumn: string;
    emailColumn: string;
    phone1Column: string;
    phone2Column: string;
    statusColumn: string;
    optionsColum: string;
    updateUserPopover: string;
    removeUserPopover: string;
    permissionsUserPopover: string;
    userBreadCrumbTitle: string;
    deleteUserDialogTitle: string;
    deleteUserDialogContent: string;
    deleteUserDialogCancel: string;
    deleteUserDialogConfirm: string;
    deleteUserSucess: string;
    createUserPageTitle: string;
    createUserBreadCrumbTitle: string;
    createUserSuccess: string;
    createUserError: string;
    updateUserPageTitle: string;
    updateUserBreadCrumbTitle: string;
    updateUserSuccess: string;
    updateUserError: string;
    userNotFoundError: string;
    userErrorToLoad: string;
    userNotFoundDescription: string;
    userNotFoundAlt: string;
    addUserButton: string;
    userTableTitle: string;
    emailNotVerified: string;
    deactivatedUserSuccess: string;
    activatedUserSuccess: string;
    deactivatedUserError: string;
    activatedUserError: string;
    permissionsTitle: string;
    insertUserProfileSuccess: string;
    inserUserProfileError: string;
  };

export const USERS_MESSAGES: UsersMessages = {
  pageTitle: "Usuários",
  nameColumn: "Nome",
  emailColumn: "Email",
  phone1Column: "Telefone Primário",
  phone2Column: "Telefone Secundário",
  statusColumn: "Usuário Ativo",
  updateUserPopover: "Editar",
  removeUserPopover: "Remover",
  permissionsUserPopover: "Permissões",
  userBreadCrumbTitle: "Usuários",
  optionsColum: "Opções",
  deleteUserDialogTitle: "Excluir Usuário",
  deleteUserDialogContent: "Tem certeza de que deseja excluir este usuário?",
  deleteUserDialogCancel: "Cancelar",
  deleteUserDialogConfirm: "Confirmar",
  deleteUserSucess: "Usuario deletado com sucesso.",
  createUserPageTitle: "Criar usuário",
  createUserBreadCrumbTitle: "Criar usuário",
  createUserSuccess: "Usuário criado com sucesso",
  createUserError: "Erro ao criar usuário",
  updateUserPageTitle: "Editar usuário",
  updateUserBreadCrumbTitle: "Editar usuário",
  updateUserSuccess: "Usuário editado com sucesso",
  updateUserError: "Erro ao editar  usuário",
  userNotFoundError: "Usuários não encontrados",
  userNotFoundDescription:
    "Não conseguimos encontrar nenhum usuário, recarregue a página e tente novamente",
  userErrorToLoad: "Erro ao buscar usuários",
  userNotFoundAlt: "Imagem indicando erro ao buscar usuários",
  addUserButton: "Novo Usuário",
  userTableTitle: "Listagem de Usuários",
  emailNotVerified: "Email não verificado",
  deactivatedUserSuccess: "Usuário desativado com sucesso",
  activatedUserSuccess: "Usuário ativado com sucesso",
  deactivatedUserError: "Erro ao desativar usuário",
  activatedUserError: "Erro ao ativar usuário",
  permissionsTitle: "Permissões",
  insertUserProfileSuccess: "Permissão alterada com sucesso",
  inserUserProfileError: "Erro ao alterar permissão",

  ...USERS_FILTERS_MESSAGES,

  ...USER_FORM_MESSAGES,

  //SIDEBAR
  ...SIDEBAR_MESSAGES,
};

export const USERS_METADATA: Metadata = {
  title: "Usuários",
  description: "Gerenciamento de Usuários",
};
export const CREATE_USER_METADATA: Metadata = {
  title: "Criar Usuário",
  description: "Criação de Usuário",
};

export const UPDATE_USER_METADATA: Metadata = {
  title: "Editar Usuário",

  description: "Página de Edição do Perfil de um Usuário",
};
export default USERS_MESSAGES;
