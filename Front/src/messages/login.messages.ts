import { Metadata } from "@/types/params.types";

import { SIDEBAR_MESSAGES, SidebarMessages } from "./layout/sidebar";

export type LoginMessages = SidebarMessages & {
  loginTitle: string;
  emailPlaceholder: string;
  emailLabel: string;
  passwordPlaceholder: string;
  passwordLabel: string;
  loginAction: string;
  forgotPassword: string;
  dontHaveAnAccount: string;
  clickText: string;
  errorRequiredEmail: string;
  errorInvalidEmail: string;
  errorRequiredPassword: string;
  getUserDefaultMessage: string;
};

const LOGIN_MESSAGES: LoginMessages = {
  loginTitle: "Login",

  emailPlaceholder: "Email",

  emailLabel: "Email",

  passwordPlaceholder: "Senha",

  passwordLabel: "Senha",

  loginAction: "Fazer login",

  forgotPassword: "Esqueceu a senha?",

  dontHaveAnAccount: "Não possui uma conta?",

  clickText: "Clique aqui!",

  errorRequiredEmail: "Por favor, insira seu e-mail",

  errorInvalidEmail: "Email inválido",

  errorRequiredPassword: "Senha obrigatória",

  getUserDefaultMessage: "Erro ao buscar usuário",

  //SIDEBAR
  ...SIDEBAR_MESSAGES,
};

export const LOGIN_METADATA: Metadata = {
  title: "Login",

  description: "Página de Login",
};

export default LOGIN_MESSAGES;
