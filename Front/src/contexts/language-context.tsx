"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

import LOCAL_STORAGE from "@/constants/local-storage";
import ROUTE_URLS from "@/constants/route-urls";
import { Language, LanguageContextProps, LanguageProviderProps } from "@/types/language.types";

const DEFAULT_LANGUAGE: Language = "PT-BR";

export const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps);

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [lang, setLang] = useState<Language>(DEFAULT_LANGUAGE);

  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    //This useEffect validates the current language and analyses if it needs changes.
    // The priority is userLanguage -> localStorageLanguage -> urlLanguage
    if (!localStorage) return;
    const localStorageLang = (localStorage.getItem(LOCAL_STORAGE.lang) as Language) || null;
    const langParam = params?.lang;

    const languageToSet = localStorageLang || (langParam as Language) || lang;
    const isBaseUrl = pathname === ROUTE_URLS.baseUrl;
    const newPathname = isBaseUrl
      ? ROUTE_URLS.dashboard(languageToSet)
      : pathname?.replace(params?.lang ? `${params.lang}` : "", languageToSet) || "";

    if (lang === languageToSet && lang === langParam) return;

    setLang(languageToSet);

    if (languageToSet !== localStorageLang) {
      localStorage.setItem(LOCAL_STORAGE.lang, languageToSet);
    }

    if (languageToSet !== langParam) {
      router.replace(newPathname);
    }
  }, [lang, params?.lang, pathname, router]);

  return <LanguageContext.Provider value={{ lang }}>{children}</LanguageContext.Provider>;
};
const useLanguage = () => useContext(LanguageContext);
export default useLanguage;
