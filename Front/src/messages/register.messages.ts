import { Metadata } from "@/types/params.types";

import { SIDEBAR_MESSAGES, SidebarMessages } from "./layout/sidebar";

export type RegisterMessages = SidebarMessages & {
  // Título e Mensagens de Boas-vindas
  registerTitle: string;
  welcomeMessage: string;
  enterDetailsMessage: string;

  // Placeholders e Labels
  userNamePlaceholder: string;
  userNameLabel: string;
  emailPlaceholder: string;
  emailLabel: string;
  phonePlaceholder: string;
  phoneLabel: string;
  companyNamePlaceholder: string;
  companyNameLabel: string;
  passwordPlaceholder: string;
  passwordLabel: string;
  confirmPasswordPlaceholder: string;
  confirmPasswordLabel: string;
  ddiLabel: string;

  // Ações
  registerAction: string;
  alreadyHaveAnAccount: string;
  clickText: string;
  agreeTo: string;
  termsOfService: string;

  // Mensagens de Erro
  errorRequiredUserName: string;
  errorRequiredEmail: string;
  errorInvalidEmail: string;
  errorRequiredPhone: string;
  errorRequiredCompanyName: string;
  errorRequiredPassword: string;
  errorPasswordMismatch: string;
  errorRequiredConfirmPassword: string;
  getNewUserDefaultMessage: string;
  errorPasswordLength: string;
  errorPasswordLowercase: string;
  errorPasswordUppercase: string;
  errorPasswordNumeric: string;
  errorPasswordSpecialChar: string;
  errorEmailExists: string;

  // Opções DDI
  ddiBrazilOption: string;
};

const REGISTER_MESSAGES: RegisterMessages = {
  // Título e Mensagens de Boas-vindas
  registerTitle: "cadastro",
  welcomeMessage: "Seja bem-vindo(a)",
  enterDetailsMessage: "Insira seus dados abaixo.",

  // Placeholders e Labels
  userNamePlaceholder: "Nome",
  userNameLabel: "Nome",
  emailPlaceholder: "Email",
  emailLabel: "Email",
  phonePlaceholder: "Telefone com DDD",
  phoneLabel: "Telefone",
  companyNamePlaceholder: "Empresa",
  companyNameLabel: "Empresa",
  passwordPlaceholder: "Senha",
  passwordLabel: "Senha",
  confirmPasswordPlaceholder: "Confirme a senha",
  confirmPasswordLabel: "Confirme a senha",
  ddiLabel: "Pais",
  // Ações
  registerAction: "Registrar",
  alreadyHaveAnAccount: "Já possui uma conta?",
  clickText: "Clique aqui",
  agreeTo: "Concordo com os",
  termsOfService: "termos de serviço",

  // Mensagens de Erro
  errorRequiredUserName: "Nome é obrigatório.",
  errorRequiredEmail: "Por favor, insira seu e-mail",
  errorInvalidEmail: "Email inválido",
  errorRequiredPhone: "Telefone com DDD é obrigatório.",
  errorRequiredCompanyName: "Empresa é obrigatória.",
  errorRequiredPassword: "Por favor, insira uma senha",
  errorPasswordMismatch: "As senhas não coincidem",
  errorRequiredConfirmPassword: "Por favor, confirme sua senha",
  getNewUserDefaultMessage: "Erro ao criar usuário",
  errorPasswordLength: "A senha deve ter no mínimo 8 caracteres.",
  errorPasswordLowercase: "A senha deve conter pelo menos 1 caractere minúsculo ('a'-'z').",
  errorPasswordUppercase: "A senha deve conter pelo menos 1 caractere maiúsculo ('A'-'Z').",
  errorPasswordNumeric: "A senha deve conter pelo menos 1 caractere numérico.",
  errorPasswordSpecialChar: "A senha deve conter pelo menos 1 caractere especial.",
  errorEmailExists: "Este e-mail já está sendo usado.",

  // Opções DDI
  ddiBrazilOption: "Brasil",

  //SIDEBAR
  ...SIDEBAR_MESSAGES,
};

export const REGISTER_METADATA: Metadata = {
  title: "Cadastro",
  description: "Página de Cadastro",
};

export default REGISTER_MESSAGES;
