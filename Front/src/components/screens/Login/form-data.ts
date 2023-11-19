import { object, string } from "yup";

import { LoginMessages } from "@/messages/login.messages";

import { LoginFormData } from "./types";

export const buildLoginFormInitialData = (): LoginFormData => {
  return {
    email: "",
    password: "",
  };
};

export const buildLoginFormSchema = (messages: LoginMessages) =>
  object().shape({
    email: string().email(messages.errorInvalidEmail).required(messages.errorRequiredEmail),
    password: string().required(messages.errorRequiredPassword),
  });
