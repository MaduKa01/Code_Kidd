import { Metadata } from "@/types/params.types";

import { SIDEBAR_MESSAGES, SidebarMessages } from "./layout/sidebar";
import USER_FORM_MESSAGES, { UserFormMessages } from "./user-form.messages";

export type ProfileMessages = UserFormMessages &
  SidebarMessages & {
    pageTitle: string;
    permissionsLabel: string;
    changePasswordLabel: string;
    profileLabel: string;
    passwordRequired: string;
    passwordFormatError: string;
    passwordNotMatching: string;
    newPasswordLabel: string;
    oldPasswordLabel: string;
    confirmPasswordLabel: string;
    newPasswordPlaceholder: string;
    oldPasswordPlaceholder: string;
    confirmPasswordPlaceholder: string;
    updatePasswordButton: string;
    updateUserSuccess: string;
    changePasswordSuccess: string;
    updateUserError: string;
    changePasswordError: string;
    changePassworTitle: string;
    changePasswordRequirements: string;
    changePasswordRequirementsDescription: string;
    changePasswordSpecialCharacterRule: string;
    changePasswordMinRule: string;
    changePasswordOneNumberRule: string;
    changePasswordLowerRule: string;
    changePasswordUpperRule: string;
    userNotFoundTitle: string;
    userNotFoundDescription: string;
    userErrorToLoadTitle: string;
    userNotFoundAlt: string;
    userKeyText: string;
    permissionErrorToLoadTitle: string;
    permissionsTitle: string;
    insertUserProfileSuccess: string;
    inserUserProfileError: string;
  };

const PROFILE_MESSAGES: ProfileMessages = {
  pageTitle: "Perfil",
  permissionsLabel: "Permissões",
  changePasswordLabel: "Alterar senha",
  profileLabel: "Perfil",
  passwordRequired: "Campo obrigatório",
  passwordFormatError: "Senha inválida",
  passwordNotMatching: "Senhas não estão batendo",
  newPasswordLabel: "Senha nova",
  oldPasswordLabel: "Senha atual",
  confirmPasswordLabel: "Confirmação de senha",
  newPasswordPlaceholder: "Digite sua senha nova aqui",
  oldPasswordPlaceholder: "Digite sua senha atual aqui",
  confirmPasswordPlaceholder: "Digite sua confirmação de senha aqui",
  updatePasswordButton: "Atualizar",
  updateUserSuccess: "Usuário atualizado com sucesso",
  changePasswordSuccess:
    "Senha alterada com sucesso! Faça o login novamente para utilizar a aplicação",
  updateUserError: "Erro ao alterar dados do usuário",
  changePasswordError: "Erro ao alterar senha",
  changePassworTitle: "Alterar senha",
  changePasswordRequirements: "Requisitos de senha",
  changePasswordRequirementsDescription: "Siga estes requisitos para ter uma senha forte",
  changePasswordSpecialCharacterRule: "Um carácter especial",
  changePasswordMinRule: "Mínimo 6 caracteres",
  changePasswordOneNumberRule: "Um número",
  changePasswordLowerRule: "Uma letra minúscula",
  changePasswordUpperRule: "Uma letra maiúscula",
  userNotFoundTitle: "Usuário não encontrado",
  userNotFoundDescription:
    "Não conseguimos encontrar o usuário, recarregue a página e tente novamente",
  userErrorToLoadTitle: "Erro ao buscar usuário",
  userNotFoundAlt: "Imagem indicando erro ao buscar usuário",
  userKeyText: "Chave do usuário",
  permissionErrorToLoadTitle: "Erro ao buscas permissões",
  permissionsTitle: "Permissões",
  insertUserProfileSuccess: "Permissão alterada com sucesso",
  inserUserProfileError: "Erro ao alterar permissão",

  ...USER_FORM_MESSAGES,

  //SIDEBAR
  ...SIDEBAR_MESSAGES,
};

export const PROFILE_METADATA: Metadata = {
  title: "Perfil",

  description: "Página de Perfil",
};

export const CHANGE_PASSWORD_METADATA: Metadata = {
  title: "Trocar Senha",

  description: "Página de Troca de Senha",
};

export const PERMISSIONS_METADATA: Metadata = {
  title: "Permissões",

  description: "Página de Permissões",
};

export default PROFILE_MESSAGES;
