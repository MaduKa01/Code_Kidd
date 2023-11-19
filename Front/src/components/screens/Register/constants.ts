import { RegisterMessages } from "@/messages/register.messages";
import { SelectData } from "@/types/form.types";

export const DDI_OPTIONS = (messages: RegisterMessages): SelectData<string>[] => [
  { value: "55", label: `55 - ${messages.ddiBrazilOption}` },
];
