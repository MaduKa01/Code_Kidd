import { Metadata as NextMetadata } from "next";

import { Language } from "./language.types";

export interface Params<T> {
  params: T;
}
export type LanguageParam = {
  lang: Language;
};

export type Metadata = NextMetadata & {
  [key: string]: string;
};

export type PageLayoutChildren = {
  props: { childProp: { segment: string } };
};
