import { object, string } from "yup";

import IUser, { IUserInput } from "@/interfaces/user.interface";
import { UserFormMessages } from "@/messages/user-form.messages";

export const userFormNames: Record<keyof IUserInput, string> = {
  name: "name",
  email: "email",
  cellphone: "cellphone",
  password: "",
  enrolledCourses: "",
  savedCourses: "",
  points: "",
  level: "",
};

export const buildUserFormInitialData = (user?: IUser | null): IUserInput => {
  return {
    name: user?.name || "",
    email: user?.email || "",
    cellphone: user?.cellphone || "",
  };
};

export const buildUserFormSchema = (messages: UserFormMessages) =>
  object().shape({
    name: string().required(messages.errorRequiredName),
    email: string().email(messages.errorInvalidEmail).required(messages.errorRequiredEmail),
    cellphone: string(),
  });
