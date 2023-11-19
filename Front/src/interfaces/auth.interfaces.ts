export interface ILogin {
  [key: string]: string;
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
  cellphone: string;
}

export interface IRecoverPassword extends Pick<ILogin, "login"> {}

export interface IChangePassword extends Pick<ILogin, "login"> {
  [key: string]: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ILoginTokens {
  status: number;
  auth: boolean;
  token: string;
  id: string;
}

export interface IDecodedToken {
  id: string;
}
