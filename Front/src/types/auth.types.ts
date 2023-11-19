import { ReactElement } from "react";

import { RegisterFormData } from "@/components/screens/Register/types";
import { UseLoadingReturn } from "@/hooks/use-loading";
import { ILogin } from "@/interfaces/auth.interfaces";
import IUser from "@/interfaces/user.interface";

import { RequestsProps } from "./requests.types";

export type LoginProps = {
  formData: ILogin;
} & RequestsProps;

export type RegisterProps = {
  formData: RegisterFormData;
} & RequestsProps;

export type ConfirmEmailProps = {
  token: string;
};

export type AuthContextProps = {
  // General auth props
  isAuthenticated: boolean;
  user: IUser | null;
  logout: (redirectToRegister?: string) => void;

  // Login props
  isLoggingIn: boolean;
  loadingIconLoggingIn: ReactElement<unknown, string>;
  login: (props: LoginProps) => void;

  // Registration props
  isRegistering: boolean;
  loadingIconRegistering: ReactElement<unknown, string>;
  register: (props: RegisterProps) => void;

  // Loading props (general)
  isLoading: boolean;
  loadingIcon: ReactElement<unknown, string>;

  // Logging out props
  isLoggingOut: boolean;
} & Pick<UseLoadingReturn, "isLoading" | "loadingIcon">;

export type AuthProviderProps = {
  children: ReactElement<unknown, string>;
};
