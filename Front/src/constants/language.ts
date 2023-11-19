import { SelectData } from "@/types/form.types";
import { Language } from "@/types/language.types";

export const DEFAULT_LANGUAGE: Language = "PT-BR";

export const LANGUAGES: SelectData<Language>[] = [{ label: "Português", value: "PT-BR" }];
