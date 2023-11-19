import { object, string } from "yup";

import { IRegister } from "@/interfaces/auth.interfaces";
import { RegisterMessages } from "@/messages/register.messages";

export const buildRegisterFormInitialData = (): IRegister => {
  return {
    name: "",
    email: "",
    password: "",
    cellphone: "",
  };
};

export const buildRegisterFormSchema = (messages: RegisterMessages) =>
  object().shape({
    name: string().required("Digite um nome"),
    email: string().email(messages.errorInvalidEmail).required(messages.errorRequiredEmail),
    cellphone: string().required("O numero do celular é obrigatorio!"),
    password: string()
      .required(messages.errorRequiredPassword)
      .min(8, messages.errorPasswordLength)
      .matches(/[a-z]/, messages.errorPasswordLowercase)
      .matches(/[A-Z]/, messages.errorPasswordUppercase)
      .matches(/[0-9]/, messages.errorPasswordNumeric)
      .matches(/[!@#$%^&*()_+\-=[\]{};:"\\|,.<>/?]+/, messages.errorPasswordSpecialChar),
  });
