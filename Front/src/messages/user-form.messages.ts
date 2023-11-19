import { SIDEBAR_MESSAGES, SidebarMessages } from "./layout/sidebar";

export type UserFormMessages = SidebarMessages & {
  errorInvalidEmail: string;
  errorRequiredEmail: string;
  errorEmailNotMatching: string;
  errorRequiredLanguage: string;
  errorInvalidLanguage: string;
  errorInvalidPhone: string;
  errorRequiredPhone: string;
  errorRequiredName: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  confirmEmailLabel: string;
  confirmEmailPlaceholder: string;
  languageLabel: string;
  phoneLabel: string;
  phonePlaceholder: string;
  phone2Label: string;
  phone2Placeholder: string;
  updateUserButton: string;
  createUserButton: string;
};

const USER_FORM_MESSAGES: UserFormMessages = {
  errorRequiredEmail: "Por favor, insira seu e-mail",
  errorInvalidEmail: "Email inválido",
  errorEmailNotMatching: "Campos de email não estão batendo",
  errorRequiredLanguage: "Por favor, escolha um idioma",
  errorInvalidLanguage: "Idioma inválido",
  errorRequiredName: "Por favor, insira seu nome",
  errorRequiredPhone: "Por favor, insira seu telefone",
  errorInvalidPhone: "Telefone inválido",
  nameLabel: "Nome do usuário",
  namePlaceholder: "Ex: Mateus Duarte",
  emailLabel: "Email",
  emailPlaceholder: "ex: talk2buy@gmail.com",
  confirmEmailLabel: "Confirmar email",
  confirmEmailPlaceholder: "ex: talk2buy@gmail.com",
  languageLabel: "Idioma",
  phoneLabel: "Telefone",
  phonePlaceholder: "Ex: (11) 11111-1111",
  phone2Label: "Telefone secundário",
  phone2Placeholder: "Ex: (11) 11111-1111",
  updateUserButton: "Atualizar",
  createUserButton: "Criar",
  //SIDEBAR
  ...SIDEBAR_MESSAGES,
};

export default USER_FORM_MESSAGES;
