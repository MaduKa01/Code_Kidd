import dynamic from "next/dynamic";

import Login from "@/components/screens/Login";
import LOGIN_MESSAGES, { LoginMessages } from "@/messages/login.messages";
import translationService from "@/services/translation.service";
import { LanguageParam, Params } from "@/types/params.types";

export interface PageProps extends Params<LanguageParam> {}

async function Page({ params }: PageProps) {
  const { lang } = params;

  const translations: LoginMessages = await translationService.get<LoginMessages>(
    LOGIN_MESSAGES,
    lang
  );

  return <Login messages={translations} />;
}

export default dynamic(() => Promise.resolve(Page), { ssr: false });
