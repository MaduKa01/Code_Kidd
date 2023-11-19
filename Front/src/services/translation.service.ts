import { Language, Translation } from "@/types/language.types";

class TranslationService {
  async get<T extends { [key: string]: string }>(
    messages: T,
    lang: Language | null
  ): Promise<Translation<T>> {
    if (lang) return messages;
    return messages;
  }
}
const translationService = new TranslationService();
export default translationService;
