export type Language = "PT-BR";

export type Translation<T> = T & Record<string, string>;

export type LanguageContextProps = {
  lang: Language;
};
export type LanguageProviderProps = {
  children: React.ReactNode;
};
