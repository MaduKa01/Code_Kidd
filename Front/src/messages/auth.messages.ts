export type AuthMessages = {
  tokenNotFound: string;
  invalidToken: string;
  expiredToken: string;
  authError: string;
  loginError: string;
  userNotFound: string;
};

const AUTH_MESSAGES: AuthMessages = {
  tokenNotFound: "Token de autentificação não encontrado",

  invalidToken: "Token de autentificação inválido",

  expiredToken: "Token expirado!",

  authError: "Erro ao fazer autentificação",

  loginError: "Erro ao fazer login",

  userNotFound: "Usuário não encontrado",
};

export default AUTH_MESSAGES;
